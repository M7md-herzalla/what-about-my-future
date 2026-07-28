// فتح وإغلاق القائمة على الموبايل
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });

  // إغلاق القائمة عند الضغط على رابط
  const navLinks = mainNav.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
    });
  });
}

// تبديل الوضع الليلي / النهاري

const themeToggle = document.getElementById('themeToggle');
const htmlEl = document.documentElement;
if (themeToggle) {
  // التحقق من الوضع المخزن
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    htmlEl.setAttribute('data-theme', savedTheme);
    themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
  }

  themeToggle.addEventListener('click', () => {
    const isDark = htmlEl.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';
    htmlEl.setAttribute('data-theme', newTheme);
    themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    localStorage.setItem('theme', newTheme);
  });
}

// 1. عناصر DOM

const searchInput = document.getElementById("searchInput");
const searchButton = document.querySelector(".search-box button");
const universityFilter = document.getElementById("universityFilter");
const collegeFilter = document.getElementById("collegeFilter");
const sortFilter = document.getElementById("sortFilter");
const resetBtn = document.getElementById("resetBtn");
const cardsContainer = document.getElementById("cardsContainer");

// 2. متغيرات Pagination

let currentPage = 1;
const itemsPerPage = 6;
let filteredData = [];

// 3. دالة عرض البطاقات مع Pagination


function renderCards(data) {
  if (!cardsContainer) {
    console.error("❌ cardsContainer غير موجود");
    return;
  }

  filteredData = data;
  currentPage = 1;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageData = filteredData.slice(startIndex, endIndex);

  if (filteredData.length === 0) {
    cardsContainer.innerHTML = `
      <div class="no-results">
        <i class="fa-solid fa-circle-exclamation"></i>
        <h3>لا توجد نتائج مطابقة</h3>
        <p>حاول تعديل كلمات البحث أو اختيار جامعة أخرى</p>
      </div>
    `;
    return;
  }

  let html = '<div class="cards-grid">';
  pageData.forEach((item) => {
    const university = item.university || "غير محدد";
    const college = item.college || "غير محدد";
    const major = item.major || "غير محدد";
    const acceptance = item.acceptance ?? "-";
    const hours = item.hours ?? "-";
    const regular = item.regular ?? "-";
    const parallel = item.parallel ?? "-";
    const image = item.image || "imags/universities/default.png";

    html += `
      <div class="card">
        <div class="card-header">
          <img src="${image}" alt="${university}" loading="lazy" onerror="this.src='imags/universities/default.png'" />
          <div class="card-university">
            <h3>${university}</h3>
            <span class="college-name">${college}</span>
          </div>
        </div>
        <div class="card-body">
          <h4 class="major-name">${major}</h4>
          <div class="details-grid">
            <div class="detail-item">
              <span class="label">المعدل</span>
              <span class="value">${acceptance}%</span>
            </div>
            <div class="detail-item">
              <span class="label">ساعات الخطة</span>
              <span class="value">${hours}</span>
            </div>
            <div class="detail-item">
              <span class="label">الرسوم العادية</span>
              <span class="value">${regular} د.أ</span>
            </div>
            <div class="detail-item">
              <span class="label">الرسوم الموازي</span>
              <span class="value">${parallel} د.أ</span>
            </div>
          </div>
        </div>
      </div>
    `;
  });
  html += '</div>';

  if (totalPages > 1) {
    html += `
      <div class="pagination">
        <button class="page-btn prev-btn" onclick="changePage(-1)" ${currentPage === 1 ? 'disabled' : ''}>
          <i class="fa-solid fa-chevron-right"></i> السابق
        </button>
        <div class="page-numbers">
    `;
    
    const pagesToShow = getPageNumbers(currentPage, totalPages);
    pagesToShow.forEach((page) => {
      if (page === "...") {
        html += `<span class="page-dots">...</span>`;
      } else {
        html += `
          <button class="page-num ${page === currentPage ? 'active' : ''}" onclick="goToPage(${page})">
            ${page}
          </button>
        `;
      }
    });

    html += `
        </div>
        <button class="page-btn next-btn" onclick="changePage(1)" ${currentPage === totalPages ? 'disabled' : ''}>
          التالي <i class="fa-solid fa-chevron-left"></i>
        </button>
      </div>
    `;
  }

  cardsContainer.innerHTML = html;
}

// 4. دوال التنقل بين الصفحات

function changePage(direction) {
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const newPage = currentPage + direction;
  if (newPage < 1 || newPage > totalPages) return;
  currentPage = newPage;
  renderCurrentPage();
}

function goToPage(page) {
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  if (page < 1 || page > totalPages) return;
  currentPage = page;
  renderCurrentPage();
}

function renderCurrentPage() {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageData = filteredData.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  
  let html = '<div class="cards-grid">';
  pageData.forEach((item) => {
    const university = item.university || "غير محدد";
    const college = item.college || "غير محدد";
    const major = item.major || "غير محدد";
    const acceptance = item.acceptance ?? "-";
    const hours = item.hours ?? "-";
    const regular = item.regular ?? "-";
    const parallel = item.parallel ?? "-";
    const image = item.image || "imags/universities/default.png";

    html += `
      <div class="card">
        <div class="card-header">
          <img src="${image}" alt="${university}" loading="lazy" onerror="this.src='imags/universities/default.png'" />
          <div class="card-university">
            <h3>${university}</h3>
            <span class="college-name">${college}</span>
          </div>
        </div>
        <div class="card-body">
          <h4 class="major-name">${major}</h4>
          <div class="details-grid">
            <div class="detail-item">
              <span class="label">المعدل</span>
              <span class="value">${acceptance}%</span>
            </div>
            <div class="detail-item">
              <span class="label">ساعات الخطة</span>
              <span class="value">${hours}</span>
            </div>
            <div class="detail-item">
              <span class="label">الرسوم العادية</span>
              <span class="value">${regular} د.أ</span>
            </div>
            <div class="detail-item">
              <span class="label">الرسوم الموازي</span>
              <span class="value">${parallel} د.أ</span>
            </div>
          </div>
        </div>
      </div>
    `;
  });
  html += '</div>';

  if (totalPages > 1) {
    html += `
      <div class="pagination">
        <button class="page-btn prev-btn" onclick="changePage(-1)" ${currentPage === 1 ? 'disabled' : ''}>
          <i class="fa-solid fa-chevron-right"></i> السابق
        </button>
        <div class="page-numbers">
    `;
    
    const pagesToShow = getPageNumbers(currentPage, totalPages);
    pagesToShow.forEach((page) => {
      if (page === "...") {
        html += `<span class="page-dots">...</span>`;
      } else {
        html += `
          <button class="page-num ${page === currentPage ? 'active' : ''}" onclick="goToPage(${page})">
            ${page}
          </button>
        `;
      }
    });

    html += `
        </div>
        <button class="page-btn next-btn" onclick="changePage(1)" ${currentPage === totalPages ? 'disabled' : ''}>
          التالي <i class="fa-solid fa-chevron-left"></i>
        </button>
      </div>
    `;
  }

  cardsContainer.innerHTML = html;
}

// 5. دالة مساعدة لعرض أرقام الصفحات

function getPageNumbers(current, total) {
  const pages = [];
  const delta = 1;
  pages.push(1);
  let start = Math.max(2, current - delta);
  let end = Math.min(total - 1, current + delta);
  if (start > 2) pages.push("...");
  for (let i = start; i <= end; i++) {
    if (!pages.includes(i)) pages.push(i);
  }
  if (end < total - 1) pages.push("...");
  if (total > 1 && !pages.includes(total)) pages.push(total);
  return pages;
}

// 6. دالة تطبيع النصوص (للبحث)

function normalizeText(text) {
  if (!text) return "";
  return text
    .normalize("NFKD")
    .replace(/[\u064B-\u065F]/g, "")
    .replace(/[\u0617-\u061A\u0640]/g, "")
    .replace(/آ/g, "ا")
    .replace(/أ/g, "ا")
    .replace(/إ/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ");
}

// 7. متغير لتحديد آخر إجراء

let lastAction = "all"; // "search" أو "filter" أو "all"

// 8. دالة التصفية والبحث (آخر تحديث هو اللي يشتغل)

function filterData() {
  if (typeof universities === "undefined" || !universities.length) {
    console.error("❌ البيانات غير موجودة!");
    if (cardsContainer) {
      cardsContainer.innerHTML = `
        <div class="no-results">
          <i class="fa-solid fa-circle-exclamation"></i>
          <h3>حدث خطأ في تحميل البيانات</h3>
          <p>يرجى تحديث الصفحة والمحاولة مرة أخرى</p>
        </div>
      `;
    }
    return;
  }

  // جلب القيم
  const searchTerm = searchInput ? normalizeText(searchInput.value) : "";
  const universityValue = universityFilter ? universityFilter.value.trim() : "all";
  const collegeValue = collegeFilter ? collegeFilter.value.trim() : "all";
  const sortValue = sortFilter ? sortFilter.value : "high";

  console.log("🔍 البحث:", searchTerm);
  console.log("🏛️ الجامعة:", universityValue);
  console.log("📚 الكلية:", collegeValue);
  console.log("📌 آخر إجراء:", lastAction);

  // تصفية البيانات
  let filtered = universities.filter((item) => {
    // ---- شرط البحث (إذا كان البحث هو آخر إجراء) ----
    let matchSearch = true;
    if (lastAction === "search" && searchTerm !== "") {
      const majorNorm = normalizeText(item.major || "");
      const universityNorm = normalizeText(item.university || "");
      const collegeNorm = normalizeText(item.college || "");
      const fullText = `${majorNorm} ${universityNorm} ${collegeNorm}`;
      const searchWords = searchTerm.split(" ").filter(word => word.length > 0);
      matchSearch = searchWords.every(word => fullText.includes(word));
    }

    // ---- شرط الفلتر (إذا كان الفلتر هو آخر إجراء) ----
    let matchUniversity = true;
    if (lastAction === "filter" && universityValue !== "all") {
      matchUniversity = item.university && normalizeText(item.university).includes(normalizeText(universityValue));
    }

    let matchCollege = true;
    if (lastAction === "filter" && collegeValue !== "all") {
      matchCollege = item.college && normalizeText(item.college).includes(normalizeText(collegeValue));
    }

    // ---- إذا كان الكل (all) ----
    if (lastAction === "all") {
      // البحث
      if (searchTerm !== "") {
        const majorNorm = normalizeText(item.major || "");
        const universityNorm = normalizeText(item.university || "");
        const collegeNorm = normalizeText(item.college || "");
        const fullText = `${majorNorm} ${universityNorm} ${collegeNorm}`;
        const searchWords = searchTerm.split(" ").filter(word => word.length > 0);
        matchSearch = searchWords.every(word => fullText.includes(word));
      }

      // الفلتر
      matchUniversity = universityValue === "all" || 
        (item.university && normalizeText(item.university).includes(normalizeText(universityValue)));
      
      matchCollege = collegeValue === "all" || 
        (item.college && normalizeText(item.college).includes(normalizeText(collegeValue)));
    }

    return matchSearch && matchUniversity && matchCollege;
  });

  // ترتيب النتائج
  if (sortValue === "high") {
    filtered.sort((a, b) => (b.acceptance || 0) - (a.acceptance || 0));
  } else if (sortValue === "low") {
    filtered.sort((a, b) => (a.acceptance || 0) - (b.acceptance || 0));
  }

  console.log("📊 عدد النتائج:", filtered.length);
  renderCards(filtered);
}

// 9. دالة إعادة التعيين

function resetFilters() {
  lastAction = "all";
  if (searchInput) searchInput.value = "";
  if (universityFilter) universityFilter.value = "all";
  if (collegeFilter) collegeFilter.value = "all";
  if (sortFilter) sortFilter.value = "high";
  filterData();
}

// 10. التمرير إلى النتائج

function scrollToResults() {
  const resultsSection = document.querySelector(".universities");
  if (resultsSection) {
    const headerHeight = document.querySelector(".header")?.offsetHeight || 0;
    const targetPosition = resultsSection.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  }
}

// 11. تحديث lastAction عند كل حدث
// عند البحث
if (searchInput) {
  searchInput.addEventListener("input", function() {
    lastAction = "search";
    filterData();
  });
}

// عند زر البحث
if (searchButton) {
  searchButton.addEventListener("click", function() {
    lastAction = "search";
    filterData();
    setTimeout(scrollToResults, 400);
  });
}

// عند الفلاتر
if (universityFilter) {
  universityFilter.addEventListener("change", function() {
    lastAction = "filter";
    filterData();
  });
}

if (collegeFilter) {
  collegeFilter.addEventListener("change", function() {
    lastAction = "filter";
    filterData();
  });
}

if (sortFilter) {
  sortFilter.addEventListener("change", function() {
    // الترتيب لا يلغي البحث أو الفلتر، بس يرتب النتائج
    filterData();
  });
}

// عند إعادة التعيين
if (resetBtn) {
  resetBtn.addEventListener("click", resetFilters);
}

// 12. تشغيل التطبيق عند تحميل الصفحة

document.addEventListener("DOMContentLoaded", function() {
  console.log("🚀 الصفحة تحمّلت، عدد التخصصات:", typeof universities !== "undefined" ? universities.length : 0);
  
  if (typeof universities !== "undefined" && universities.length > 0) {
    filterData();
  } else {
    console.error("❌ البيانات غير موجودة!");
    if (cardsContainer) {
      cardsContainer.innerHTML = `
        <div class="no-results">
          <i class="fa-solid fa-circle-exclamation"></i>
          <h3>حدث خطأ في تحميل البيانات</h3>
          <p>يرجى تحديث الصفحة والمحاولة مرة أخرى</p>
        </div>
      `;
    }
  }
});
// أحداث المستخدم - البحث عند الضغط على Enter فقط

// عند الضغط على Enter في خانة البحث
if (searchInput) {
  searchInput.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      lastAction = "search";
      filterData();
      setTimeout(scrollToResults, 400);
    }
  });
}

// عند زر البحث
if (searchButton) {
  searchButton.addEventListener("click", function() {
    lastAction = "search";
    filterData();
    setTimeout(scrollToResults, 400);
  });
}

// عند الفلاتر
if (universityFilter) {
  universityFilter.addEventListener("change", function() {
    lastAction = "filter";
    filterData();
  });
}

if (collegeFilter) {
  collegeFilter.addEventListener("change", function() {
    lastAction = "filter";
    filterData();
  });
}

if (sortFilter) {
  sortFilter.addEventListener("change", function() {
    filterData();
  });
}

// عند إعادة التعيين
if (resetBtn) {
  resetBtn.addEventListener("click", resetFilters);
}
console.log("✅ ملف acceptance.js تم تحميله");