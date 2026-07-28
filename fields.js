// fields.js
// ============================================================
// البحث وعرض النتائج مع دعم الحقول المتعددة
// واستخدام قائمة اقتراحات مخصصة (بدلاً من datalist)
// مع تحسين البحث ليتحمل الهمزات والتشكيل
// ============================================================

const searchBtn = document.getElementById("searchBtn");
const result = document.getElementById("result");
const majorInput = document.getElementById("majorInput");
const suggestionsList = document.getElementById("suggestionsList");

// ============================================================
// دوال تطبيع النص (للتخلص من الهمزات والتشكيل)
// ============================================================

/**
 * تطبيع النص لإزالة الهمزات والتشكيل وعلامات التمديد
 * يصبح النص خالياً من العلامات ليسهل البحث
 */
function normalizeText(text) {
    // أولاً: تحويل النص إلى صيغة Unicode NFC (لتوحيد تمثيل الحروف)
    text = text.normalize('NFC');

    // إزالة علامات التشكيل (الفتحة، الضمة، الكسرة، السكون، الشدة، التنوين، إلخ)
    text = text.replace(/[\u064B-\u065F\u0670]/g, ''); // نطاق علامات التشكيل العربية
    text = text.replace(/[\u0617-\u061A]/g, ''); // علامات أخرى

    // استبدال الألف الممدودة (آ) بألف عادية
    text = text.replace(/آ/g, 'ا');
    // استبدال الألف المقصورة (ى) بياء أو ألف حسب السياق، لكننا نستبدلها بياء لتوحيد
    text = text.replace(/ى/g, 'ي');
    // استبدال التاء المربوطة بهاء مؤنث (ة) -> هـ، لكن الأفضل تحويلها إلى هاء
    text = text.replace(/ة/g, 'ه');

    // إزالة الهمزات المختلفة (أ، إ، ؤ، ئ، ء) وتحويلها للحرف الأقرب
    text = text.replace(/أ/g, 'ا');
    text = text.replace(/إ/g, 'ا');
    text = text.replace(/ؤ/g, 'و');
    text = text.replace(/ئ/g, 'ي');
    text = text.replace(/ء/g, ''); // نزيل الهمزة المفردة

    // إزالة المسافات الزائدة من البداية والنهاية وتقليل المسافات المتعددة إلى مسافة واحدة
    text = text.trim().replace(/\s+/g, ' ');

    return text;
}

/**
 * مقارنة نصين بعد تطبيعهما
 */
function isNormalizedEqual(str1, str2) {
    return normalizeText(str1) === normalizeText(str2);
}

// ============================================================
// قائمة التخصصات المطبعة (للبحث السريع)
// ============================================================

// نسخة مطبعة من أسماء التخصصات مع الاحتفاظ بالمرجع الأصلي
const normalizedMajors = MAJORS.map(major => ({
    original: major,
    normalized: normalizeText(major.name)
}));

// جميع أسماء التخصصات الأصلية (للقائمة المخصصة)
const allMajorNames = MAJORS.map(major => major.name);

// ============================================================
// دوال القائمة المخصصة (مع التطبيع)
// ============================================================

/**
 * عرض الاقتراحات بناءً على النص المدخل (مع تجاهل الهمزات والتشكيل)
 */
function showSuggestions(filter = "") {
    const query = normalizeText(filter.trim());

    // إذا كان الحقل فارغاً، نخفي القائمة
    if (query === "") {
        suggestionsList.style.display = "none";
        return;
    }

    // تصفية الأسماء التي تحتوي على النص المدخل (بعد التطبيع)
    let matched = allMajorNames.filter(name =>
        normalizeText(name).includes(query)
    );

    // عرض أول 10 نتائج فقط
    matched = matched.slice(0, 10);

    if (matched.length === 0) {
        suggestionsList.style.display = "none";
        return;
    }

    // بناء عناصر القائمة
    suggestionsList.innerHTML = matched
        .map(name => `<li data-value="${name}">${name}</li>`)
        .join("");

    suggestionsList.style.display = "block";

    // إضافة حدث النقر على كل عنصر
    // (نستخدم mousedown بدل click لأنه يحدث قبل blur على حقل الإدخال،
    // هيك بنضمن إنو الاسم ينكتب قبل ما تختفي القائمة)
    suggestionsList.querySelectorAll("li").forEach(li => {
        li.addEventListener("mousedown", function (e) {
            e.preventDefault(); // يمنع فقدان التركيز المبكر عن حقل الإدخال
            majorInput.value = this.dataset.value;
            suggestionsList.style.display = "none";
            searchMajor(); // تنفيذ البحث فور الاختيار
        });
    });
}

/**
 * إخفاء القائمة
 */
function hideSuggestions() {
    suggestionsList.style.display = "none";
}

// ============================================================
// ربط الأحداث على حقل الإدخال
// ============================================================

majorInput.addEventListener("input", function () {
    showSuggestions(this.value);

    // إخفاء نتيجة التخصص فور أي تعديل بالحقل (حتى لو انحذف حرف واحد بس)
    result.style.display = "none";
});

majorInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        hideSuggestions();
        searchMajor();
    }
});

majorInput.addEventListener("blur", function () {
    setTimeout(hideSuggestions, 200);
});

majorInput.addEventListener("focus", function () {
    if (this.value.trim() !== "") {
        showSuggestions(this.value);
    }
});

document.addEventListener("click", function (e) {
    if (e.target !== majorInput && !suggestionsList.contains(e.target)) {
        hideSuggestions();
    }
});

// ============================================================
// فتح وإغلاق القائمة على الموبايل والتبديل بين الوضعين
// ============================================================

const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('open');
    });
}

const themeToggle = document.getElementById('themeToggle');
const htmlEl = document.documentElement;

// تحميل الثيم المحفوظ عند فتح الصفحة (يضمن ثبات الاختيار بين كل صفحات الموقع)
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

htmlEl.setAttribute('data-theme', initialTheme);
if (themeToggle) {
    themeToggle.textContent = initialTheme === 'dark' ? '☀️' : '🌙';
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const isDark = htmlEl.getAttribute('data-theme') === 'dark';
        const newTheme = isDark ? 'light' : 'dark';

        htmlEl.setAttribute('data-theme', newTheme);
        themeToggle.textContent = isDark ? '🌙' : '☀️';
        localStorage.setItem('theme', newTheme);
    });
}

// ============================================================
// دوال البحث الرئيسية (المُحسَّنة)
// ============================================================

function getMinAverage(config, majorName) {
    if (!config) return "غير محدد";
    if (config.minAverage && typeof config.minAverage === 'object') {
        if (majorName.includes("الطب البشري") || majorName.includes("طب الأسنان")) {
            return config.minAverage.medical;
        } else if (majorName.includes("صيدلة") || majorName.includes("دكتور صيدلة")) {
            return config.minAverage.pharmacy;
        } else if (majorName.includes("بيطري")) {
            return config.minAverage.veterinary;
        }
        return config.minAverage.medical;
    }
    return config.minAverage || "غير محدد";
}

function searchMajor() {
    const userInput = majorInput.value.trim();

    if (userInput === "") {
        result.style.display = "block";
        result.innerHTML = `
            <h2>أدخل اسم تخصص</h2>
            <p>يرجى كتابة اسم التخصص في مربع البحث.</p>
            <p style="font-size:13px;color:var(--text-mid);">💡 ابدأ بالكتابة وستظهر لك الاقتراحات.</p>
        `;
        return;
    }

    // البحث عن التطابق التام بعد التطبيع
    const normalizedInput = normalizeText(userInput);
    let major = MAJORS.find(m => normalizeText(m.name) === normalizedInput);

    // إذا لم نجد تطابقاً تاماً، نبحث عن تطابق جزئي (بعد التطبيع)
    if (!major) {
        const suggestions = MAJORS.filter(m => normalizeText(m.name).includes(normalizedInput));
        if (suggestions.length > 0) {
            major = suggestions[0]; // نأخذ أول اقتراح
        }
    }

    if (!major) {
        result.style.display = "block";
        result.innerHTML = `
            <h2>التخصص غير موجود</h2>
            <p>لم نجد "<strong>${userInput}</strong>" في قائمة التخصصات.</p>
            <p style="margin-top:10px;font-size:14px;color:var(--text-mid);">💡 جرب كتابة اسم تخصص آخر، أو اختر من الاقتراحات.</p>
        `;
        return;
    }

    // ============================================================
    // جلب جميع الحقول المرتبطة بالتخصص
    // ============================================================
    const fieldConfigs = major.fields.map(fid => FIELD_CONFIG[fid]).filter(Boolean);

    if (fieldConfigs.length === 0) {
        result.style.display = "block";
        result.innerHTML = `<h2>خطأ في البيانات</h2><p>لا توجد حقول مرتبطة بهذا التخصص.</p>`;
        return;
    }

    // ============================================================
    // بناء عرض الحقول المتعددة
    // ============================================================
    let fieldsHtml = "";
    let allPathways = { academic: [], vocational: [] };
    let minAverages = [];

    fieldConfigs.forEach((config, index) => {
        const avg = getMinAverage(config, major.name);
        minAverages.push(avg);

        // عرض الحقل
        fieldsHtml += `<span style="display:inline-block;background:var(--blue-light);color:var(--heading-color);padding:4px 12px;border-radius:20px;font-size:14px;margin:3px 5px 3px 0;">${config.name}</span>`;

        // جمع المسارات
        if (config.pathways) {
            if (config.pathways.academic) {
                allPathways.academic = [...allPathways.academic, ...config.pathways.academic];
            }
            if (config.pathways.vocational) {
                allPathways.vocational = [...allPathways.vocational, ...config.pathways.vocational];
            }
        }
    });

    // إزالة التكرار من المسارات
    allPathways.academic = [...new Set(allPathways.academic)];
    allPathways.vocational = [...new Set(allPathways.vocational)];

    // عرض المسارات
    let pathwaysHtml = "";
    if (allPathways.academic.length > 0) {
        pathwaysHtml += `<div style="margin-bottom:6px;"><strong>🎓 المسار الأكاديمي:</strong> ${allPathways.academic.join("، ")}</div>`;
    }
    if (allPathways.vocational.length > 0) {
        pathwaysHtml += `<div><strong>🔧 المسار المهني (BTEC):</strong> ${allPathways.vocational.join("، ")}</div>`;
    }
    if (!pathwaysHtml) {
        pathwaysHtml = `<p style="color:var(--text-mid);">جميع المسارات مسموحة (يراجع سياسة القبول).</p>`;
    }

    // ============================================================
    // عرض المعدلات لكل حقل على حدة
    // ============================================================
    let avgDisplay = "";
    fieldConfigs.forEach((config, index) => {
        const avg = getMinAverage(config, major.name);
        const fieldName = config.name;
        const fieldType = config.type || "";
        
        if (index > 0) avgDisplay += "<br>";
        avgDisplay += `<span style="font-weight:bold;">${fieldName}</span> (${fieldType}): ${avg}`;
    });

    // ============================================================
    // عرض المواد مقسمة حسب الحقل
    // ============================================================
    let compulsoryHtml = "";
    let electiveHtml = "";

    fieldConfigs.forEach((config, index) => {
        const fieldName = config.name;
        
        // المواد الإجبارية
        if (config.compulsory && config.compulsory.length > 0) {
            const listItems = config.compulsory.map(sub => `<li>${sub}</li>`).join("");
            compulsoryHtml += `
                <div style="margin-bottom:12px;">
                    <strong style="color:var(--heading-color);">📚 ${fieldName}:</strong>
                    <ul style="margin-top:4px;">${listItems}</ul>
                </div>
            `;
        }
        
        // المواد الاختيارية
        if (config.elective && config.elective.length > 0) {
            const listItems = config.elective.map(sub => `<li>${sub}</li>`).join("");
            electiveHtml += `
                <div style="margin-bottom:12px;">
                    <strong style="color:var(--heading-color);">📖 ${fieldName}:</strong>
                    <ul style="margin-top:4px;">${listItems}</ul>
                </div>
            `;
        }
    });

    if (!compulsoryHtml) compulsoryHtml = `<p style="color:var(--text-mid);">لا توجد مواد إجبارية محددة.</p>`;
    if (!electiveHtml) electiveHtml = `<p style="color:var(--text-mid);">لا توجد مواد اختيارية محددة.</p>`;

    // ============================================================
    // عرض النتيجة النهائية
    // ============================================================
    result.style.display = "block";
    result.innerHTML = `
        <h2>${major.name}</h2>

        <p class="info"><strong>الحقول:</strong> ${fieldsHtml}</p>
        <p class="info"><strong>النوع:</strong> ${fieldConfigs[0]?.type || "غير محدد"}</p>
        
        <div class="info" style="margin-bottom:12px;">
            <strong>أدنى معدل قبول موحد (للجامعات الرسمية):</strong>
            <div style="margin-top:4px;font-size:16px;line-height:1.8;">
                ${avgDisplay}
            </div>
        </div>

        <div class="info" style="margin-bottom:12px;">
            <strong>المسارات المسموحة للقبول:</strong>
            <div style="margin-top:6px;font-size:15px;line-height:1.8;">
                ${pathwaysHtml}
            </div>
        </div>

        <h3>📚 المواد الإجبارية الأساسية</h3>
        ${compulsoryHtml}

        <h3>📖 المواد الاختيارية الموصى بها</h3>
        ${electiveHtml}

        <h3>🔄 تخصصات بديلة مقترحة</h3>
        ${major.alternatives.length > 0 
            ? `<ul>${major.alternatives.map(alt => `<li>${alt}</li>`).join("")}</ul>`
            : `<p style="color:var(--text-mid);">لا توجد بدائل مسجلة حالياً.</p>`
        }

        <hr style="margin:20px 0;border:0;border-top:1px solid rgba(148,163,184,0.35);">
        <p style="font-size:13px;color:var(--text-mid);text-align:center;">
            ⚠️ هذه المعلومات مبنية على <strong>سياسة القبول الموحد</strong> للجامعات الرسمية.<br>
            لمعرفة المعدلات التنافسية لكل جامعة، راجع صفحة "معدلات القبول".
        </p>
    `;
}

// ============================================================
// ربط زر البحث
// ============================================================

searchBtn.addEventListener("click", searchMajor);

// إذا كان هناك نص مسبق في الحقل (مثلاً من التحديث) نعرض النتيجة فوراً
if (majorInput.value.trim() !== "") {
    searchMajor();
}