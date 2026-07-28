// جامعات الأردن - بيانات التخصصات (2025-2026)


const universities = [

  // ================================================================
  // 1. الجامعة الأردنية (30 تخصص)
  // ================================================================
  {
    university: "الجامعة الأردنية",
    college: "كلية الطب",
    major: "دكتور في الطب",
    acceptance: 90,
    hours: 256,
    regular: 45,
    parallel: 175,
    image: "imags/universities/ju.png"
  },
  {
    university: "الجامعة الأردنية",
    college: "كلية طب الأسنان",
    major: "دكتور في طب الأسنان",
    acceptance: 90,
    hours: 210,
    regular: 40,
    parallel: 175,
    image: "imags/universities/ju.png"
  },
  {
    university: "الجامعة الأردنية",
    college: "كلية الصيدلة",
    major: "الصيدلة",
    acceptance: 80,
    hours: 163,
    regular: 29,
    parallel: 90,
    image: "imags/universities/ju.png"
  },
  {
    university: "الجامعة الأردنية",
    college: "كلية الصيدلة",
    major: "دكتور في الصيدلة",
    acceptance: 80,
    hours: 216,
    regular: 50,
    parallel: 105,
    image: "imags/universities/ju.png"
  },
  {
    university: "الجامعة الأردنية",
    college: "كلية الهندسة",
    major: "الهندسة المدنية",
    acceptance: 80,
    hours: 163,
    regular: 29,
    parallel: 90,
    image: "imags/universities/ju.png"
  },
  {
    university: "الجامعة الأردنية",
    college: "كلية العمارة والتصميم",
    major: "هندسة العمارة",
    acceptance: 80,
    hours: 179,
    regular: 29,
    parallel: 95,
    image: "imags/universities/ju.png"
  },
  {
    university: "الجامعة الأردنية",
    college: "كلية الهندسة",
    major: "الهندسة الكهربائية",
    acceptance: 80,
    hours: 164,
    regular: 29,
    parallel: 90,
    image: "imags/universities/ju.png"
  },
  {
    university: "الجامعة الأردنية",
    college: "كلية الهندسة",
    major: "الهندسة الميكانيكية",
    acceptance: 80,
    hours: 165,
    regular: 29,
    parallel: 90,
    image: "imags/universities/ju.png"
  },
  {
    university: "الجامعة الأردنية",
    college: "كلية الهندسة",
    major: "هندسة الطيران",
    acceptance: 80,
    hours: 177,
    regular: 165,
    parallel: 200,
    image: "imags/universities/ju.png"
  },
  {
    university: "الجامعة الأردنية",
    college: "كلية الهندسة",
    major: "الهندسة الكيميائية",
    acceptance: 80,
    hours: 165,
    regular: 29,
    parallel: 85,
    image: "imags/universities/ju.png"
  },
  {
    university: "الجامعة الأردنية",
    college: "كلية الهندسة",
    major: "الهندسة الصناعية",
    acceptance: 80,
    hours: 165,
    regular: 29,
    parallel: 95,
    image: "imags/universities/ju.png"
  },
  {
    university: "الجامعة الأردنية",
    college: "كلية تكنولوجيا المعلومات",
    major: "هندسة الحاسوب",
    acceptance: 80,
    hours: 161,
    regular: 29,
    parallel: 90,
    image: "imags/universities/ju.png"
  },
  {
    university: "الجامعة الأردنية",
    college: "كلية الهندسة",
    major: "هندسة الميكاترونكس",
    acceptance: 80,
    hours: 165,
    regular: 29,
    parallel: 85,
    image: "imags/universities/ju.png"
  },
  {
    university: "الجامعة الأردنية",
    college: "كلية التمريض",
    major: "التمريض",
    acceptance: 70,
    hours: 138,
    regular: 15,
    parallel: 65,
    image: "imags/universities/ju.png"
  },
  {
    university: "الجامعة الأردنية",
    college: "كلية العلوم الطبية المساندة",
    major: "العلاج الطبيعي",
    acceptance: 70,
    hours: 142,
    regular: 34,
    parallel: 65,
    image: "imags/universities/ju.png"
  },
  {
    university: "الجامعة الأردنية",
    college: "كلية العلوم الطبية المساندة",
    major: "العلاج الوظيفي",
    acceptance: 70,
    hours: 144,
    regular: 34,
    parallel: 65,
    image: "imags/universities/ju.png"
  },
  {
    university: "الجامعة الأردنية",
    college: "كلية العلوم الطبية المساندة",
    major: "الأطراف الاصطناعية والأجهزة المساعدة",
    acceptance: 70,
    hours: 141,
    regular: 34,
    parallel: 65,
    image: "imags/universities/ju.png"
  },
  {
    university: "الجامعة الأردنية",
    college: "كلية العلوم الطبية المساندة",
    major: "علوم السمع والنطق",
    acceptance: 70,
    hours: 142,
    regular: 34,
    parallel: 65,
    image: "imags/universities/ju.png"
  },
  {
    university: "الجامعة الأردنية",
    college: "كلية تكنولوجيا المعلومات",
    major: "علم الحاسوب",
    acceptance: 65,
    hours: 132,
    regular: 47,
    parallel: 90,
    image: "imags/universities/ju.png"
  },
  {
    university: "الجامعة الأردنية",
    college: "كلية تكنولوجيا المعلومات",
    major: "أنظمة المعلومات الحاسوبية",
    acceptance: 65,
    hours: 132,
    regular: 47,
    parallel: 90,
    image: "imags/universities/ju.png"
  },
  {
    university: "الجامعة الأردنية",
    college: "كلية تكنولوجيا المعلومات",
    major: "تكنولوجيا معلومات الأعمال",
    acceptance: 65,
    hours: 132,
    regular: 60,
    parallel: 90,
    image: "imags/universities/ju.png"
  },
  {
    university: "الجامعة الأردنية",
    college: "كلية تكنولوجيا المعلومات",
    major: "علم البيانات",
    acceptance: 65,
    hours: 132,
    regular: 70,
    parallel: 100,
    image: "imags/universities/ju.png"
  },
  {
    university: "الجامعة الأردنية",
    college: "كلية تكنولوجيا المعلومات",
    major: "الذكاء الاصطناعي",
    acceptance: 65,
    hours: 132,
    regular: 70,
    parallel: 100,
    image: "imags/universities/ju.png"
  },
  {
    university: "الجامعة الأردنية",
    college: "كلية تكنولوجيا المعلومات",
    major: "الأمن السيبراني",
    acceptance: 65,
    hours: 132,
    regular: 60,
    parallel: 100,
    image: "imags/universities/ju.png"
  },
  {
    university: "الجامعة الأردنية",
    college: "كلية العلوم",
    major: "الرياضيات",
    acceptance: 65,
    hours: 135,
    regular: 26,
    parallel: 60,
    image: "imags/universities/ju.png"
  },
  {
    university: "الجامعة الأردنية",
    college: "كلية العلوم",
    major: "الفيزياء",
    acceptance: 65,
    hours: 132,
    regular: 26,
    parallel: 60,
    image: "imags/universities/ju.png"
  },
  {
    university: "الجامعة الأردنية",
    college: "كلية العلوم",
    major: "الكيمياء",
    acceptance: 65,
    hours: 133,
    regular: 26,
    parallel: 60,
    image: "imags/universities/ju.png"
  },
  {
    university: "الجامعة الأردنية",
    college: "كلية العلوم",
    major: "الكيمياء الصناعية",
    acceptance: 65,
    hours: 140,
    regular: 45,
    parallel: 85,
    image: "imags/universities/ju.png"
  },
  {
    university: "الجامعة الأردنية",
    college: "كلية العلوم",
    major: "العلوم الحياتية",
    acceptance: 65,
    hours: 136,
    regular: 26,
    parallel: 60,
    image: "imags/universities/ju.png"
  },
  {
    university: "الجامعة الأردنية",
    college: "كلية العلوم الطبية المساندة",
    major: "العلوم الطبية المخبرية",
    acceptance: 65,
    hours: 137,
    regular: 45,
    parallel: 85,
    image: "imags/universities/ju.png"
  },
  {
    university: "الجامعة الأردنية",
    college: "كلية الآثار والسياحة",
    major: "إدارة السياحة",
    acceptance: 77.0,
    hours: 132,
    regular: 15,
    parallel: 40,
    image: "imags/universities/ju.png"
  },
  {
    university: "الجامعة الأردنية",
    college: "كلية الآثار والسياحة",
    major: "إدارة الفنادق",
    acceptance: 76.5,
    hours: 132,
    regular: 15,
    parallel: 40,
    image: "imags/universities/ju.png"
  },
  {
    university: "الجامعة الأردنية",
    college: "كلية الآثار والسياحة",
    major: "إدارة الفعاليات",
    acceptance: 74.0,
    hours: 132,
    regular: 15,
    parallel: 40,
    image: "imags/universities/ju.png"
  },

  // ================================================================
  // 2. جامعة اليرموك
  // ================================================================
  {
    university: "جامعة اليرموك",
    college: "كلية الآداب",
    major: "الجغرافيا",
    acceptance: 77.85,
    hours: 132,
    regular: 30,
    parallel: 30,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية الآداب",
    major: "العلوم السياسية",
    acceptance: 82.55,
    hours: 132,
    regular: 16,
    parallel: 16,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية الحقوق",
    major: "القانون",
    acceptance: 91.20,
    hours: 132,
    regular: 35,
    parallel: 35,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية الشريعة",
    major: "أصول الدين",
    acceptance: 81.05,
    hours: 132,
    regular: 16,
    parallel: 16,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية الأعمال",
    major: "الاقتصاد والمصارف الإسلامية",
    acceptance: 77.20,
    hours: 132,
    regular: 35,
    parallel: 35,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية السياحة والآثار",
    major: "الآثار",
    acceptance: 76.15,
    hours: 132,
    regular: 16,
    parallel: 16,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية السياحة والآثار",
    major: "الأنثروبولوجيا",
    acceptance: 77.50,
    hours: 132,
    regular: 16,
    parallel: 16,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية السياحة والآثار",
    major: "صيانة المصادر التراثية وإدارتها",
    acceptance: 72.45,
    hours: 132,
    regular: 16,
    parallel: 16,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية السياحة والآثار",
    major: "الإرشاد السياحي",
    acceptance: 76.45,
    hours: 132,
    regular: 35,
    parallel: 35,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية السياحة والآثار",
    major: "الإدارة الفندقية",
    acceptance: 79.60,
    hours: 132,
    regular: 50,
    parallel: 50,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية الإعلام",
    major: "العلاقات العامة والإعلان",
    acceptance: 81.20,
    hours: 132,
    regular: 35,
    parallel: 35,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية الإعلام",
    major: "الإذاعة والتلفزيون",
    acceptance: 83.35,
    hours: 132,
    regular: 35,
    parallel: 35,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية التربية الرياضية",
    major: "علوم الرياضة",
    acceptance: 79.30,
    hours: 132,
    regular: 35,
    parallel: 35,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية الفنون والتصميم",
    major: "الفنون الرقمية",
    acceptance: 79.15,
    hours: 132,
    regular: 70,
    parallel: 70,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية الطب",
    major: "دكتور في الطب",
    acceptance: 97.2,
    hours: 257,
    regular: "-",
    parallel: "-",
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية طب الأسنان",
    major: "دكتور في طب الأسنان",
    acceptance: 97.0,
    hours: 214,
    regular: "-",
    parallel: "-",
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية الفنون والتصميم",
    major: "الواقع الرقمي وتطوير الألعاب",
    acceptance: 84.05,
    hours: 132,
    regular: 81.55,
    parallel: 0,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية الفنون والتصميم",
    major: "التربية الفنية",
    acceptance: 78.20,
    hours: 132,
    regular: 80.10,
    parallel: 0,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية الفنون والتصميم",
    major: "الفنون الرقمية",
    acceptance: 79.15,
    hours: 132,
    regular: 82.90,
    parallel: 0,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية العلوم",
    major: "الرياضيات",
    acceptance: 77.45,
    hours: 132,
    regular: 83.25,
    parallel: 0,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية العلوم",
    major: "الفيزياء",
    acceptance: 77.35,
    hours: 132,
    regular: 83.25,
    parallel: 0,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية العلوم",
    major: "الفيزياء الطبية والحيوية",
    acceptance: 81.85,
    hours: 132,
    regular: 84.40,
    parallel: 0,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية العلوم",
    major: "الكيمياء",
    acceptance: 80.20,
    hours: 132,
    regular: 82.65,
    parallel: 0,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية العلوم",
    major: "العلوم الحياتية",
    acceptance: 81.50,
    hours: 132,
    regular: 87.35,
    parallel: 0,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية العلوم",
    major: "الجيولوجيا التطبيقية",
    acceptance: 76.40,
    hours: 132,
    regular: 81.90,
    parallel: 0,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية العلوم",
    major: "الإحصاء",
    acceptance: 76.40,
    hours: 132,
    regular: 80.45,
    parallel: 0,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية الأعمال",
    major: "إدارة الأعمال",
    acceptance: 85.00,
    hours: 132,
    regular: 86.05,
    parallel: 0,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية الأعمال",
    major: "الإدارة العامة",
    acceptance: 82.35,
    hours: 132,
    regular: 0.00,
    parallel: 0,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية الأعمال",
    major: "المحاسبة",
    acceptance: 84.35,
    hours: 132,
    regular: 84.95,
    parallel: 0,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية الأعمال",
    major: "العلوم المالية والمصرفية",
    acceptance: 81.95,
    hours: 132,
    regular: 82.25,
    parallel: 0,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية الأعمال",
    major: "التسويق",
    acceptance: 86.50,
    hours: 132,
    regular: 87.55,
    parallel: 0,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية الأعمال",
    major: "اقتصاد المال والأعمال",
    acceptance: 83.15,
    hours: 132,
    regular: 84.10,
    parallel: 0,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية الأعمال",
    major: "التكنولوجيا المالية",
    acceptance: 82.10,
    hours: 132,
    regular: 82.45,
    parallel: 0,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية الأعمال",
    major: "إدارة سلاسل التوريد والعلوم اللوجستية",
    acceptance: 80.05,
    hours: 132,
    regular: 81.75,
    parallel: 0,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية الأعمال",
    major: "الاقتصاد والمصارف الإسلامية",
    acceptance: 77.20,
    hours: 132,
    regular: 80.10,
    parallel: 0,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية الآداب",
    major: "اللغة العربية وآدابها",
    acceptance: 84.05,
    hours: 132,
    regular: 84.25,
    parallel: 0,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية الآداب",
    major: "اللغة العربية التطبيقية",
    acceptance: 77.25,
    hours: 132,
    regular: 79.25,
    parallel: 0,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية الآداب",
    major: "اللغة الإنجليزية وآدابها",
    acceptance: 88.40,
    hours: 132,
    regular: 89.85,
    parallel: 0,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية الآداب",
    major: "اللغة الإنجليزية التطبيقية",
    acceptance: 93.25,
    hours: 132,
    regular: 97.40,
    parallel: 0,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية الآداب",
    major: "اللغة الفرنسية التطبيقية",
    acceptance: 78.95,
    hours: 132,
    regular: 81.40,
    parallel: 0,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية الآداب",
    major: "اللغة العربية",
    acceptance: 75.90,
    hours: 132,
    regular: 80.80,
    parallel: 0,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية الآداب",
    major: "التاريخ والحضارة",
    acceptance: 76.15,
    hours: 132,
    regular: 80.35,
    parallel: 0,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية الآداب",
    major: "الجغرافيا",
    acceptance: 77.85,
    hours: 132,
    regular: 81.30,
    parallel: 0,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية الآداب",
    major: "العلوم السياسية",
    acceptance: 82.55,
    hours: 132,
    regular: 86.80,
    parallel: 0,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية الآداب",
    major: "علم الاجتماع والعمل الاجتماعي",
    acceptance: 81.80,
    hours: 132,
    regular: 85.45,
    parallel: 0,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية الحقوق",
    major: "القانون",
    acceptance: 91.20,
    hours: 132,
    regular: 91.30,
    parallel: 0,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية العلوم التربوية",
    major: "علم النفس الإرشادي",
    acceptance: 87.85,
    hours: 132,
    regular: 90.10,
    parallel: 0,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية العلوم التربوية",
    major: "علم الصف / إناث",
    acceptance: 85.40,
    hours: 132,
    regular: 87.40,
    parallel: 0,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية العلوم التربوية",
    major: "الطفولة المبكرة / إناث",
    acceptance: 78.65,
    hours: 132,
    regular: 80.55,
    parallel: 0,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية الشريعة",
    major: "الفقه وأصوله",
    acceptance: 87.90,
    hours: 132,
    regular: 89.80,
    parallel: 0,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية الشريعة",
    major: "أصول الدين",
    acceptance: 81.05,
    hours: 132,
    regular: 88.20,
    parallel: 0,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية الشريعة",
    major: "الدراسات الإسلامية / التربية الإسلامية",
    acceptance: 80.10,
    hours: 132,
    regular: 86.85,
    parallel: 0,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية الشريعة",
    major: "الدراسات الإسلامية / الدراسات الأسرية",
    acceptance: 77.70,
    hours: 132,
    regular: 84.35,
    parallel: 0,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية الشريعة",
    major: "الدراسات الإسلامية / الدعوة والإعلام الإسلامي",
    acceptance: 76.75,
    hours: 132,
    regular: 87.45,
    parallel: 0,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية السياحة والآثار",
    major: "الآثار",
    acceptance: 76.15,
    hours: 132,
    regular: 83.65,
    parallel: 0,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية السياحة والآثار",
    major: "الأنثروبولوجيا",
    acceptance: 77.50,
    hours: 132,
    regular: 81.45,
    parallel: 0,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية السياحة والآثار",
    major: "صيانة المصادر التراثية وإدارتها",
    acceptance: 72.45,
    hours: 132,
    regular: 76.95,
    parallel: 0,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية السياحة والآثار",
    major: "الإدارة السياحية",
    acceptance: 77.80,
    hours: 132,
    regular: 81.55,
    parallel: 0,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية السياحة والآثار",
    major: "الإرشاد السياحي",
    acceptance: 76.45,
    hours: 132,
    regular: 78.80,
    parallel: 0,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية السياحة والآثار",
    major: "الإدارة الفندقية",
    acceptance: 79.60,
    hours: 132,
    regular: 79.70,
    parallel: 0,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية الإعلام",
    major: "العلاقات العامة والإعلان",
    acceptance: 81.20,
    hours: 132,
    regular: 84.15,
    parallel: 0,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية الإعلام",
    major: "الصحافة والإعلام الرقمي",
    acceptance: 83.50,
    hours: 132,
    regular: 85.70,
    parallel: 0,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية الإعلام",
    major: "الإذاعة والتلفزيون",
    acceptance: 83.35,
    hours: 132,
    regular: 86.85,
    parallel: 0,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية التربية الرياضية",
    major: "علوم الرياضة",
    acceptance: 79.30,
    hours: 132,
    regular: 81.25,
    parallel: 0,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية التربية الرياضية",
    major: "التربية البدنية التطبيقية",
    acceptance: 80.50,
    hours: 132,
    regular: 85.10,
    parallel: 0,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية اللغات",
    major: "الترجمة التحريرية والشفوية",
    acceptance: 83.85,
    hours: 132,
    regular: 84.55,
    parallel: 0,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية اللغات",
    major: "اللغات الحديثة / فرنسي - إنجليزي",
    acceptance: 86.85,
    hours: 132,
    regular: 0.00,
    parallel: 0,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية اللغات",
    major: "اللغات الحديثة / ألماني - إنجليزي",
    acceptance: 85.35,
    hours: 132,
    regular: 86.65,
    parallel: 0,
    image: "imags/universities/yarmouk.png"
  },
  {
    university: "جامعة اليرموك",
    college: "كلية اللغات",
    major: "اللغات الحديثة / تركي - إنجليزي",
    acceptance: 83.10,
    hours: 132,
    regular: 84.20,
    parallel: 0,
    image: "imags/universities/yarmouk.png"
  },

  // ================================================================
  // 3. جامعة مؤتة
  // ================================================================
  {
    university: "جامعة مؤتة",
    college: "كلية الهندسة",
    major: "الهندسة المدنية",
    acceptance: 80.80,
    hours: 132,
    regular: 40,
    parallel: 50,
    image: "imags/universities/mutah.png"
  },
  {
    university: "جامعة مؤتة",
    college: "كلية الهندسة",
    major: "الهندسة الميكانيكية",
    acceptance: 80.60,
    hours: 132,
    regular: 40,
    parallel: 50,
    image: "imags/universities/mutah.png"
  },
  {
    university: "جامعة مؤتة",
    college: "كلية الهندسة",
    major: "الهندسة الكيميائية",
    acceptance: 88.10,
    hours: 132,
    regular: 40,
    parallel: 50,
    image: "imags/universities/mutah.png"
  },
  {
    university: "جامعة مؤتة",
    college: "كلية الهندسة",
    major: "الهندسة الكهربائية - اتصالات",
    acceptance: 80.05,
    hours: 132,
    regular: 40,
    parallel: 50,
    image: "imags/universities/mutah.png"
  },
  {
    university: "جامعة مؤتة",
    college: "كلية الهندسة",
    major: "الهندسة الكهربائية - قوى وتحكم",
    acceptance: 80.75,
    hours: 132,
    regular: 40,
    parallel: 50,
    image: "imags/universities/mutah.png"
  },
  {
    university: "جامعة مؤتة",
    college: "كلية الهندسة",
    major: "الهندسة الكهربائية - إلكترونيات",
    acceptance: 80.50,
    hours: 132,
    regular: 40,
    parallel: 50,
    image: "imags/universities/mutah.png"
  },
  {
    university: "جامعة مؤتة",
    college: "كلية الهندسة",
    major: "الهندسة الميكانيكية - قوى حرارية وطاقة",
    acceptance: 80.00,
    hours: 132,
    regular: 40,
    parallel: 50,
    image: "imags/universities/mutah.png"
  },
  {
    university: "جامعة مؤتة",
    college: "كلية الهندسة",
    major: "الهندسة المدنية - مياه وبيئة",
    acceptance: 80.00,
    hours: 132,
    regular: 40,
    parallel: 50,
    image: "imags/universities/mutah.png"
  },
  {
    university: "جامعة مؤتة",
    college: "كلية الهندسة",
    major: "هندسة النظم الصناعية",
    acceptance: 83.85,
    hours: 132,
    regular: 40,
    parallel: 50,
    image: "imags/universities/mutah.png"
  },
  {
    university: "جامعة مؤتة",
    college: "كلية العلوم الطبية المساندة",
    major: "العلوم الطبية المخبرية",
    acceptance: 87.30,
    hours: 132,
    regular: 45,
    parallel: 60,
    image: "imags/universities/mutah.png"
  },
  {
    university: "جامعة مؤتة",
    college: "كلية العلوم",
    major: "الفيزياء",
    acceptance: 75.55,
    hours: 132,
    regular: 30,
    parallel: 40,
    image: "imags/universities/mutah.png"
  },
  {
    university: "جامعة مؤتة",
    college: "كلية العلوم",
    major: "الكيمياء",
    acceptance: 78.30,
    hours: 132,
    regular: 30,
    parallel: 40,
    image: "imags/universities/mutah.png"
  },
  {
    university: "جامعة مؤتة",
    college: "كلية تكنولوجيا المعلومات",
    major: "علم الحاسوب",
    acceptance: 83.05,
    hours: 132,
    regular: 50,
    parallel: 50,
    image: "imags/universities/mutah.png"
  },
  {
    university: "جامعة مؤتة",
    college: "كلية تكنولوجيا المعلومات",
    major: "نظم المعلومات الحاسوبية",
    acceptance: 80.55,
    hours: 132,
    regular: 50,
    parallel: 60,
    image: "imags/universities/mutah.png"
  },
  {
    university: "جامعة مؤتة",
    college: "كلية تكنولوجيا المعلومات",
    major: "هندسة البرمجيات",
    acceptance: 88.80,
    hours: 132,
    regular: 50,
    parallel: 60,
    image: "imags/universities/mutah.png"
  },
  {
    university: "جامعة مؤتة",
    college: "كلية تكنولوجيا المعلومات",
    major: "علم البيانات والذكاء الاصطناعي",
    acceptance: 83.00,
    hours: 132,
    regular: 50,
    parallel: 50,
    image: "imags/universities/mutah.png"
  },
  {
    university: "جامعة مؤتة",
    college: "كلية الزراعة",
    major: "الإنتاج النباتي",
    acceptance: 75.25,
    hours: 132,
    regular: 30,
    parallel: 40,
    image: "imags/universities/mutah.png"
  },
  {
    university: "جامعة مؤتة",
    college: "كلية الزراعة",
    major: "الإنتاج الحيواني",
    acceptance: 77.85,
    hours: 132,
    regular: 30,
    parallel: 40,
    image: "imags/universities/mutah.png"
  },
  {
    university: "جامعة مؤتة",
    college: "كلية الزراعة",
    major: "التغذية وتكنولوجيا الغذاء",
    acceptance: 86.85,
    hours: 132,
    regular: 40,
    parallel: 40,
    image: "imags/universities/mutah.png"
  },
  {
    university: "جامعة مؤتة",
    college: "كلية الزراعة",
    major: "تقنيات الوقاية والمكافحة المتكاملة",
    acceptance: 75.10,
    hours: 132,
    regular: 40,
    parallel: 40,
    image: "imags/universities/mutah.png"
  },
  {
    university: "جامعة مؤتة",
    college: "كلية الأعمال",
    major: "المحاسبة",
    acceptance: 80.25,
    hours: 132,
    regular: 30,
    parallel: 30,
    image: "imags/universities/mutah.png"
  },
  {
    university: "جامعة مؤتة",
    college: "كلية الأعمال",
    major: "التسويق الرقمي",
    acceptance: 78.70,
    hours: 132,
    regular: 40,
    parallel: 40,
    image: "imags/universities/mutah.png"
  },
  {
    university: "جامعة مؤتة",
    college: "كلية الأعمال",
    major: "المحاسبة الجنائية",
    acceptance: 84.05,
    hours: 132,
    regular: 40,
    parallel: 40,
    image: "imags/universities/mutah.png"
  },
  {
    university: "جامعة مؤتة",
    college: "كلية الأعمال",
    major: "اقتصاديات المال والأعمال",
    acceptance: 75.15,
    hours: 132,
    regular: 30,
    parallel: 30,
    image: "imags/universities/mutah.png"
  },
  {
    university: "جامعة مؤتة",
    college: "كلية الأعمال",
    major: "التكنولوجيا المالية وإدارة المخاطر",
    acceptance: 77.15,
    hours: 132,
    regular: 50,
    parallel: 50,
    image: "imags/universities/mutah.png"
  },
  {
    university: "جامعة مؤتة",
    college: "كلية الأعمال",
    major: "إدارة الأزمات",
    acceptance: 79.20,
    hours: 132,
    regular: 40,
    parallel: 40,
    image: "imags/universities/mutah.png"
  },
  {
    university: "جامعة مؤتة",
    college: "كلية الآداب",
    major: "اللغة العربية وآدابها",
    acceptance: 74.95,
    hours: 132,
    regular: 30,
    parallel: 30,
    image: "imags/universities/mutah.png"
  },
  {
    university: "جامعة مؤتة",
    college: "كلية الآداب",
    major: "اللغة الإنجليزية وآدابها",
    acceptance: 83.60,
    hours: 132,
    regular: 30,
    parallel: 30,
    image: "imags/universities/mutah.png"
  },
  {
    university: "جامعة مؤتة",
    college: "كلية اللغات",
    major: "اللغات الأوروبية",
    acceptance: 78.10,
    hours: 132,
    regular: 30,
    parallel: 30,
    image: "imags/universities/mutah.png"
  },
  {
    university: "جامعة مؤتة",
    college: "كلية اللغات",
    major: "الترجمة التحريرية والشفوية",
    acceptance: 72.00,
    hours: 132,
    regular: 40,
    parallel: 40,
    image: "imags/universities/mutah.png"
  },
  {
    university: "جامعة مؤتة",
    college: "كلية الحقوق",
    major: "الحقوق",
    acceptance: 84.85,
    hours: 132,
    regular: 30,
    parallel: 40,
    image: "imags/universities/mutah.png"
  },
  {
    university: "جامعة مؤتة",
    college: "كلية العلوم التربوية",
    major: "إناث / معلم الصف",
    acceptance: 71.20,
    hours: 132,
    regular: 30,
    parallel: 30,
    image: "imags/universities/mutah.png"
  },
  {
    university: "جامعة مؤتة",
    college: "كلية العلوم التربوية",
    major: "الإرشاد والصحة النفسية",
    acceptance: 77.10,
    hours: 132,
    regular: 30,
    parallel: 30,
    image: "imags/universities/mutah.png"
  },
  {
    university: "جامعة مؤتة",
    college: "كلية العلوم التربوية",
    major: "التربية الخاصة",
    acceptance: 75.00,
    hours: 132,
    regular: 30,
    parallel: 30,
    image: "imags/universities/mutah.png"
  },
  {
    university: "جامعة مؤتة",
    college: "كلية الشريعة",
    major: "الفقه وأصوله",
    acceptance: 75.10,
    hours: 132,
    regular: 30,
    parallel: 30,
    image: "imags/universities/mutah.png"
  },
  {
    university: "جامعة مؤتة",
    college: "كلية الشريعة",
    major: "أصول الدين",
    acceptance: 75.50,
    hours: 132,
    regular: 30,
    parallel: 30,
    image: "imags/universities/mutah.png"
  },
  {
    university: "جامعة مؤتة",
    college: "كلية التربية الرياضية",
    major: "التربية الرياضية",
    acceptance: 76.86,
    hours: 132,
    regular: 30,
    parallel: 30,
    image: "imags/universities/mutah.png"
  },
  {
    university: "جامعة مؤتة",
    college: "كلية التربية الرياضية",
    major: "علم الحركة والتدريب الرياضي",
    acceptance: 77.60,
    hours: 132,
    regular: 35,
    parallel: 35,
    image: "imags/universities/mutah.png"
  },
  {
    university: "جامعة مؤتة",
    college: "كلية الآداب",
    major: "علم الاجتماع",
    acceptance: 75.55,
    hours: 132,
    regular: 30,
    parallel: 30,
    image: "imags/universities/mutah.png"
  },
  {
    university: "جامعة مؤتة",
    college: "كلية السياحة والآثار",
    major: "الجغرافيا ونظم المعلومات الجغرافية",
    acceptance: 74.05,
    hours: 132,
    regular: 30,
    parallel: 30,
    image: "imags/universities/mutah.png"
  },
  {
    university: "جامعة مؤتة",
    college: "كلية الآداب",
    major: "العلوم السياسية",
    acceptance: 78.90,
    hours: 132,
    regular: 30,
    parallel: 30,
    image: "imags/universities/mutah.png"
  },
  {
    university: "جامعة مؤتة",
    college: "كلية السياحة والآثار",
    major: "الآثار والسياحة",
    acceptance: 74.60,
    hours: 132,
    regular: 30,
    parallel: 30,
    image: "imags/universities/mutah.png"
  },
  {
    university: "جامعة مؤتة",
    college: "كلية الآداب",
    major: "التاريخ والحضارة",
    acceptance: 70.25,
    hours: 132,
    regular: 30,
    parallel: 30,
    image: "imags/universities/mutah.png"
  },
  {
    university: "جامعة مؤتة",
    college: "كلية الطب",
    major: "دكتور في الطب",
    acceptance: 96.3,
    hours: 258,
    regular: 75,
    parallel: "-",
    image: "imags/universities/mutah.png"
  },

  // ================================================================
  // 4. جامعة العلوم والتكنولوجيا الأردنية
  // ================================================================
  {
    university: "جامعة العلوم والتكنولوجيا الأردنية",
    college: "كلية الطب",
    major: "دكتور في الطب",
    acceptance: 85,
    hours: 257,
    regular: 36,
    parallel: 150,
    image: "imags/universities/just.png"
  },
  {
    university: "جامعة العلوم والتكنولوجيا الأردنية",
    college: "كلية الطب",
    major: "دكتور في الطب",
    acceptance: 98.0,
    hours: 257,
    regular: 36,
    parallel: "-",
    image: "imags/universities/just.png"
  },
  {
    university: "جامعة العلوم والتكنولوجيا الأردنية",
    college: "كلية طب الأسنان",
    major: "طب وجراحة الأسنان",
    acceptance: 85,
    hours: 210,
    regular: 31,
    parallel: 150,
    image: "imags/universities/just.png"
  },
  {
    university: "جامعة العلوم والتكنولوجيا الأردنية",
    college: "كلية الصيدلة",
    major: "الصيدلة",
    acceptance: 80,
    hours: 165,
    regular: 21,
    parallel: 75,
    image: "imags/universities/just.png"
  },
  {
    university: "جامعة العلوم والتكنولوجيا الأردنية",
    college: "كلية الصيدلة",
    major: "دكتور صيدلة",
    acceptance: 80,
    hours: 216,
    regular: 47,
    parallel: 100,
    image: "imags/universities/just.png"
  },
  {
    university: "جامعة العلوم والتكنولوجيا الأردنية",
    college: "كلية العلوم الطبية التطبيقية",
    major: "الإدارة والسياسات الصحية",
    acceptance: 70,
    hours: 133,
    regular: 32,
    parallel: 50,
    image: "imags/universities/just.png"
  },
  {
    university: "جامعة العلوم والتكنولوجيا الأردنية",
    college: "كلية العلوم الطبية التطبيقية",
    major: "العلوم الطبية المخبرية",
    acceptance: 70,
    hours: 138,
    regular: 32,
    parallel: 50,
    image: "imags/universities/just.png"
  },
  {
    university: "جامعة العلوم والتكنولوجيا الأردنية",
    college: "كلية العلوم الطبية التطبيقية",
    major: "الإسعاف والطوارئ",
    acceptance: 70,
    hours: 137,
    regular: 32,
    parallel: 50,
    image: "imags/universities/just.png"
  },
  {
    university: "جامعة العلوم والتكنولوجيا الأردنية",
    college: "كلية العلوم الطبية التطبيقية",
    major: "تكنولوجيا الأشعة",
    acceptance: 70,
    hours: 137,
    regular: 32,
    parallel: 50,
    image: "imags/universities/just.png"
  },
  {
    university: "جامعة العلوم والتكنولوجيا الأردنية",
    college: "كلية العلوم الطبية التطبيقية",
    major: "تكنولوجيا صناعة الأسنان",
    acceptance: 70,
    hours: 132,
    regular: 24,
    parallel: 75,
    image: "imags/universities/just.png"
  },
  {
    university: "جامعة العلوم والتكنولوجيا الأردنية",
    college: "كلية العلوم الطبية التطبيقية",
    major: "علوم طب الأسنان المساندة",
    acceptance: 70,
    hours: 132,
    regular: 24,
    parallel: 50,
    image: "imags/universities/just.png"
  },
  {
    university: "جامعة العلوم والتكنولوجيا الأردنية",
    college: "كلية العلوم الطبية التطبيقية",
    major: "البصريات",
    acceptance: 70,
    hours: 135,
    regular: 32,
    parallel: 50,
    image: "imags/universities/just.png"
  },
  {
    university: "جامعة العلوم والتكنولوجيا الأردنية",
    college: "كلية العلوم الطبية التطبيقية",
    major: "العلاج الطبيعي",
    acceptance: 70,
    hours: 133,
    regular: 32,
    parallel: 50,
    image: "imags/universities/just.png"
  },
  {
    university: "جامعة العلوم والتكنولوجيا الأردنية",
    college: "كلية العلوم الطبية التطبيقية",
    major: "العلاج الوظيفي",
    acceptance: 70,
    hours: 138,
    regular: 32,
    parallel: 50,
    image: "imags/universities/just.png"
  },
  {
    university: "جامعة العلوم والتكنولوجيا الأردنية",
    college: "كلية العلوم الطبية التطبيقية",
    major: "السمع والنطق",
    acceptance: 70,
    hours: 143,
    regular: 32,
    parallel: 50,
    image: "imags/universities/just.png"
  },
  {
    university: "جامعة العلوم والتكنولوجيا الأردنية",
    college: "كلية العلوم الطبية التطبيقية",
    major: "العلاج التنفسي",
    acceptance: 70,
    hours: 137,
    regular: 50,
    parallel: 80,
    image: "imags/universities/just.png"
  },
  {
    university: "جامعة العلوم والتكنولوجيا الأردنية",
    college: "كلية العلوم الطبية التطبيقية",
    major: "تكنولوجيا التخدير",
    acceptance: 70,
    hours: 138,
    regular: 50,
    parallel: 80,
    image: "imags/universities/just.png"
  },
  {
    university: "جامعة العلوم والتكنولوجيا الأردنية",
    college: "كلية التمريض",
    major: "التمريض",
    acceptance: 70,
    hours: 134,
    regular: 30,
    parallel: 50,
    image: "imags/universities/just.png"
  },
  {
    university: "جامعة العلوم والتكنولوجيا الأردنية",
    college: "كلية التمريض",
    major: "القبالة",
    acceptance: 70,
    hours: 136,
    regular: 30,
    parallel: 50,
    image: "imags/universities/just.png"
  },
  {
    university: "جامعة العلوم والتكنولوجيا الأردنية",
    college: "كلية الهندسة",
    major: "الهندسة الكيميائية",
    acceptance: 80,
    hours: 159,
    regular: 21,
    parallel: 50,
    image: "imags/universities/just.png"
  },
  {
    university: "جامعة العلوم والتكنولوجيا الأردنية",
    college: "كلية الهندسة",
    major: "الهندسة المدنية",
    acceptance: 80,
    hours: 160,
    regular: 21,
    parallel: 75,
    image: "imags/universities/just.png"
  },
  {
    university: "جامعة العلوم والتكنولوجيا الأردنية",
    college: "كلية الهندسة",
    major: "الهندسة الكهربائية",
    acceptance: 80,
    hours: 160,
    regular: 21,
    parallel: 75,
    image: "imags/universities/just.png"
  },
  {
    university: "جامعة العلوم والتكنولوجيا الأردنية",
    college: "كلية الهندسة",
    major: "الهندسة الميكانيكية",
    acceptance: 80,
    hours: 160,
    regular: 21,
    parallel: 60,
    image: "imags/universities/just.png"
  },
  {
    university: "جامعة العلوم والتكنولوجيا الأردنية",
    college: "كلية الهندسة",
    major: "الهندسة الطبية الحيوية",
    acceptance: 80,
    hours: 160,
    regular: 21,
    parallel: 75,
    image: "imags/universities/just.png"
  },
  {
    university: "جامعة العلوم والتكنولوجيا الأردنية",
    college: "كلية الهندسة",
    major: "الهندسة الصناعية",
    acceptance: 80,
    hours: 160,
    regular: 33,
    parallel: 60,
    image: "imags/universities/just.png"
  },
  {
    university: "جامعة العلوم والتكنولوجيا الأردنية",
    college: "كلية الهندسة",
    major: "هندسة الطيران",
    acceptance: 80,
    hours: 160,
    regular: 50,
    parallel: 100,
    image: "imags/universities/just.png"
  },
  {
    university: "جامعة العلوم والتكنولوجيا الأردنية",
    college: "كلية الهندسة",
    major: "الهندسة النووية",
    acceptance: 80,
    hours: 160,
    regular: 33,
    parallel: 100,
    image: "imags/universities/just.png"
  },
  {
    university: "جامعة العلوم والتكنولوجيا الأردنية",
    college: "كلية الطب البيطري",
    major: "الطب والجراحة البيطرية",
    acceptance: 80,
    hours: 183,
    regular: 26,
    parallel: 50,
    image: "imags/universities/just.png"
  },
  {
    university: "جامعة العلوم والتكنولوجيا الأردنية",
    college: "كلية الزراعة",
    major: "الإنتاج الحيواني",
    acceptance: 65,
    hours: 132,
    regular: 16,
    parallel: 40,
    image: "imags/universities/just.png"
  },
  {
    university: "جامعة العلوم والتكنولوجيا الأردنية",
    college: "كلية الزراعة",
    major: "الإنتاج النباتي",
    acceptance: 65,
    hours: 132,
    regular: 16,
    parallel: 40,
    image: "imags/universities/just.png"
  },
  {
    university: "جامعة العلوم والتكنولوجيا الأردنية",
    college: "كلية الزراعة",
    major: "التغذية وتكنولوجيا الغذاء",
    acceptance: 65,
    hours: 132,
    regular: 16,
    parallel: 50,
    image: "imags/universities/just.png"
  },
  {
    university: "جامعة العلوم والتكنولوجيا الأردنية",
    college: "كلية الزراعة",
    major: "التربة والري",
    acceptance: 65,
    hours: 132,
    regular: 16,
    parallel: 40,
    image: "imags/universities/just.png"
  },
  {
    university: "جامعة العلوم والتكنولوجيا الأردنية",
    college: "كلية العلوم",
    major: "اللغة الإنجليزية واللغويات",
    acceptance: 65,
    hours: 133,
    regular: 14,
    parallel: 50,
    image: "imags/universities/just.png"
  },
  {
    university: "جامعة العلوم والتكنولوجيا الأردنية",
    college: "كلية العلوم",
    major: "الرياضيات",
    acceptance: 65,
    hours: 132,
    regular: 16,
    parallel: 40,
    image: "imags/universities/just.png"
  },
  {
    university: "جامعة العلوم والتكنولوجيا الأردنية",
    college: "كلية العلوم",
    major: "الكيمياء",
    acceptance: 65,
    hours: 132,
    regular: 16,
    parallel: 40,
    image: "imags/universities/just.png"
  },
  {
    university: "جامعة العلوم والتكنولوجيا الأردنية",
    college: "كلية العلوم",
    major: "الفيزياء",
    acceptance: 65,
    hours: 132,
    regular: 16,
    parallel: 40,
    image: "imags/universities/just.png"
  },
  {
    university: "جامعة العلوم والتكنولوجيا الأردنية",
    college: "كلية العلوم",
    major: "التقانات الحيوية والهندسة الوراثية",
    acceptance: 65,
    hours: 132,
    regular: 32,
    parallel: 50,
    image: "imags/universities/just.png"
  },
  {
    university: "جامعة العلوم والتكنولوجيا الأردنية",
    college: "كلية تكنولوجيا المعلومات",
    major: "هندسة الحاسوب",
    acceptance: 80,
    hours: 160,
    regular: 41,
    parallel: 75,
    image: "imags/universities/just.png"
  },
  {
    university: "جامعة العلوم والتكنولوجيا الأردنية",
    college: "كلية تكنولوجيا المعلومات",
    major: "علوم الحاسوب",
    acceptance: 65,
    hours: 132,
    regular: 33,
    parallel: 75,
    image: "imags/universities/just.png"
  },
  {
    university: "جامعة العلوم والتكنولوجيا الأردنية",
    college: "كلية تكنولوجيا المعلومات",
    major: "نظم المعلومات الحاسوبية",
    acceptance: 65,
    hours: 132,
    regular: 33,
    parallel: 75,
    image: "imags/universities/just.png"
  },
  {
    university: "جامعة العلوم والتكنولوجيا الأردنية",
    college: "كلية تكنولوجيا المعلومات",
    major: "هندسة وأمن شبكات الحاسوب",
    acceptance: 80,
    hours: 160,
    regular: 41,
    parallel: 75,
    image: "imags/universities/just.png"
  },
  {
    university: "جامعة العلوم والتكنولوجيا الأردنية",
    college: "كلية تكنولوجيا المعلومات",
    major: "هندسة البرمجيات",
    acceptance: 65,
    hours: 132,
    regular: 33,
    parallel: 75,
    image: "imags/universities/just.png"
  },
  {
    university: "جامعة العلوم والتكنولوجيا الأردنية",
    college: "كلية تكنولوجيا المعلومات",
    major: "الأمن السيبراني",
    acceptance: 65,
    hours: 132,
    regular: 60,
    parallel: 80,
    image: "imags/universities/just.png"
  },
  {
    university: "جامعة العلوم والتكنولوجيا الأردنية",
    college: "كلية تكنولوجيا المعلومات",
    major: "علم البيانات",
    acceptance: 65,
    hours: 132,
    regular: 80,
    parallel: 100,
    image: "imags/universities/just.png"
  },
  {
    university: "جامعة العلوم والتكنولوجيا الأردنية",
    college: "كلية تكنولوجيا المعلومات",
    major: "الذكاء الاصطناعي",
    acceptance: 65,
    hours: 132,
    regular: 80,
    parallel: 100,
    image: "imags/universities/just.png"
  },
  {
    university: "جامعة العلوم والتكنولوجيا الأردنية",
    college: "كلية العمارة والتصميم",
    major: "العمارة",
    acceptance: 80,
    hours: 169,
    regular: 33,
    parallel: 75,
    image: "imags/universities/just.png"
  },
  {
    university: "جامعة العلوم والتكنولوجيا الأردنية",
    college: "كلية العمارة والتصميم",
    major: "التصميم والتواصل البصري",
    acceptance: 65,
    hours: 138,
    regular: 33,
    parallel: 75,
    image: "imags/universities/just.png"
  },

  // ================================================================
  // 5. الجامعة الهاشمية
  // ================================================================
  {
    university: "الجامعة الهاشمية",
    college: "كلية الطب",
    major: "دكتور في الطب",
    acceptance: 97.40,
    hours: 266,
    regular: 175,
    parallel: 250,
    image: "imags/universities/hu.png"
  },
  {
    university: "الجامعة الهاشمية",
    college: "كلية الطب",
    major: "دكتور في الطب",
    acceptance: 96.8,
    hours: 257,
    regular: 85,
    parallel: "-",
    image: "imags/universities/hu.png"
  },
  {
    university: "الجامعة الهاشمية",
    college: "كلية طب الأسنان",
    major: "دكتور في طب وجراحة الفم والأسنان",
    acceptance: 96.65,
    hours: 230,
    regular: 225,
    parallel: 275,
    image: "imags/universities/hu.png"
  },
  {
    university: "الجامعة الهاشمية",
    college: "كلية طب الأسنان",
    major: "دكتور في طب الأسنان",
    acceptance: 96.5,
    hours: 214,
    regular: 85,
    parallel: "-",
    image: "imags/universities/hu.png"
  },
  {
    university: "الجامعة الهاشمية",
    college: "كلية الصيدلة",
    major: "الصيدلة",
    acceptance: 94.90,
    hours: 163,
    regular: 140,
    parallel: 150,
    image: "imags/universities/hu.png"
  },
  {
    university: "الجامعة الهاشمية",
    college: "كلية الهندسة",
    major: "الهندسة الكهربائية",
    acceptance: 90.75,
    hours: 160,
    regular: 75,
    parallel: 90,
    image: "imags/universities/hu.png"
  },
  {
    university: "الجامعة الهاشمية",
    college: "كلية الهندسة",
    major: "هندسة الحاسوب",
    acceptance: 95.70,
    hours: 160,
    regular: 75,
    parallel: 90,
    image: "imags/universities/hu.png"
  },
  {
    university: "الجامعة الهاشمية",
    college: "كلية الهندسة",
    major: "الهندسة الصناعية",
    acceptance: 93.25,
    hours: 160,
    regular: 75,
    parallel: 90,
    image: "imags/universities/hu.png"
  },
  {
    university: "الجامعة الهاشمية",
    college: "كلية الهندسة",
    major: "الهندسة المدنية",
    acceptance: 84.45,
    hours: 160,
    regular: 75,
    parallel: 90,
    image: "imags/universities/hu.png"
  },
  {
    university: "الجامعة الهاشمية",
    college: "كلية الهندسة",
    major: "الهندسة المعمارية",
    acceptance: 91.00,
    hours: 160,
    regular: 90,
    parallel: 100,
    image: "imags/universities/hu.png"
  },
  {
    university: "الجامعة الهاشمية",
    college: "كلية الهندسة",
    major: "الهندسة الطبية",
    acceptance: 93.65,
    hours: 160,
    regular: 75,
    parallel: 90,
    image: "imags/universities/hu.png"
  },
  {
    university: "الجامعة الهاشمية",
    college: "كلية الهندسة",
    major: "هندسة الميكاترونيك",
    acceptance: 93.10,
    hours: 160,
    regular: 75,
    parallel: 90,
    image: "imags/universities/hu.png"
  },
  {
    university: "الجامعة الهاشمية",
    college: "كلية الهندسة",
    major: "الهندسة الميكانيكية",
    acceptance: 89.50,
    hours: 160,
    regular: 75,
    parallel: 90,
    image: "imags/universities/hu.png"
  },
  {
    university: "الجامعة الهاشمية",
    college: "كلية التمريض",
    major: "التمريض",
    acceptance: 90.90,
    hours: 138,
    regular: 60,
    parallel: 70,
    image: "imags/universities/hu.png"
  },
  {
    university: "الجامعة الهاشمية",
    college: "كلية العلوم الطبية المساندة",
    major: "تكنولوجيا الأشعة",
    acceptance: 86.90,
    hours: 137,
    regular: 55,
    parallel: 70,
    image: "imags/universities/hu.png"
  },
  {
    university: "الجامعة الهاشمية",
    college: "كلية العلوم الطبية المساندة",
    major: "العلاج الطبيعي",
    acceptance: 93.60,
    hours: 142,
    regular: 55,
    parallel: 70,
    image: "imags/universities/hu.png"
  },
  {
    university: "الجامعة الهاشمية",
    college: "كلية العلوم الطبية المساندة",
    major: "علوم المختبرات الطبية",
    acceptance: 89.05,
    hours: 138,
    regular: 55,
    parallel: 70,
    image: "imags/universities/hu.png"
  },
  {
    university: "الجامعة الهاشمية",
    college: "كلية العلوم الطبية المساندة",
    major: "العلاج الوظيفي",
    acceptance: 89.35,
    hours: 144,
    regular: 55,
    parallel: 70,
    image: "imags/universities/hu.png"
  },
  {
    university: "الجامعة الهاشمية",
    college: "كلية العلوم الطبية المساندة",
    major: "التغذية والحمية",
    acceptance: 89.35,
    hours: 133,
    regular: 55,
    parallel: 70,
    image: "imags/universities/hu.png"
  },
  {
    university: "الجامعة الهاشمية",
    college: "كلية تكنولوجيا المعلومات",
    major: "علم البيانات",
    acceptance: 93.05,
    hours: 132,
    regular: 75,
    parallel: 85,
    image: "imags/universities/hu.png"
  },
  {
    university: "الجامعة الهاشمية",
    college: "كلية تكنولوجيا المعلومات",
    major: "علوم الحاسوب",
    acceptance: 94.05,
    hours: 132,
    regular: 70,
    parallel: 80,
    image: "imags/universities/hu.png"
  },
  {
    university: "الجامعة الهاشمية",
    college: "كلية تكنولوجيا المعلومات",
    major: "ذكاء اصطناعي",
    acceptance: 93.05,
    hours: 132,
    regular: 80,
    parallel: 85,
    image: "imags/universities/hu.png"
  },
  {
    university: "الجامعة الهاشمية",
    college: "كلية تكنولوجيا المعلومات",
    major: "هندسة البرمجيات",
    acceptance: 93.50,
    hours: 132,
    regular: 75,
    parallel: 85,
    image: "imags/universities/hu.png"
  },
  {
    university: "الجامعة الهاشمية",
    college: "كلية تكنولوجيا المعلومات",
    major: "الأمن السيبراني",
    acceptance: 92.25,
    hours: 132,
    regular: 80,
    parallel: 85,
    image: "imags/universities/hu.png"
  },
  {
    university: "الجامعة الهاشمية",
    college: "كلية تكنولوجيا المعلومات",
    major: "نظم المعلومات الحاسوبية",
    acceptance: 91.65,
    hours: 132,
    regular: 70,
    parallel: 80,
    image: "imags/universities/hu.png"
  },
  {
    university: "الجامعة الهاشمية",
    college: "كلية تكنولوجيا المعلومات",
    major: "تكنولوجيا معلومات الأعمال",
    acceptance: 83.70,
    hours: 132,
    regular: 70,
    parallel: 80,
    image: "imags/universities/hu.png"
  },
  {
    university: "الجامعة الهاشمية",
    college: "كلية العلوم",
    major: "الرياضيات",
    acceptance: 86.60,
    hours: 135,
    regular: 40,
    parallel: 50,
    image: "imags/universities/hu.png"
  },
  {
    university: "الجامعة الهاشمية",
    college: "كلية العلوم",
    major: "إدارة الأراضي والمياه",
    acceptance: 75.80,
    hours: 132,
    regular: 40,
    parallel: 50,
    image: "imags/universities/hu.png"
  },
  {
    university: "الجامعة الهاشمية",
    college: "كلية العلوم",
    major: "إدارة المياه والبيئة",
    acceptance: 75.90,
    hours: 132,
    regular: 40,
    parallel: 50,
    image: "imags/universities/hu.png"
  },
  {
    university: "الجامعة الهاشمية",
    college: "كلية العلوم",
    major: "العلوم الحياتية",
    acceptance: 85.30,
    hours: 136,
    regular: 40,
    parallel: 50,
    image: "imags/universities/hu.png"
  },
  {
    university: "الجامعة الهاشمية",
    college: "كلية العلوم",
    major: "التكنولوجيا الحيوية والهندسة الوراثية",
    acceptance: 86.45,
    hours: 132,
    regular: 40,
    parallel: 50,
    image: "imags/universities/hu.png"
  },
  {
    university: "الجامعة الهاشمية",
    college: "كلية العلوم",
    major: "الكيمياء",
    acceptance: 84.50,
    hours: 133,
    regular: 40,
    parallel: 50,
    image: "imags/universities/hu.png"
  },
  {
    university: "الجامعة الهاشمية",
    college: "كلية العلوم",
    major: "الجيولوجيا",
    acceptance: 77.35,
    hours: 132,
    regular: 40,
    parallel: 50,
    image: "imags/universities/hu.png"
  },
  {
    university: "الجامعة الهاشمية",
    college: "كلية العلوم",
    major: "الفيزياء",
    acceptance: 81.70,
    hours: 132,
    regular: 40,
    parallel: 50,
    image: "imags/universities/hu.png"
  },
  {
    university: "الجامعة الهاشمية",
    college: "كلية الاقتصاد والعلوم الإدارية",
    major: "المحاسبة",
    acceptance: 91.40,
    hours: 132,
    regular: 60,
    parallel: 70,
    image: "imags/universities/hu.png"
  },
  {
    university: "الجامعة الهاشمية",
    college: "كلية الاقتصاد والعلوم الإدارية",
    major: "إدارة الأعمال",
    acceptance: 90.20,
    hours: 132,
    regular: 60,
    parallel: 70,
    image: "imags/universities/hu.png"
  },
  {
    university: "الجامعة الهاشمية",
    college: "كلية الاقتصاد والعلوم الإدارية",
    major: "المحاسبة والقانون التجاري",
    acceptance: 89.70,
    hours: 132,
    regular: 60,
    parallel: 70,
    image: "imags/universities/hu.png"
  },
  {
    university: "الجامعة الهاشمية",
    college: "كلية الاقتصاد والعلوم الإدارية",
    major: "الأعمال والاقتصاد المالي",
    acceptance: 77.65,
    hours: 132,
    regular: 40,
    parallel: 60,
    image: "imags/universities/hu.png"
  },
  {
    university: "الجامعة الهاشمية",
    college: "كلية الاقتصاد والعلوم الإدارية",
    major: "العلوم المالية والمصرفية",
    acceptance: 89.35,
    hours: 132,
    regular: 60,
    parallel: 70,
    image: "imags/universities/hu.png"
  },
  {
    university: "الجامعة الهاشمية",
    college: "كلية الاقتصاد والعلوم الإدارية",
    major: "علم الاقتصاد",
    acceptance: 88.50,
    hours: 132,
    regular: 60,
    parallel: 70,
    image: "imags/universities/hu.png"
  },
  {
    university: "الجامعة الهاشمية",
    college: "كلية الاقتصاد والعلوم الإدارية",
    major: "إدارة الفنادق والسياحة",
    acceptance: 86.70,
    hours: 132,
    regular: 60,
    parallel: 70,
    image: "imags/universities/hu.png"
  },
  {
    university: "الجامعة الهاشمية",
    college: "كلية الاقتصاد والعلوم الإدارية",
    major: "التسويق الالكتروني والتواصل الاجتماعي",
    acceptance: 93.65,
    hours: 132,
    regular: 60,
    parallel: 70,
    image: "imags/universities/hu.png"
  },
  {
    university: "الجامعة الهاشمية",
    college: "كلية الاقتصاد والعلوم الإدارية",
    major: "التأمين وإدارة المخاطر",
    acceptance: 82.50,
    hours: 132,
    regular: 60,
    parallel: 70,
    image: "imags/universities/hu.png"
  },
  {
    university: "الجامعة الهاشمية",
    college: "كلية الاقتصاد والعلوم الإدارية",
    major: "نظم المعلومات الإدارية",
    acceptance: 92.87,
    hours: 132,
    regular: 60,
    parallel: 70,
    image: "imags/universities/hu.png"
  },
  {
    university: "الجامعة الهاشمية",
    college: "كلية الآداب",
    major: "اللغة العربية وآدابها",
    acceptance: 89.25,
    hours: 132,
    regular: 40,
    parallel: 50,
    image: "imags/universities/hu.png"
  },
  {
    university: "الجامعة الهاشمية",
    college: "كلية الآداب",
    major: "اللغة الإنجليزية وآدابها",
    acceptance: 91.85,
    hours: 132,
    regular: 60,
    parallel: 70,
    image: "imags/universities/hu.png"
  },
  {
    university: "الجامعة الهاشمية",
    college: "كلية الآداب",
    major: "اللغة والثقافة والاتصالات",
    acceptance: 86.90,
    hours: 132,
    regular: 40,
    parallel: 50,
    image: "imags/universities/hu.png"
  },
  {
    university: "الجامعة الهاشمية",
    college: "كلية العلوم التربوية",
    major: "التربية الخاصة",
    acceptance: 84.75,
    hours: 132,
    regular: 40,
    parallel: 50,
    image: "imags/universities/hu.png"
  },
  {
    university: "الجامعة الهاشمية",
    college: "كلية العلوم التربوية",
    major: "التربية الفنية",
    acceptance: 83.65,
    hours: 132,
    regular: 40,
    parallel: 50,
    image: "imags/universities/hu.png"
  },
  {
    university: "الجامعة الهاشمية",
    college: "كلية العلوم التربوية",
    major: "الإرشاد",
    acceptance: 86.25,
    hours: 132,
    regular: 40,
    parallel: 50,
    image: "imags/universities/hu.png"
  },
  {
    university: "الجامعة الهاشمية",
    college: "كلية العلوم التربوية",
    major: "تربية الطفل",
    acceptance: 85.30,
    hours: 132,
    regular: 40,
    parallel: 50,
    image: "imags/universities/hu.png"
  },
  {
    university: "الجامعة الهاشمية",
    college: "كلية العلوم التربوية",
    major: "معلم صف",
    acceptance: 81.85,
    hours: 132,
    regular: 40,
    parallel: 50,
    image: "imags/universities/hu.png"
  },
  {
    university: "الجامعة الهاشمية",
    college: "كلية التربية الرياضية والبدنية",
    major: "التأهيل الرياضي",
    acceptance: 80.50,
    hours: 132,
    regular: 40,
    parallel: 50,
    image: "imags/universities/hu.png"
  },
  {
    university: "الجامعة الهاشمية",
    college: "كلية التربية الرياضية والبدنية",
    major: "الإدارة والتدريب الرياضي",
    acceptance: 86.05,
    hours: 132,
    regular: 40,
    parallel: 50,
    image: "imags/universities/hu.png"
  },
  {
    university: "الجامعة الهاشمية",
    college: "كلية السياحة والتراث",
    major: "إدارة السياحة والسفر",
    acceptance: 84.40,
    hours: 132,
    regular: 40,
    parallel: 50,
    image: "imags/universities/hu.png"
  },
  {
    university: "الجامعة الهاشمية",
    college: "كلية السياحة والتراث",
    major: "إدارة وصيانة الآثار",
    acceptance: 72.30,
    hours: 132,
    regular: 40,
    parallel: 50,
    image: "imags/universities/hu.png"
  },

  // ================================================================
  // 6. جامعة آل البيت
  // ================================================================
  {
    university: "جامعة آل البيت",
    college: "كلية العمارة والتصميم",
    major: "هندسة العمارة",
    acceptance: 88.90,
    hours: 132,
    regular: 40,
    parallel: 60,
    image: "imags/universities/aal.png"
  },
  {
    university: "جامعة آل البيت",
    college: "كلية الهندسة",
    major: "الهندسة المدنية",
    acceptance: 80.35,
    hours: 132,
    regular: 40,
    parallel: 60,
    image: "imags/universities/aal.png"
  },
  {
    university: "جامعة آل البيت",
    college: "كلية الهندسة",
    major: "الهندسة الصناعية",
    acceptance: 88.15,
    hours: 132,
    regular: 50,
    parallel: 75,
    image: "imags/universities/aal.png"
  },
  {
    university: "جامعة آل البيت",
    college: "كلية العلوم الطبية المساندة",
    major: "التغذية السريرية والحميات",
    acceptance: 82.55,
    hours: 132,
    regular: 50,
    parallel: 75,
    image: "imags/universities/aal.png"
  },
  {
    university: "جامعة آل البيت",
    college: "كلية العلوم الطبية المساندة",
    major: "علوم السمع والنطق",
    acceptance: 82.95,
    hours: 132,
    regular: 50,
    parallel: 75,
    image: "imags/universities/aal.png"
  },
  {
    university: "جامعة آل البيت",
    college: "كلية العلوم الطبية المساندة",
    major: "العلاج الوظيفي",
    acceptance: 84.05,
    hours: 132,
    regular: 50,
    parallel: 75,
    image: "imags/universities/aal.png"
  },
  {
    university: "جامعة آل البيت",
    college: "كلية العلوم الطبية المساندة",
    major: "العلاج الطبيعي",
    acceptance: 85.10,
    hours: 132,
    regular: 50,
    parallel: 75,
    image: "imags/universities/aal.png"
  },
  {
    university: "جامعة آل البيت",
    college: "كلية تكنولوجيا المعلومات",
    major: "علم البيانات والذكاء الاصطناعي",
    acceptance: 83.45,
    hours: 132,
    regular: 50,
    parallel: 75,
    image: "imags/universities/aal.png"
  },
  {
    university: "جامعة آل البيت",
    college: "كلية تكنولوجيا المعلومات",
    major: "تطوير تطبيقات الأجهزة الذكية",
    acceptance: 80.85,
    hours: 132,
    regular: 50,
    parallel: 75,
    image: "imags/universities/aal.png"
  },
  {
    university: "جامعة آل البيت",
    college: "كلية تكنولوجيا المعلومات",
    major: "نظم المعلومات الصحية",
    acceptance: 80.35,
    hours: 132,
    regular: 50,
    parallel: 75,
    image: "imags/universities/aal.png"
  },
  {
    university: "جامعة آل البيت",
    college: "كلية العلوم",
    major: "الكيمياء",
    acceptance: 78.45,
    hours: 132,
    regular: 30,
    parallel: 45,
    image: "imags/universities/aal.png"
  },
  {
    university: "جامعة آل البيت",
    college: "كلية الأعمال",
    major: "إدارة الأعمال",
    acceptance: 83.00,
    hours: 132,
    regular: 35,
    parallel: 45,
    image: "imags/universities/aal.png"
  },
  {
    university: "جامعة آل البيت",
    college: "كلية الأعمال",
    major: "التمويل والمصارف",
    acceptance: 79.50,
    hours: 132,
    regular: 35,
    parallel: 45,
    image: "imags/universities/aal.png"
  },
  {
    university: "جامعة آل البيت",
    college: "كلية الأعمال",
    major: "المحاسبة",
    acceptance: 82.50,
    hours: 132,
    regular: 35,
    parallel: 45,
    image: "imags/universities/aal.png"
  },
  {
    university: "جامعة آل البيت",
    college: "كلية الأعمال",
    major: "الإدارة اللوجستية",
    acceptance: 77.85,
    hours: 132,
    regular: 50,
    parallel: 75,
    image: "imags/universities/aal.png"
  },
  {
    university: "جامعة آل البيت",
    college: "كلية الأعمال",
    major: "التدقيق والمحاسبة الدولية",
    acceptance: 79.30,
    hours: 132,
    regular: 40,
    parallel: 60,
    image: "imags/universities/aal.png"
  },
  {
    university: "جامعة آل البيت",
    college: "كلية الأعمال",
    major: "محاسبة وقانون الأعمال",
    acceptance: 80.20,
    hours: 132,
    regular: 35,
    parallel: 55,
    image: "imags/universities/aal.png"
  },
  {
    university: "جامعة آل البيت",
    college: "كلية الأعمال",
    major: "تكنولوجيا مالية",
    acceptance: 80.90,
    hours: 132,
    regular: 35,
    parallel: 55,
    image: "imags/universities/aal.png"
  },
  {
    university: "جامعة آل البيت",
    college: "كلية الآداب",
    major: "العلوم السياسية",
    acceptance: 78.70,
    hours: 132,
    regular: 30,
    parallel: 45,
    image: "imags/universities/aal.png"
  },
  {
    university: "جامعة آل البيت",
    college: "كلية الآداب",
    major: "اللغة الإنجليزية وآدابها",
    acceptance: 84.90,
    hours: 132,
    regular: 35,
    parallel: 45,
    image: "imags/universities/aal.png"
  },
  {
    university: "جامعة آل البيت",
    college: "كلية اللغات",
    major: "إنجليزي-فرنسي / اللغة والأدب",
    acceptance: 79.50,
    hours: 132,
    regular: 35,
    parallel: 45,
    image: "imags/universities/aal.png"
  },
  {
    university: "جامعة آل البيت",
    college: "كلية الآداب",
    major: "التاريخ",
    acceptance: 76.75,
    hours: 132,
    regular: 30,
    parallel: 45,
    image: "imags/universities/aal.png"
  },
  {
    university: "جامعة آل البيت",
    college: "كلية السياحة والآثار",
    major: "جغرافيا تطبيقية",
    acceptance: 75.00,
    hours: 132,
    regular: 40,
    parallel: 50,
    image: "imags/universities/aal.png"
  },
  {
    university: "جامعة آل البيت",
    college: "كلية اللغات",
    major: "انجليزي - إيطالي",
    acceptance: 78.95,
    hours: 132,
    regular: 35,
    parallel: 45,
    image: "imags/universities/aal.png"
  },
  {
    university: "جامعة آل البيت",
    college: "كلية اللغات",
    major: "انجليزي - اسباني",
    acceptance: 80.30,
    hours: 132,
    regular: 35,
    parallel: 45,
    image: "imags/universities/aal.png"
  },
  {
    university: "جامعة آل البيت",
    college: "كلية الحقوق",
    major: "الحقوق",
    acceptance: 87.00,
    hours: 132,
    regular: 35,
    parallel: 50,
    image: "imags/universities/aal.png"
  },
  {
    university: "جامعة آل البيت",
    college: "كلية العلوم التربوية",
    major: "التربية الخاصة",
    acceptance: 79.80,
    hours: 132,
    regular: 35,
    parallel: 45,
    image: "imags/universities/aal.png"
  },
  {
    university: "جامعة آل البيت",
    college: "كلية الشريعة",
    major: "دراسات في الأديان",
    acceptance: 75.10,
    hours: 132,
    regular: 40,
    parallel: 60,
    image: "imags/universities/aal.png"
  },
  {
    university: "جامعة آل البيت",
    college: "كلية بيت الحكمة للعلوم السياسية والدراسات الدولية",
    major: "العلوم السياسية",
    acceptance: 65,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/aal.png"
  },
  {
    university: "جامعة آل البيت",
    college: "كلية علوم الأرض والبيئة",
    major: "علوم الأرض والبيئة التطبيقية",
    acceptance: 65,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/aal.png"
  },
  {
    university: "جامعة آل البيت",
    college: "كلية علوم الأرض والبيئة",
    major: "نظم المعلومات الجغرافية والاستشعار عن بعد",
    acceptance: 65,
    hours: 132,
    regular: 55,
    parallel: "-",
    image: "imags/universities/aal.png"
  },
  {
    university: "جامعة آل البيت",
    college: "كلية الهندسة",
    major: "هندسة المساحة",
    acceptance: 80,
    hours: 132,
    regular: 60,
    parallel: "-",
    image: "imags/universities/aal.png"
  },
  {
    university: "جامعة آل البيت",
    college: "كلية الهندسة",
    major: "هندسة الطاقة المتجددة",
    acceptance: 80,
    hours: 132,
    regular: 70,
    parallel: "-",
    image: "imags/universities/aal.png"
  },
  {
    university: "جامعة آل البيت",
    college: "كلية الأمير الحسين بن عبدالله لتكنولوجيا المعلومات",
    major: "الأمن السيبراني",
    acceptance: 65,
    hours: 132,
    regular: 75,
    parallel: "-",
    image: "imags/universities/aal.png"
  },
  {
    university: "جامعة آل البيت",
    college: "كلية الأمير الحسين بن عبدالله لتكنولوجيا المعلومات",
    major: "علم البيانات والذكاء الاصطناعي",
    acceptance: 65,
    hours: 132,
    regular: 75,
    parallel: "-",
    image: "imags/universities/aal.png"
  },
  {
    university: "جامعة آل البيت",
    college: "كلية الأمير الحسين بن عبدالله لتكنولوجيا المعلومات",
    major: "نظم المعلومات الحاسوبية",
    acceptance: 65,
    hours: 132,
    regular: 55,
    parallel: "-",
    image: "imags/universities/aal.png"
  },
  {
    university: "جامعة آل البيت",
    college: "كلية العلوم الطبية التطبيقية",
    major: "تقنيات الأشعة الطبية",
    acceptance: 70,
    hours: 132,
    regular: 75,
    parallel: "-",
    image: "imags/universities/aal.png"
  },
  {
    university: "جامعة آل البيت",
    college: "كلية العلوم الطبية التطبيقية",
    major: "العلاج التنفسي",
    acceptance: 70,
    hours: 132,
    regular: 75,
    parallel: "-",
    image: "imags/universities/aal.png"
  },
  {
    university: "جامعة آل البيت",
    college: "كلية الأميرة سلمى بنت عبدالله للتمريض",
    major: "التمريض",
    acceptance: 70,
    hours: 132,
    regular: 65,
    parallel: "-",
    image: "imags/universities/aal.png"
  },
  {
    university: "جامعة آل البيت",
    college: "كلية الأعمال",
    major: "الاقتصاد الرقمي",
    acceptance: 65,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/aal.png"
  },
  {
    university: "جامعة آل البيت",
    college: "كلية الأعمال",
    major: "نظم المحاسبية وتحليل الأعمال",
    acceptance: 65,
    hours: 132,
    regular: 50,
    parallel: "-",
    image: "imags/universities/aal.png"
  },
  {
    university: "جامعة آل البيت",
    college: "كلية الأعمال",
    major: "التسويق الرقمي",
    acceptance: 65,
    hours: 132,
    regular: 65,
    parallel: "-",
    image: "imags/universities/aal.png"
  },

  // ================================================================
  // 7. جامعة البلقاء التطبيقية
  // ================================================================
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الهندسة",
    major: "هندسة العمارة",
    acceptance: 88.55,
    hours: 132,
    regular: 45,
    parallel: 60,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الهندسة",
    major: "الهندسة المدنية / الإنشاءات",
    acceptance: 82.05,
    hours: 132,
    regular: 45,
    parallel: 80,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الهندسة",
    major: "هندسة المواد",
    acceptance: 80.00,
    hours: 132,
    regular: 40,
    parallel: 60,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الهندسة",
    major: "الهندسة المدنية / مساحة وجيوماتكس",
    acceptance: 80.50,
    hours: 132,
    regular: 40,
    parallel: 60,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الهندسة",
    major: "الهندسة الكهربائية / القوى الكهربائية",
    acceptance: 85.15,
    hours: 132,
    regular: 45,
    parallel: 60,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الهندسة",
    major: "الهندسة الصناعية",
    acceptance: 92.35,
    hours: 132,
    regular: 55,
    parallel: 70,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية العلوم الطبية المساندة",
    major: "القبالة والعناية بحديثي الولادة",
    acceptance: 83.10,
    hours: 132,
    regular: 50,
    parallel: 75,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية العلوم الطبية المساندة",
    major: "العلوم الطبية المخبرية",
    acceptance: 87.70,
    hours: 132,
    regular: 35,
    parallel: 55,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية العلوم الطبية المساندة",
    major: "تكنولوجيا الأشعة الطبية",
    acceptance: 87.00,
    hours: 132,
    regular: 50,
    parallel: 70,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية العلوم الجنائية",
    major: "التحقيقات الجنائية والرقمية",
    acceptance: 81.05,
    hours: 132,
    regular: 60,
    parallel: 80,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية العلوم",
    major: "الرياضيات",
    acceptance: 77.10,
    hours: 132,
    regular: 45,
    parallel: 50,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية العلوم",
    major: "الفيزياء",
    acceptance: 77.20,
    hours: 132,
    regular: 45,
    parallel: 50,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الزراعة",
    major: "إدارة موارد المياه والبيئة",
    acceptance: 78.65,
    hours: 132,
    regular: 30,
    parallel: 45,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الزراعة",
    major: "التقنيات الحيوية الزراعية",
    acceptance: 81.40,
    hours: 132,
    regular: 30,
    parallel: 45,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الزراعة",
    major: "إنتاج ووقاية النبات",
    acceptance: 78.75,
    hours: 132,
    regular: 30,
    parallel: 45,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الأعمال",
    major: "الاقتصاد",
    acceptance: 84.60,
    hours: 132,
    regular: 35,
    parallel: 55,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الأعمال",
    major: "تخطيط وإدارة المشاريع",
    acceptance: 85.05,
    hours: 132,
    regular: 35,
    parallel: 55,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الأعمال",
    major: "الإدارة الضريبية والجمركية",
    acceptance: 85.80,
    hours: 132,
    regular: 45,
    parallel: 60,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الحقوق",
    major: "القانون",
    acceptance: 91.60,
    hours: 132,
    regular: 45,
    parallel: 60,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الآداب",
    major: "اللغة الإنجليزية وآدابها",
    acceptance: 89.05,
    hours: 132,
    regular: 25,
    parallel: 45,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية اللغات",
    major: "الترجمة التطبيقية",
    acceptance: 87.30,
    hours: 132,
    regular: 45,
    parallel: 60,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية التربية الرياضية",
    major: "التربية البدنية والصحية",
    acceptance: 83.40,
    hours: 132,
    regular: 45,
    parallel: 60,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الآداب",
    major: "إدارة المكتبات والمعلومات",
    acceptance: 83.55,
    hours: 132,
    regular: 35,
    parallel: 55,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية العلوم التربوية",
    major: "الطفولة المبكرة",
    acceptance: 80.65,
    hours: 132,
    regular: 20,
    parallel: 35,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية العلوم التربوية",
    major: "التربية الخاصة",
    acceptance: 81.15,
    hours: 132,
    regular: 16,
    parallel: 35,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الأعمال",
    major: "إدارة الأعمال",
    acceptance: 82.95,
    hours: 132,
    regular: 35,
    parallel: 55,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الأعمال",
    major: "نظم المعلومات الإدارية",
    acceptance: 81.85,
    hours: 132,
    regular: 35,
    parallel: 55,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الأعمال",
    major: "المحاسبة",
    acceptance: 85.55,
    hours: 132,
    regular: 35,
    parallel: 60,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الأعمال",
    major: "ذكاء الأعمال",
    acceptance: 83.80,
    hours: 132,
    regular: 45,
    parallel: 60,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الأعمال",
    major: "العلوم المالية والمصرفية",
    acceptance: 82.65,
    hours: 132,
    regular: 35,
    parallel: 60,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الآداب",
    major: "اللغة الإنجليزية وآدابها",
    acceptance: 89.00,
    hours: 132,
    regular: 25,
    parallel: 45,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الآداب",
    major: "اللغة العربية وآدابها",
    acceptance: 79.50,
    hours: 132,
    regular: 20,
    parallel: 35,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية العلوم التربوية",
    major: "التربية الخاصة",
    acceptance: 80.95,
    hours: 132,
    regular: 25,
    parallel: 45,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية العلوم التربوية",
    major: "التربية الخاصة / الموهبة والإبداع",
    acceptance: 78.05,
    hours: 132,
    regular: 40,
    parallel: 50,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية العلوم التربوية",
    major: "الطفولة المبكرة",
    acceptance: 79.25,
    hours: 132,
    regular: 20,
    parallel: 35,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية العلوم التربوية",
    major: "الإرشاد النفسي والتربوي",
    acceptance: 79.90,
    hours: 132,
    regular: 30,
    parallel: 45,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الآداب",
    major: "إدارة المكتبات والمعلومات",
    acceptance: 79.70,
    hours: 132,
    regular: 30,
    parallel: 45,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الهندسة",
    major: "هندسة الميكاترونكس",
    acceptance: 91.25,
    hours: 132,
    regular: 30,
    parallel: 60,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الهندسة",
    major: "الهندسة المدنية / الطرق والجسور",
    acceptance: 80.00,
    hours: 132,
    regular: 30,
    parallel: 60,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الهندسة",
    major: "الهندسة الميكانيكية / القوى الحرارية والهيدروليكية",
    acceptance: 81.20,
    hours: 132,
    regular: 30,
    parallel: 60,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الهندسة",
    major: "الهندسة الميكانيكية",
    acceptance: 84.50,
    hours: 132,
    regular: 30,
    parallel: 60,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الهندسة",
    major: "صيانة الطائرات / تقني",
    acceptance: 84.25,
    hours: 132,
    regular: 65,
    parallel: 80,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الهندسة",
    major: "الهندسة الكهربائية / اتصالات",
    acceptance: 86.45,
    hours: 132,
    regular: 30,
    parallel: 60,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الهندسة",
    major: "الهندسة الكيميائية / الصناعات الكيميائية",
    acceptance: 88.60,
    hours: 132,
    regular: 30,
    parallel: 60,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية العلوم الطبية المساندة",
    major: "العلوم الطبية المخبرية",
    acceptance: 84.80,
    hours: 132,
    regular: 35,
    parallel: 55,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية العلوم",
    major: "الأحياء الدقيقة التطبيقية",
    acceptance: 80.05,
    hours: 132,
    regular: 35,
    parallel: 55,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية العلوم",
    major: "العلوم الحياتية",
    acceptance: 77.95,
    hours: 132,
    regular: 35,
    parallel: 55,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الهندسة",
    major: "الهندسة الكيميائية / الصناعات الكيميائية",
    acceptance: 80.80,
    hours: 132,
    regular: 35,
    parallel: 60,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الهندسة",
    major: "الهندسة الميكانيكية / نظم التبريد وتكييف الهواء",
    acceptance: 80.10,
    hours: 132,
    regular: 35,
    parallel: 60,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الهندسة",
    major: "الهندسة الميكانيكية / إنتاج وآلات",
    acceptance: 80.35,
    hours: 132,
    regular: 35,
    parallel: 60,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الهندسة",
    major: "الهندسة الكهربائية / الاتصالات والبرمجيات",
    acceptance: 81.40,
    hours: 132,
    regular: 35,
    parallel: 60,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الهندسة",
    major: "الهندسة الكهربائية / القوى الكهربائية",
    acceptance: 80.05,
    hours: 132,
    regular: 35,
    parallel: 60,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الهندسة",
    major: "الهندسة المدنية / المياه والبيئة",
    acceptance: 80.20,
    hours: 132,
    regular: 35,
    parallel: 60,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الأعمال",
    major: "نظم المعلومات الإدارية",
    acceptance: 77.10,
    hours: 132,
    regular: 35,
    parallel: 55,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الأعمال",
    major: "إدارة الأعمال",
    acceptance: 76.10,
    hours: 132,
    regular: 35,
    parallel: 55,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الآداب",
    major: "اللغة الإنجليزية وآدابها",
    acceptance: 75.35,
    hours: 132,
    regular: 25,
    parallel: 35,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية السياحة والآثار",
    major: "الإدارة السياحية",
    acceptance: 73.85,
    hours: 132,
    regular: 25,
    parallel: 40,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الزراعة",
    major: "إنتاج ووقاية النبات",
    acceptance: 71.90,
    hours: 132,
    regular: 30,
    parallel: 45,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية العلوم التربوية",
    major: "التربية المهنية",
    acceptance: 71.45,
    hours: 132,
    regular: 20,
    parallel: 35,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية السياحة والآثار",
    major: "إدارة الفنادق",
    acceptance: 71.90,
    hours: 132,
    regular: 35,
    parallel: 55,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الأعمال",
    major: "المحاسبة",
    acceptance: 74.43,
    hours: 132,
    regular: 35,
    parallel: 55,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الهندسة",
    major: "تكنولوجيا النقل البحري",
    acceptance: 77.80,
    hours: 132,
    regular: 70,
    parallel: 100,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الأعمال",
    major: "إدارة الكوارث والأزمات",
    acceptance: 81.20,
    hours: 132,
    regular: 30,
    parallel: 45,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الطب",
    major: "دكتور في الطب",
    acceptance: 95.8,
    hours: 256,
    regular: 100,
    parallel: "-",
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية السلط - المركز",
    major: "الإدارة الضريبية",
    acceptance: 65,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية السلط - المركز",
    major: "التربية البدنية",
    acceptance: 65,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية السلط - المركز",
    major: "الترجمة",
    acceptance: 65,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية السلط - المركز",
    major: "ذكاء الأعمال",
    acceptance: 83.80,
    hours: 132,
    regular: 45,
    parallel: 60,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية السلط - المركز",
    major: "الهندسة الصناعية",
    acceptance: 92.35,
    hours: 132,
    regular: 55,
    parallel: 70,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية السلط التقنية",
    major: "تكنولوجيا العمارة الداخلية",
    acceptance: 65,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية السلط التقنية",
    major: "تقنيات الإنتاج التلفزيوني والإخراج",
    acceptance: 65,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية السلط التقنية",
    major: "فنون التصميم الداخلي والديكور",
    acceptance: 65,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية السلط التقنية",
    major: "التصميم الجرافيكي",
    acceptance: 65,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية السلط التقنية",
    major: "علم البيانات",
    acceptance: 65,
    hours: 132,
    regular: 70,
    parallel: 100,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية السلط التقنية",
    major: "أمن المعلومات والشبكات",
    acceptance: 65,
    hours: 132,
    regular: 60,
    parallel: "-",
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية السلط التقنية",
    major: "الرياضات الإلكترونية (Esports)",
    acceptance: 65,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية السلط التقنية",
    major: "إدارة الفعاليات والمؤتمرات",
    acceptance: 65,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية السلط التقنية",
    major: "تصميم وتصنيع الذهب والمجوهرات",
    acceptance: 65,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية العلوم الطبية المساندة - السلط",
    major: "تكنولوجيا الأشعة",
    acceptance: 87.00,
    hours: 132,
    regular: 50,
    parallel: 70,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية العلوم الطبية المساندة - السلط",
    major: "المختبرات الطبية",
    acceptance: 87.70,
    hours: 132,
    regular: 35,
    parallel: 55,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية العلوم الطبية المساندة - السلط",
    major: "الصيدلة",
    acceptance: 80,
    hours: 132,
    regular: 29,
    parallel: 90,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية التمريض - السلط",
    major: "القبالة",
    acceptance: 83.10,
    hours: 132,
    regular: 50,
    parallel: 75,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الهندسة التكنولوجية",
    major: "صيانة الطائرات",
    acceptance: 84.25,
    hours: 132,
    regular: 65,
    parallel: 80,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الهندسة التكنولوجية",
    major: "تكنولوجيا إنشاء وصيانة المباني",
    acceptance: 65,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الهندسة التكنولوجية",
    major: "مساحة الطرق وحساب الكميات",
    acceptance: 65,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الهندسة التكنولوجية",
    major: "التقييم العقاري",
    acceptance: 65,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الهندسة التكنولوجية",
    major: "هندسة العمارة والتصميم الداخلي",
    acceptance: 65,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الهندسة التكنولوجية",
    major: "صيانة المركبات الكهربائية والهجينة",
    acceptance: 65,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الهندسة التكنولوجية",
    major: "التكييف والتبريد",
    acceptance: 65,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الهندسة التكنولوجية",
    major: "المعدات والتركيبات الكهربائية",
    acceptance: 65,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الهندسة التكنولوجية",
    major: "تكنولوجيا الطاقة",
    acceptance: 65,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الهندسة التكنولوجية",
    major: "الاتصالات وشبكات الحاسوب",
    acceptance: 65,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الهندسة التكنولوجية",
    major: "تكنولوجيا الصناعات الكيميائية",
    acceptance: 65,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الهندسة التكنولوجية",
    major: "تكنولوجيا الطاقة المتجددة",
    acceptance: 65,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الأميرة رحمة الجامعية",
    major: "الإرشاد وتمكين الأسرة",
    acceptance: 65,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الأميرة عالية الجامعية",
    major: "التربية المهنية",
    acceptance: 71.45,
    hours: 132,
    regular: 20,
    parallel: 35,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الأميرة عالية الجامعية",
    major: "تصميم المحتوى التعليمي الرقمي",
    acceptance: 65,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية عمان الجامعية للعلوم المالية والإدارية",
    major: "التسويق الرقمي",
    acceptance: 78.70,
    hours: 132,
    regular: 40,
    parallel: 40,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الزرقاء الجامعية",
    major: "فنون الطهي",
    acceptance: 65,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية إربد الجامعية",
    major: "السجل الطبي",
    acceptance: 65,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية إربد الجامعية",
    major: "القياس والتشخيص لاضطرابات التوحد",
    acceptance: 65,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية إربد الجامعية",
    major: "التربية البدنية والصحية",
    acceptance: 83.40,
    hours: 132,
    regular: 45,
    parallel: 60,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الحصن الجامعية",
    major: "تكنولوجيا الطاقة المتجددة",
    acceptance: 65,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الحصن الجامعية",
    major: "التكييف والتبريد",
    acceptance: 65,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الحصن الجامعية",
    major: "أمن المعلومات والشبكات",
    acceptance: 65,
    hours: 132,
    regular: 60,
    parallel: "-",
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الحصن الجامعية",
    major: "إدارة الأعمال",
    acceptance: 76.10,
    hours: 132,
    regular: 35,
    parallel: 55,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية الحصن الجامعية",
    major: "المحاسبة",
    acceptance: 74.43,
    hours: 132,
    regular: 35,
    parallel: 55,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية معان الجامعية",
    major: "التكييف والتبريد",
    acceptance: 65,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية السلط للعلوم الإنسانية",
    major: "إدارة الأعمال",
    acceptance: 82.95,
    hours: 132,
    regular: 35,
    parallel: 55,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية السلط للعلوم الإنسانية",
    major: "المحاسبة",
    acceptance: 85.55,
    hours: 132,
    regular: 35,
    parallel: 60,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية السلط للعلوم الإنسانية",
    major: "الترجمة",
    acceptance: 87.30,
    hours: 132,
    regular: 45,
    parallel: 60,
    image: "imags/universities/bau.png"
  },
  {
    university: "جامعة البلقاء التطبيقية",
    college: "كلية السلط للعلوم الإنسانية",
    major: "اللغة الإنجليزية وآدابها",
    acceptance: 89.05,
    hours: 132,
    regular: 25,
    parallel: 45,
    image: "imags/universities/bau.png"
  },

  // ================================================================
  // 8. جامعة الحسين بن طلال
  // ================================================================
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية الهندسة",
    major: "هندسة الحاسوب",
    acceptance: 81.80,
    hours: 132,
    regular: 43,
    parallel: 75,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية الهندسة",
    major: "هندسة أمن الشبكات والمعلومات",
    acceptance: 80.00,
    hours: 132,
    regular: 43,
    parallel: 75,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية الهندسة",
    major: "تكنولوجيا إنشاء المباني والطرق / تقني",
    acceptance: 74.45,
    hours: 132,
    regular: 40,
    parallel: 70,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية الهندسة",
    major: "تكنولوجيا العمليات المستدامة / تقني",
    acceptance: 71.50,
    hours: 132,
    regular: 40,
    parallel: 70,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية الهندسة",
    major: "تكنولوجيا المركبات الكهربائية والهجينة / تقني",
    acceptance: 78.10,
    hours: 132,
    regular: 40,
    parallel: 70,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية الهندسة",
    major: "الهندسة الكيميائية",
    acceptance: 80.00,
    hours: 132,
    regular: 43,
    parallel: 75,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية الهندسة",
    major: "الهندسة المدنية",
    acceptance: 80.00,
    hours: 132,
    regular: 43,
    parallel: 75,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية الهندسة",
    major: "الهندسة الميكانيكية",
    acceptance: 80.20,
    hours: 132,
    regular: 43,
    parallel: 75,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية الهندسة",
    major: "الهندسة الكهربائية",
    acceptance: 80.05,
    hours: 132,
    regular: 43,
    parallel: 75,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية العلوم الطبية المساندة",
    major: "التحاليل الطبية",
    acceptance: 82.40,
    hours: 132,
    regular: 43,
    parallel: 75,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية تكنولوجيا المعلومات",
    major: "علم الحاسوب",
    acceptance: 80.40,
    hours: 132,
    regular: 43,
    parallel: 75,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية تكنولوجيا المعلومات",
    major: "الأمن السيبراني والحوسبة السحابية",
    acceptance: 78.10,
    hours: 132,
    regular: 43,
    parallel: 75,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية تكنولوجيا المعلومات",
    major: "نظم المعلومات الحاسوبية",
    acceptance: 79.45,
    hours: 132,
    regular: 43,
    parallel: 75,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية الهندسة",
    major: "هندسة البرمجيات",
    acceptance: 81.55,
    hours: 132,
    regular: 43,
    parallel: 75,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية العلوم",
    major: "الرياضيات",
    acceptance: 71.75,
    hours: 132,
    regular: 25,
    parallel: 40,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية العلوم",
    major: "الفيزياء",
    acceptance: 69.50,
    hours: 132,
    regular: 25,
    parallel: 40,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية العلوم",
    major: "الكيمياء",
    acceptance: 75.05,
    hours: 132,
    regular: 25,
    parallel: 40,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية الأعمال",
    major: "الاقتصاد",
    acceptance: 72.60,
    hours: 132,
    regular: 30,
    parallel: 40,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية الأعمال",
    major: "المحاسبة",
    acceptance: 76.05,
    hours: 132,
    regular: 30,
    parallel: 40,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية الأعمال",
    major: "إدارة الأعمال",
    acceptance: 78.95,
    hours: 132,
    regular: 30,
    parallel: 40,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية الأعمال",
    major: "العلوم المالية والمصرفية",
    acceptance: 73.60,
    hours: 132,
    regular: 30,
    parallel: 40,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية الأعمال",
    major: "الإدارة اللوجستية",
    acceptance: 74.25,
    hours: 132,
    regular: 35,
    parallel: 40,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية الأعمال",
    major: "نظم المعلومات الإدارية",
    acceptance: 77.70,
    hours: 132,
    regular: 30,
    parallel: 40,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية الحقوق",
    major: "القانون",
    acceptance: 81.50,
    hours: 132,
    regular: 30,
    parallel: 40,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية الآداب",
    major: "اللغة العربية وآدابها",
    acceptance: 70.95,
    hours: 132,
    regular: 28,
    parallel: 40,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية الآداب",
    major: "اللغة الإنجليزية وآدابها",
    acceptance: 75.50,
    hours: 132,
    regular: 28,
    parallel: 40,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية الآداب",
    major: "العلاقات الدولية والدراسات الاستراتيجية",
    acceptance: 77.80,
    hours: 132,
    regular: 28,
    parallel: 40,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية الآداب",
    major: "التاريخ",
    acceptance: 74.50,
    hours: 132,
    regular: 28,
    parallel: 40,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية الآداب",
    major: "الجغرافيا",
    acceptance: 72.90,
    hours: 132,
    regular: 28,
    parallel: 40,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية الآداب",
    major: "علم المكتبات وتكنولوجيا المعلومات (متكامل)",
    acceptance: 76.05,
    hours: 132,
    regular: 28,
    parallel: 40,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية العلوم التربوية",
    major: "إناث / معلم الصف",
    acceptance: 76.00,
    hours: 132,
    regular: 22,
    parallel: 35,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية العلوم التربوية",
    major: "التربية الخاصة",
    acceptance: 74.10,
    hours: 132,
    regular: 22,
    parallel: 35,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية العلوم التربوية",
    major: "إناث / رياض الأطفال",
    acceptance: 72.80,
    hours: 132,
    regular: 22,
    parallel: 35,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية السياحة والآثار",
    major: "الآثار",
    acceptance: 69.85,
    hours: 132,
    regular: 25,
    parallel: 40,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية السياحة والآثار",
    major: "الإدارة السياحية / الإرشاد السياحي",
    acceptance: 70.25,
    hours: 132,
    regular: 25,
    parallel: 40,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية السياحة والآثار",
    major: "الإدارة السياحية",
    acceptance: 69.95,
    hours: 132,
    regular: 25,
    parallel: 40,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية السياحة والآثار",
    major: "الإدارة الفندقية",
    acceptance: 71.15,
    hours: 132,
    regular: 25,
    parallel: 40,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية الآداب والعلوم الإنسانية والاجتماعية",
    major: "اللغة الإنجليزية وآدابها",
    acceptance: 75.50,
    hours: 132,
    regular: 28,
    parallel: 40,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية الآداب والعلوم الإنسانية والاجتماعية",
    major: "اللغة العربية وآدابها",
    acceptance: 70.95,
    hours: 132,
    regular: 28,
    parallel: 40,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية الآداب والعلوم الإنسانية والاجتماعية",
    major: "التاريخ",
    acceptance: 74.50,
    hours: 132,
    regular: 28,
    parallel: 40,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية الآداب والعلوم الإنسانية والاجتماعية",
    major: "الجغرافيا",
    acceptance: 72.90,
    hours: 132,
    regular: 28,
    parallel: 40,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية الآداب والعلوم الإنسانية والاجتماعية",
    major: "علم المكتبات وتكنولوجيا المعلومات",
    acceptance: 76.05,
    hours: 132,
    regular: 28,
    parallel: 40,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية الآداب والعلوم الإنسانية والاجتماعية",
    major: "العلاقات الدولية والدراسات الاستراتيجية",
    acceptance: 77.80,
    hours: 132,
    regular: 28,
    parallel: 40,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية الآداب والعلوم الإنسانية والاجتماعية",
    major: "علم الاجتماع",
    acceptance: 65,
    hours: 132,
    regular: 25,
    parallel: 35,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية الآداب والعلوم الإنسانية والاجتماعية",
    major: "علم النفس",
    acceptance: 65,
    hours: 132,
    regular: 25,
    parallel: 35,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية الآداب والعلوم الإنسانية والاجتماعية",
    major: "الحقوق",
    acceptance: 81.50,
    hours: 132,
    regular: 30,
    parallel: 40,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية العلوم",
    major: "العلوم الحياتية",
    acceptance: 65,
    hours: 132,
    regular: 25,
    parallel: 35,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية العلوم",
    major: "الكيمياء",
    acceptance: 75.05,
    hours: 132,
    regular: 25,
    parallel: 40,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية العلوم",
    major: "الفيزياء",
    acceptance: 69.50,
    hours: 132,
    regular: 25,
    parallel: 40,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية العلوم",
    major: "الرياضيات",
    acceptance: 71.75,
    hours: 132,
    regular: 25,
    parallel: 40,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية العلوم",
    major: "العلوم البيئية",
    acceptance: 65,
    hours: 132,
    regular: 25,
    parallel: 35,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية تكنولوجيا المعلومات",
    major: "علم الحاسوب",
    acceptance: 80.40,
    hours: 132,
    regular: 43,
    parallel: 75,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية تكنولوجيا المعلومات",
    major: "نظم المعلومات الحاسوبية",
    acceptance: 79.45,
    hours: 132,
    regular: 43,
    parallel: 75,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية تكنولوجيا المعلومات",
    major: "الأمن السيبراني والحوسبة السحابية",
    acceptance: 78.10,
    hours: 132,
    regular: 43,
    parallel: 75,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية تكنولوجيا المعلومات",
    major: "هندسة البرمجيات",
    acceptance: 81.55,
    hours: 132,
    regular: 43,
    parallel: 75,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية الهندسة",
    major: "الهندسة المدنية",
    acceptance: 80.00,
    hours: 132,
    regular: 43,
    parallel: 75,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية الهندسة",
    major: "الهندسة الكهربائية",
    acceptance: 80.05,
    hours: 132,
    regular: 43,
    parallel: 75,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية الهندسة",
    major: "الهندسة الميكانيكية",
    acceptance: 80.20,
    hours: 132,
    regular: 43,
    parallel: 75,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية الهندسة",
    major: "الهندسة الكيميائية",
    acceptance: 80.00,
    hours: 132,
    regular: 43,
    parallel: 75,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية الهندسة",
    major: "هندسة الحاسوب",
    acceptance: 81.80,
    hours: 132,
    regular: 43,
    parallel: 75,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية الهندسة",
    major: "هندسة الاتصالات",
    acceptance: 80.00,
    hours: 132,
    regular: 43,
    parallel: 75,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية الهندسة",
    major: "هندسة التعدين",
    acceptance: 80.00,
    hours: 132,
    regular: 43,
    parallel: 75,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية الهندسة",
    major: "الهندسة البيئية",
    acceptance: 80.00,
    hours: 132,
    regular: 43,
    parallel: 75,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية العلوم الطبية المساندة",
    major: "الأشعة الطبية",
    acceptance: 80.00,
    hours: 132,
    regular: 43,
    parallel: 75,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية العلوم الطبية المساندة",
    major: "العلاج الطبيعي",
    acceptance: 80.00,
    hours: 132,
    regular: 43,
    parallel: 75,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية الأميرة عائشة بنت الحسين للتمريض",
    major: "التمريض",
    acceptance: 70,
    hours: 132,
    regular: 35,
    parallel: 50,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية إدارة الأعمال والاقتصاد",
    major: "إدارة الأعمال",
    acceptance: 78.95,
    hours: 132,
    regular: 30,
    parallel: 40,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية إدارة الأعمال والاقتصاد",
    major: "المحاسبة",
    acceptance: 76.05,
    hours: 132,
    regular: 30,
    parallel: 40,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية إدارة الأعمال والاقتصاد",
    major: "الاقتصاد",
    acceptance: 72.60,
    hours: 132,
    regular: 30,
    parallel: 40,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية إدارة الأعمال والاقتصاد",
    major: "العلوم المالية والمصرفية",
    acceptance: 73.60,
    hours: 132,
    regular: 30,
    parallel: 40,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية إدارة الأعمال والاقتصاد",
    major: "نظم المعلومات الإدارية",
    acceptance: 77.70,
    hours: 132,
    regular: 30,
    parallel: 40,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية إدارة الأعمال والاقتصاد",
    major: "الإدارة اللوجستية",
    acceptance: 74.25,
    hours: 132,
    regular: 35,
    parallel: 40,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية العلوم التربوية",
    major: "معلم صف / إناث",
    acceptance: 76.00,
    hours: 132,
    regular: 22,
    parallel: 35,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية العلوم التربوية",
    major: "التربية الخاصة",
    acceptance: 74.10,
    hours: 132,
    regular: 22,
    parallel: 35,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية العلوم التربوية",
    major: "رياض الأطفال / إناث",
    acceptance: 72.80,
    hours: 132,
    regular: 22,
    parallel: 35,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية البتراء للسياحة والآثار",
    major: "الآثار",
    acceptance: 69.85,
    hours: 132,
    regular: 25,
    parallel: 40,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية البتراء للسياحة والآثار",
    major: "إدارة السياحة",
    acceptance: 69.95,
    hours: 132,
    regular: 25,
    parallel: 40,
    image: "imags/universities/ahu.png"
  },
  {
    university: "جامعة الحسين بن طلال",
    college: "كلية البتراء للسياحة والآثار",
    major: "إدارة الفنادق",
    acceptance: 71.15,
    hours: 132,
    regular: 25,
    parallel: 40,
    image: "imags/universities/ahu.png"
  },

  // ================================================================
  // 9. جامعة الطفيلة التقنية
  // ================================================================
  {
    university: "جامعة الطفيلة التقنية",
    college: "كلية الهندسة",
    major: "الهندسة المدنية",
    acceptance: 80.05,
    hours: 132,
    regular: 30,
    parallel: 50,
    image: "imags/universities/tu.png"
  },
  {
    university: "جامعة الطفيلة التقنية",
    college: "كلية الهندسة",
    major: "هندسة الصناعات الكيميائية",
    acceptance: 80.25,
    hours: 132,
    regular: 30,
    parallel: 45,
    image: "imags/universities/tu.png"
  },
  {
    university: "جامعة الطفيلة التقنية",
    college: "كلية الهندسة",
    major: "هندسة التعدين",
    acceptance: 80.10,
    hours: 132,
    regular: 30,
    parallel: 35,
    image: "imags/universities/tu.png"
  },
  {
    university: "جامعة الطفيلة التقنية",
    college: "كلية الهندسة",
    major: "هندسة القوى الكهربائية",
    acceptance: 80.20,
    hours: 132,
    regular: 30,
    parallel: 45,
    image: "imags/universities/tu.png"
  },
  {
    university: "جامعة الطفيلة التقنية",
    college: "كلية الهندسة",
    major: "الهندسة الميكانيكية / الإنتاج والآلات",
    acceptance: 80.05,
    hours: 132,
    regular: 30,
    parallel: 45,
    image: "imags/universities/tu.png"
  },
  {
    university: "جامعة الطفيلة التقنية",
    college: "كلية الهندسة",
    major: "الهندسة الجيولوجية",
    acceptance: 80.00,
    hours: 132,
    regular: 30,
    parallel: 35,
    image: "imags/universities/tu.png"
  },
  {
    university: "جامعة الطفيلة التقنية",
    college: "كلية الهندسة",
    major: "هندسة الاتصالات والإلكترونيات",
    acceptance: 80.00,
    hours: 132,
    regular: 30,
    parallel: 45,
    image: "imags/universities/tu.png"
  },
  {
    university: "جامعة الطفيلة التقنية",
    college: "كلية الهندسة",
    major: "هندسة الأنظمة الذكية",
    acceptance: 80.00,
    hours: 132,
    regular: 45,
    parallel: 55,
    image: "imags/universities/tu.png"
  },
  {
    university: "جامعة الطفيلة التقنية",
    college: "كلية العلوم",
    major: "الرياضيات",
    acceptance: 69.35,
    hours: 132,
    regular: 20,
    parallel: 30,
    image: "imags/universities/tu.png"
  },
  {
    university: "جامعة الطفيلة التقنية",
    college: "كلية العلوم",
    major: "الفيزياء التطبيقية",
    acceptance: 69.15,
    hours: 132,
    regular: 20,
    parallel: 30,
    image: "imags/universities/tu.png"
  },
  {
    university: "جامعة الطفيلة التقنية",
    college: "كلية العلوم",
    major: "الكيمياء",
    acceptance: 73.10,
    hours: 132,
    regular: 20,
    parallel: 30,
    image: "imags/universities/tu.png"
  },
  {
    university: "جامعة الطفيلة التقنية",
    college: "كلية العلوم",
    major: "تكنولوجيا الكيمياء",
    acceptance: 73.15,
    hours: 132,
    regular: 20,
    parallel: 30,
    image: "imags/universities/tu.png"
  },
  {
    university: "جامعة الطفيلة التقنية",
    college: "كلية العلوم",
    major: "العلوم الحياتية التطبيقية",
    acceptance: 74.95,
    hours: 132,
    regular: 22,
    parallel: 40,
    image: "imags/universities/tu.png"
  },
  {
    university: "جامعة الطفيلة التقنية",
    college: "كلية العلوم",
    major: "الإحصاء التطبيقي",
    acceptance: 69.60,
    hours: 132,
    regular: 30,
    parallel: 40,
    image: "imags/universities/tu.png"
  },
  {
    university: "جامعة الطفيلة التقنية",
    college: "كلية الأعمال",
    major: "العلوم المالية والمصرفية",
    acceptance: 74.00,
    hours: 132,
    regular: 20,
    parallel: 30,
    image: "imags/universities/tu.png"
  },
  {
    university: "جامعة الطفيلة التقنية",
    college: "كلية العلوم التربوية",
    major: "التربية الخاصة",
    acceptance: 74.70,
    hours: 132,
    regular: 20,
    parallel: 30,
    image: "imags/universities/tu.png"
  },
  {
    university: "جامعة الطفيلة التقنية",
    college: "كلية العلوم",
    major: "الكيمياء",
    acceptance: 65,
    hours: 132,
    regular: 20,
    parallel: 30,
    image: "imags/universities/tu.png"
  },
  {
    university: "جامعة الطفيلة التقنية",
    college: "كلية العلوم",
    major: "الكيمياء الصناعية",
    acceptance: 65,
    hours: 132,
    regular: 30,
    parallel: 30,
    image: "imags/universities/tu.png"
  },
  {
    university: "جامعة الطفيلة التقنية",
    college: "كلية العلوم",
    major: "الفيزياء الطبية",
    acceptance: 65,
    hours: 132,
    regular: 25,
    parallel: 35,
    image: "imags/universities/tu.png"
  },
  {
    university: "جامعة الطفيلة التقنية",
    college: "كلية تكنولوجيا المعلومات والاتصالات",
    major: "الحوسبة في الأجهزة الذكية",
    acceptance: 65,
    hours: 132,
    regular: 45,
    parallel: 60,
    image: "imags/universities/tu.png"
  },
  {
    university: "جامعة الطفيلة التقنية",
    college: "كلية تكنولوجيا المعلومات والاتصالات",
    major: "نظم المعلومات الحاسوبية",
    acceptance: 65,
    hours: 132,
    regular: 45,
    parallel: 60,
    image: "imags/universities/tu.png"
  },
  {
    university: "جامعة الطفيلة التقنية",
    college: "كلية الهندسة",
    major: "هندسة الطاقة المتجددة",
    acceptance: 80,
    hours: 132,
    regular: 35,
    parallel: 50,
    image: "imags/universities/tu.png"
  },
  {
    university: "جامعة الطفيلة التقنية",
    college: "كلية الآداب",
    major: "اللغة العربية",
    acceptance: 65,
    hours: 132,
    regular: 16,
    parallel: 30,
    image: "imags/universities/tu.png"
  },
  {
    university: "جامعة الطفيلة التقنية",
    college: "كلية الآداب",
    major: "اللغة الإنجليزية وآدابها",
    acceptance: 65,
    hours: 132,
    regular: 20,
    parallel: 35,
    image: "imags/universities/tu.png"
  },
  {
    university: "جامعة الطفيلة التقنية",
    college: "كلية الأعمال",
    major: "المحاسبة",
    acceptance: 65,
    hours: 132,
    regular: 20,
    parallel: 30,
    image: "imags/universities/tu.png"
  },
  {
    university: "جامعة الطفيلة التقنية",
    college: "كلية الأعمال",
    major: "إدارة الأعمال",
    acceptance: 65,
    hours: 132,
    regular: 25,
    parallel: 35,
    image: "imags/universities/tu.png"
  },
  {
    university: "جامعة الطفيلة التقنية",
    college: "كلية الأعمال",
    major: "الاقتصاد",
    acceptance: 65,
    hours: 132,
    regular: 20,
    parallel: 30,
    image: "imags/universities/tu.png"
  },
  {
    university: "جامعة الطفيلة التقنية",
    college: "كلية العلوم التربوية",
    major: "معلم صف",
    acceptance: 65,
    hours: 132,
    regular: 20,
    parallel: 30,
    image: "imags/universities/tu.png"
  },
  {
    university: "جامعة الطفيلة التقنية",
    college: "كلية العلوم التربوية",
    major: "رياض الأطفال",
    acceptance: 65,
    hours: 132,
    regular: 20,
    parallel: 30,
    image: "imags/universities/tu.png"
  },

  // ================================================================
  // 10. جامعة العلوم الإسلامية العالمية
  // ================================================================
  {
    university: "جامعة العلوم الإسلامية العالمية",
    college: "كلية الشريعة",
    major: "الفقه وأصوله",
    acceptance: 83.50,
    hours: 132,
    regular: 15,
    parallel: 15,
    image: "imags/universities/aisu.png"
  },
  {
    university: "جامعة العلوم الإسلامية العالمية",
    college: "كلية الشريعة",
    major: "أصول الدين",
    acceptance: 77.10,
    hours: 132,
    regular: 15,
    parallel: 15,
    image: "imags/universities/aisu.png"
  },
  {
    university: "جامعة العلوم الإسلامية العالمية",
    college: "كلية الشريعة",
    major: "القراءات القرآنية",
    acceptance: 75.15,
    hours: 132,
    regular: 15,
    parallel: 15,
    image: "imags/universities/aisu.png"
  },
  {
    university: "جامعة العلوم الإسلامية العالمية",
    college: "كلية الشريعة",
    major: "الأداء الصوتي والتجويد",
    acceptance: 75.25,
    hours: 132,
    regular: 10,
    parallel: 10,
    image: "imags/universities/aisu.png"
  },
  {
    university: "جامعة العلوم الإسلامية العالمية",
    college: "كلية الشريعة",
    major: "الفقه الحنفي",
    acceptance: 75.15,
    hours: 132,
    regular: 10,
    parallel: 10,
    image: "imags/universities/aisu.png"
  },
  {
    university: "جامعة العلوم الإسلامية العالمية",
    college: "كلية الشريعة",
    major: "الفقه الشافعي",
    acceptance: 75.00,
    hours: 132,
    regular: 10,
    parallel: 10,
    image: "imags/universities/aisu.png"
  },
  {
    university: "جامعة العلوم الإسلامية العالمية",
    college: "كلية الشريعة",
    major: "الفقه المالكي",
    acceptance: 75.05,
    hours: 132,
    regular: 10,
    parallel: 10,
    image: "imags/universities/aisu.png"
  },
  {
    university: "جامعة العلوم الإسلامية العالمية",
    college: "كلية الحقوق",
    major: "القانون",
    acceptance: 86.95,
    hours: 132,
    regular: 30,
    parallel: 40,
    image: "imags/universities/aisu.png"
  },
  {
    university: "جامعة العلوم الإسلامية العالمية",
    college: "كلية الاقتصاد والعلوم الإدارية",
    major: "إدارة الأعمال",
    acceptance: 83.20,
    hours: 132,
    regular: 40,
    parallel: 50,
    image: "imags/universities/aisu.png"
  },
  {
    university: "جامعة العلوم الإسلامية العالمية",
    college: "كلية الاقتصاد والعلوم الإدارية",
    major: "نظم المعلومات الإدارية",
    acceptance: 84.85,
    hours: 132,
    regular: 45,
    parallel: 50,
    image: "imags/universities/aisu.png"
  },
  {
    university: "جامعة العلوم الإسلامية العالمية",
    college: "كلية الاقتصاد والعلوم الإدارية",
    major: "المصارف الإسلامية",
    acceptance: 82.85,
    hours: 132,
    regular: 30,
    parallel: 40,
    image: "imags/universities/aisu.png"
  },
  {
    university: "جامعة العلوم الإسلامية العالمية",
    college: "كلية الاقتصاد والعلوم الإدارية",
    major: "العلوم المالية والمصرفية",
    acceptance: 83.75,
    hours: 132,
    regular: 30,
    parallel: 50,
    image: "imags/universities/aisu.png"
  },
  {
    university: "جامعة العلوم الإسلامية العالمية",
    college: "كلية تكنولوجيا المعلومات",
    major: "نظم شبكات الحاسوب",
    acceptance: 81.55,
    hours: 132,
    regular: 45,
    parallel: 60,
    image: "imags/universities/aisu.png"
  },
  {
    university: "جامعة العلوم الإسلامية العالمية",
    college: "كلية العلوم التربوية",
    major: "الإرشاد والصحة النفسية",
    acceptance: 83.95,
    hours: 132,
    regular: 25,
    parallel: 35,
    image: "imags/universities/aisu.png"
  },
  {
    university: "جامعة العلوم الإسلامية العالمية",
    college: "كلية العلوم التربوية",
    major: "التربية الخاصة",
    acceptance: 80.75,
    hours: 132,
    regular: 25,
    parallel: 35,
    image: "imags/universities/aisu.png"
  },
  {
    university: "جامعة العلوم الإسلامية العالمية",
    college: "كلية العلوم التربوية",
    major: "معلم صف / إناث",
    acceptance: 83.75,
    hours: 132,
    regular: 25,
    parallel: 35,
    image: "imags/universities/aisu.png"
  },
  {
    university: "جامعة العلوم الإسلامية العالمية",
    college: "كلية العلوم التربوية",
    major: "تربية الطفولة المبكرة / إناث",
    acceptance: 79.00,
    hours: 132,
    regular: 25,
    parallel: 35,
    image: "imags/universities/aisu.png"
  },
  {
    university: "جامعة العلوم الإسلامية العالمية",
    college: "كلية الآداب",
    major: "اللغة العربية وآدابها",
    acceptance: 81.40,
    hours: 132,
    regular: 16,
    parallel: 30,
    image: "imags/universities/aisu.png"
  },
  {
    university: "جامعة العلوم الإسلامية العالمية",
    college: "كلية الآداب",
    major: "اللغة الإنجليزية وآدابها",
    acceptance: 86.25,
    hours: 132,
    regular: 30,
    parallel: 40,
    image: "imags/universities/aisu.png"
  },
  {
    university: "جامعة العلوم الإسلامية العالمية",
    college: "كلية الفنون",
    major: "الفنون الإسلامية والتطبيقية",
    acceptance: 79.75,
    hours: 132,
    regular: 30,
    parallel: 40,
    image: "imags/universities/aisu.png"
  },

  // ================================================================
  // 11. جامعة عمان الأهلية
  // ================================================================
  {
    university: "جامعة عمان الأهلية",
    college: "كلية طب الأسنان",
    major: "دكتور في جراحة الفم والأسنان",
    acceptance: 65,
    hours: 165,
    regular: 175,
    parallel: "-",
    image: "imags/universities/au.png"
  },
  {
    university: "جامعة عمان الأهلية",
    college: "كلية الصيدلة",
    major: "الصيدلة",
    acceptance: 65,
    hours: 162,
    regular: 230,
    parallel: "-",
    image: "imags/universities/au.png"
  },
  {
    university: "جامعة عمان الأهلية",
    college: "كلية الهندسة",
    major: "الهندسة المدنية",
    acceptance: 65,
    hours: 132,
    regular: 200,
    parallel: "-",
    image: "imags/universities/au.png"
  },
  {
    university: "جامعة عمان الأهلية",
    college: "كلية الهندسة",
    major: "الهندسة الكهربائية",
    acceptance: 65,
    hours: 132,
    regular: 200,
    parallel: "-",
    image: "imags/universities/au.png"
  },
  {
    university: "جامعة عمان الأهلية",
    college: "كلية الهندسة",
    major: "الهندسة الميكانيكية",
    acceptance: 65,
    hours: 132,
    regular: 200,
    parallel: "-",
    image: "imags/universities/au.png"
  },
  {
    university: "جامعة عمان الأهلية",
    college: "كلية الهندسة",
    major: "هندسة السيارات الكهربائية",
    acceptance: 65,
    hours: 132,
    regular: 200,
    parallel: "-",
    image: "imags/universities/au.png"
  },
  {
    university: "جامعة عمان الأهلية",
    college: "كلية الهندسة",
    major: "الهندسة الصناعية وإدارة الجودة",
    acceptance: 65,
    hours: 132,
    regular: 200,
    parallel: "-",
    image: "imags/universities/au.png"
  },
  {
    university: "جامعة عمان الأهلية",
    college: "كلية العمارة والتصميم",
    major: "العمارة",
    acceptance: 65,
    hours: 132,
    regular: 170,
    parallel: "-",
    image: "imags/universities/au.png"
  },
  {
    university: "جامعة عمان الأهلية",
    college: "كلية العلوم الطبية المساندة",
    major: "العلوم الطبية المخبرية",
    acceptance: 65,
    hours: 132,
    regular: 175,
    parallel: "-",
    image: "imags/universities/au.png"
  },
  {
    university: "جامعة عمان الأهلية",
    college: "كلية العلوم الطبية المساندة",
    major: "العلاج الطبيعي",
    acceptance: 65,
    hours: 132,
    regular: 175,
    parallel: "-",
    image: "imags/universities/au.png"
  },
  {
    university: "جامعة عمان الأهلية",
    college: "كلية العلوم الطبية المساندة",
    major: "العلاج الوظيفي",
    acceptance: 65,
    hours: 132,
    regular: 175,
    parallel: "-",
    image: "imags/universities/au.png"
  },
  {
    university: "جامعة عمان الأهلية",
    college: "كلية العلوم الطبية المساندة",
    major: "تكنولوجيا الأسنان",
    acceptance: 65,
    hours: 132,
    regular: 175,
    parallel: "-",
    image: "imags/universities/au.png"
  },
  {
    university: "جامعة عمان الأهلية",
    college: "كلية الآداب والعلوم",
    major: "اللغة الإنجليزية وآدابها",
    acceptance: 60,
    hours: 132,
    regular: 140,
    parallel: "-",
    image: "imags/universities/au.png"
  },
  {
    university: "جامعة عمان الأهلية",
    college: "كلية الآداب والعلوم",
    major: "اللغة الفرنسية والإنجليزية",
    acceptance: 60,
    hours: 132,
    regular: 140,
    parallel: "-",
    image: "imags/universities/au.png"
  },
  {
    university: "جامعة عمان الأهلية",
    college: "كلية الآداب والعلوم",
    major: "اللغة الصينية والإنجليزية",
    acceptance: 60,
    hours: 132,
    regular: 140,
    parallel: "-",
    image: "imags/universities/au.png"
  },
  {
    university: "جامعة عمان الأهلية",
    college: "كلية الآداب والعلوم",
    major: "اللغة الألمانية والإنجليزية",
    acceptance: 60,
    hours: 132,
    regular: 140,
    parallel: "-",
    image: "imags/universities/au.png"
  },
  {
    university: "جامعة عمان الأهلية",
    college: "كلية الإعلام",
    major: "الإعلام الرقمي",
    acceptance: 60,
    hours: 132,
    regular: 140,
    parallel: "-",
    image: "imags/universities/au.png"
  },

  // ================================================================
  // 12. جامعة العلوم التطبيقية الخاصة
  // ================================================================
  {
    university: "جامعة العلوم التطبيقية الخاصة",
    college: "كلية الصيدلة",
    major: "الصيدلة",
    acceptance: 65,
    hours: 162,
    regular: 45,
    parallel: 75,
    image: "imags/universities/asu.png"
  },
  {
    university: "جامعة العلوم التطبيقية الخاصة",
    college: "كلية الصيدلة",
    major: "التغذية السريرية والحميات",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/asu.png"
  },
  {
    university: "جامعة العلوم التطبيقية الخاصة",
    college: "كلية طب الأسنان",
    major: "طب وجراحة الفم والأسنان",
    acceptance: 65,
    hours: 165,
    regular: 45,
    parallel: 75,
    image: "imags/universities/asu.png"
  },
  {
    university: "جامعة العلوم التطبيقية الخاصة",
    college: "كلية العلوم الطبية المساندة",
    major: "العلوم الطبية المخبرية",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/asu.png"
  },
  {
    university: "جامعة العلوم التطبيقية الخاصة",
    college: "كلية العلوم الطبية المساندة",
    major: "العلاج الطبيعي",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/asu.png"
  },
  {
    university: "جامعة العلوم التطبيقية الخاصة",
    college: "كلية العلوم الطبية المساندة",
    major: "العلاج الوظيفي",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/asu.png"
  },
  {
    university: "جامعة العلوم التطبيقية الخاصة",
    college: "كلية التمريض",
    major: "التمريض",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/asu.png"
  },
  {
    university: "جامعة العلوم التطبيقية الخاصة",
    college: "كلية الهندسة والتكنولوجيا",
    major: "الهندسة المدنية",
    acceptance: 65,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/asu.png"
  },
  {
    university: "جامعة العلوم التطبيقية الخاصة",
    college: "كلية الهندسة والتكنولوجيا",
    major: "الهندسة الميكانيكية",
    acceptance: 65,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/asu.png"
  },
  {
    university: "جامعة العلوم التطبيقية الخاصة",
    college: "كلية الهندسة والتكنولوجيا",
    major: "الهندسة الكهربائية / اتصالات وإلكترونيات",
    acceptance: 65,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/asu.png"
  },
  {
    university: "جامعة العلوم التطبيقية الخاصة",
    college: "كلية الهندسة والتكنولوجيا",
    major: "الهندسة الصناعية",
    acceptance: 65,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/asu.png"
  },
  {
    university: "جامعة العلوم التطبيقية الخاصة",
    college: "كلية الهندسة والتكنولوجيا",
    major: "هندسة العمارة",
    acceptance: 65,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/asu.png"
  },
  {
    university: "جامعة العلوم التطبيقية الخاصة",
    college: "كلية الهندسة والتكنولوجيا",
    major: "الهندسة التطبيقية / المركبات الهجينة والكهربائية",
    acceptance: 65,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/asu.png"
  },
  {
    university: "جامعة العلوم التطبيقية الخاصة",
    college: "كلية الهندسة والتكنولوجيا",
    major: "تكنولوجيا الطاقة المتجددة",
    acceptance: 65,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/asu.png"
  },
  {
    university: "جامعة العلوم التطبيقية الخاصة",
    college: "كلية تكنولوجيا المعلومات",
    major: "علم الحاسوب",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/asu.png"
  },
  {
    university: "جامعة العلوم التطبيقية الخاصة",
    college: "كلية تكنولوجيا المعلومات",
    major: "هندسة البرمجيات",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/asu.png"
  },
  {
    university: "جامعة العلوم التطبيقية الخاصة",
    college: "كلية تكنولوجيا المعلومات",
    major: "الأمن السيبراني والحوسبة السحابية",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/asu.png"
  },
  {
    university: "جامعة العلوم التطبيقية الخاصة",
    college: "كلية العلوم",
    major: "الرياضيات",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/asu.png"
  },
  {
    university: "جامعة العلوم التطبيقية الخاصة",
    college: "كلية العلوم",
    major: "الكيمياء",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/asu.png"
  },
  {
    university: "جامعة العلوم التطبيقية الخاصة",
    college: "كلية الآداب والعلوم الإنسانية",
    major: "اللغة الإنجليزية وآدابها",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/asu.png"
  },
  {
    university: "جامعة العلوم التطبيقية الخاصة",
    college: "كلية الآداب والعلوم الإنسانية",
    major: "اللغة الإنجليزية والترجمة",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/asu.png"
  },
  {
    university: "جامعة العلوم التطبيقية الخاصة",
    college: "كلية الآداب والعلوم الإنسانية",
    major: "العلوم السياسية",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/asu.png"
  },
  {
    university: "جامعة العلوم التطبيقية الخاصة",
    college: "كلية الآداب والعلوم الإنسانية",
    major: "الإعلام الرقمي",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/asu.png"
  },
  {
    university: "جامعة العلوم التطبيقية الخاصة",
    college: "كلية الأعمال",
    major: "المحاسبة",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/asu.png"
  },
  {
    university: "جامعة العلوم التطبيقية الخاصة",
    college: "كلية الأعمال",
    major: "المحاسبة (بالإنجليزية)",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/asu.png"
  },
  {
    university: "جامعة العلوم التطبيقية الخاصة",
    college: "كلية الأعمال",
    major: "الذكاء الاصطناعي في المحاسبة والتدقيق",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/asu.png"
  },
  {
    university: "جامعة العلوم التطبيقية الخاصة",
    college: "كلية الأعمال",
    major: "إدارة الأعمال",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/asu.png"
  },
  {
    university: "جامعة العلوم التطبيقية الخاصة",
    college: "كلية الأعمال",
    major: "إدارة الأعمال (بالإنجليزية)",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/asu.png"
  },
  {
    university: "جامعة العلوم التطبيقية الخاصة",
    college: "كلية الأعمال",
    major: "التسويق",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/asu.png"
  },
  {
    university: "جامعة العلوم التطبيقية الخاصة",
    college: "كلية الأعمال",
    major: "التسويق (بالإنجليزية)",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/asu.png"
  },
  {
    university: "جامعة العلوم التطبيقية الخاصة",
    college: "كلية الأعمال",
    major: "التسويق الرقمي",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/asu.png"
  },
  {
    university: "جامعة العلوم التطبيقية الخاصة",
    college: "كلية الأعمال",
    major: "العلوم المالية والمصرفية",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/asu.png"
  },
  {
    university: "جامعة العلوم التطبيقية الخاصة",
    college: "كلية الأعمال",
    major: "التمويل وإدارة المخاطر",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/asu.png"
  },
  {
    university: "جامعة العلوم التطبيقية الخاصة",
    college: "كلية الأعمال",
    major: "نظم المعلومات الإدارية",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/asu.png"
  },
  {
    university: "جامعة العلوم التطبيقية الخاصة",
    college: "كلية الفنون والتصميم",
    major: "التصميم الجرافيكي",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/asu.png"
  },
  {
    university: "جامعة العلوم التطبيقية الخاصة",
    college: "كلية الفنون والتصميم",
    major: "التصميم الداخلي",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/asu.png"
  },
  {
    university: "جامعة العلوم التطبيقية الخاصة",
    college: "كلية الفنون والتصميم",
    major: "تصميم الوسائط الرقمية",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/asu.png"
  },
  {
    university: "جامعة العلوم التطبيقية الخاصة",
    college: "كلية الحقوق",
    major: "القانون",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/asu.png"
  },
  {
    university: "جامعة العلوم التطبيقية الخاصة",
    college: "كلية الشريعة والدراسات الإسلامية",
    major: "الفقه وأصوله",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/asu.png"
  },
  {
    university: "جامعة العلوم التطبيقية الخاصة",
    college: "كلية الشريعة والدراسات الإسلامية",
    major: "القراءات القرآنية",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/asu.png"
  },

  // ================================================================
  // 13. جامعة الزيتونة الأردنية
  // ================================================================
  {
    university: "جامعة الزيتونة الأردنية",
    college: "كلية الهندسة والتكنولوجيا",
    major: "الهندسة المدنية",
    acceptance: 65,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/zaytuna.png"
  },
  {
    university: "جامعة الزيتونة الأردنية",
    college: "كلية الهندسة والتكنولوجيا",
    major: "الهندسة الميكانيكية",
    acceptance: 65,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/zaytuna.png"
  },
  {
    university: "جامعة الزيتونة الأردنية",
    college: "كلية الهندسة والتكنولوجيا",
    major: "الهندسة الكهربائية / هندسة القدرة",
    acceptance: 65,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/zaytuna.png"
  },
  {
    university: "جامعة الزيتونة الأردنية",
    college: "كلية الهندسة والتكنولوجيا",
    major: "هندسة الاتصالات",
    acceptance: 65,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/zaytuna.png"
  },
  {
    university: "جامعة الزيتونة الأردنية",
    college: "كلية الهندسة والتكنولوجيا",
    major: "هندسة الحاسوب",
    acceptance: 65,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/zaytuna.png"
  },
  {
    university: "جامعة الزيتونة الأردنية",
    college: "كلية الهندسة والتكنولوجيا",
    major: "هندسة الطاقة",
    acceptance: 65,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/zaytuna.png"
  },
  {
    university: "جامعة الزيتونة الأردنية",
    college: "كلية تكنولوجيا المعلومات",
    major: "علم الحاسوب",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/zaytuna.png"
  },
  {
    university: "جامعة الزيتونة الأردنية",
    college: "كلية تكنولوجيا المعلومات",
    major: "هندسة البرمجيات",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/zaytuna.png"
  },
  {
    university: "جامعة الزيتونة الأردنية",
    college: "كلية تكنولوجيا المعلومات",
    major: "شبكات الحاسوب",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/zaytuna.png"
  },
  {
    university: "جامعة الزيتونة الأردنية",
    college: "كلية تكنولوجيا المعلومات",
    major: "نظم المعلومات الحاسوبية",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/zaytuna.png"
  },
  {
    university: "جامعة الزيتونة الأردنية",
    college: "كلية تكنولوجيا المعلومات",
    major: "الحوسبة التجارية",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/zaytuna.png"
  },
  {
    university: "جامعة الزيتونة الأردنية",
    college: "كلية الأعمال",
    major: "المحاسبة",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/zaytuna.png"
  },
  {
    university: "جامعة الزيتونة الأردنية",
    college: "كلية الأعمال",
    major: "إدارة الأعمال",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/zaytuna.png"
  },
  {
    university: "جامعة الزيتونة الأردنية",
    college: "كلية الأعمال",
    major: "التمويل",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/zaytuna.png"
  },
  {
    university: "جامعة الزيتونة الأردنية",
    college: "كلية الأعمال",
    major: "التسويق",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/zaytuna.png"
  },
  {
    university: "جامعة الزيتونة الأردنية",
    college: "كلية الأعمال",
    major: "المصرفية",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/zaytuna.png"
  },
  {
    university: "جامعة الزيتونة الأردنية",
    college: "كلية الآداب والعلوم",
    major: "اللغة العربية",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/zaytuna.png"
  },
  {
    university: "جامعة الزيتونة الأردنية",
    college: "كلية الآداب والعلوم",
    major: "اللغة الإنجليزية",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/zaytuna.png"
  },
  {
    university: "جامعة الزيتونة الأردنية",
    college: "كلية الآداب والعلوم",
    major: "اللغة الفرنسية",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/zaytuna.png"
  },
  {
    university: "جامعة الزيتونة الأردنية",
    college: "كلية الآداب والعلوم",
    major: "الترجمة والترجمة التحريرية",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/zaytuna.png"
  },
  {
    university: "جامعة الزيتونة الأردنية",
    college: "كلية الآداب والعلوم",
    major: "الرياضيات",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/zaytuna.png"
  },
  {
    university: "جامعة الزيتونة الأردنية",
    college: "كلية الصيدلة",
    major: "الصيدلة",
    acceptance: 65,
    hours: 162,
    regular: 45,
    parallel: 75,
    image: "imags/universities/zaytuna.png"
  },
  {
    university: "جامعة الزيتونة الأردنية",
    college: "كلية التمريض",
    major: "التمريض",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/zaytuna.png"
  },
  {
    university: "جامعة الزيتونة الأردنية",
    college: "كلية الحقوق",
    major: "القانون",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/zaytuna.png"
  },
  {
    university: "جامعة الزيتونة الأردنية",
    college: "كلية الفنون والتصميم",
    major: "التصميم الجرافيكي",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/zaytuna.png"
  },
  {
    university: "جامعة الزيتونة الأردنية",
    college: "كلية الفنون والتصميم",
    major: "الوسائط المتعددة",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/zaytuna.png"
  },
  {
    university: "جامعة الزيتونة الأردنية",
    college: "كلية السياحة",
    major: "السياحة",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/zaytuna.png"
  },
  {
    university: "جامعة الزيتونة الأردنية",
    college: "كلية العلوم التربوية",
    major: "معلم صف",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/zaytuna.png"
  },

  // ================================================================
  // 14. جامعة الإسراء
  // ================================================================
  {
    university: "جامعة الإسراء",
    college: "كلية الآداب",
    major: "اللغة الإنجليزية وآدابها",
    acceptance: 60,
    hours: 135,
    regular: 50,
    parallel: "-",
    image: "imags/universities/isu.png"
  },
  {
    university: "جامعة الإسراء",
    college: "كلية الآداب",
    major: "اللغة العربية",
    acceptance: 60,
    hours: 135,
    regular: 70,
    parallel: "-",
    image: "imags/universities/isu.png"
  },
  {
    university: "جامعة الإسراء",
    college: "كلية الآداب",
    major: "علم النفس",
    acceptance: 60,
    hours: 135,
    regular: 70,
    parallel: "-",
    image: "imags/universities/isu.png"
  },
  {
    university: "جامعة الإسراء",
    college: "كلية الآداب",
    major: "اللغة الإنجليزية / ترجمة",
    acceptance: 60,
    hours: 135,
    regular: 70,
    parallel: "-",
    image: "imags/universities/isu.png"
  },
  {
    university: "جامعة الإسراء",
    college: "كلية الأعمال",
    major: "المحاسبة",
    acceptance: 60,
    hours: 132,
    regular: 80,
    parallel: "-",
    image: "imags/universities/isu.png"
  },
  {
    university: "جامعة الإسراء",
    college: "كلية الأعمال",
    major: "إدارة الأعمال",
    acceptance: 60,
    hours: 132,
    regular: 80,
    parallel: "-",
    image: "imags/universities/isu.png"
  },
  {
    university: "جامعة الإسراء",
    college: "كلية الأعمال",
    major: "الإدارة المالية والمصرفية",
    acceptance: 60,
    hours: 132,
    regular: 80,
    parallel: "-",
    image: "imags/universities/isu.png"
  },
  {
    university: "جامعة الإسراء",
    college: "كلية الأعمال",
    major: "التسويق",
    acceptance: 60,
    hours: 132,
    regular: 70,
    parallel: "-",
    image: "imags/universities/isu.png"
  },
  {
    university: "جامعة الإسراء",
    college: "كلية الأعمال",
    major: "نظم المعلومات الإدارية",
    acceptance: 60,
    hours: 132,
    regular: 70,
    parallel: "-",
    image: "imags/universities/isu.png"
  },
  {
    university: "جامعة الإسراء",
    college: "كلية الحقوق",
    major: "الحقوق",
    acceptance: 65,
    hours: 141,
    regular: 70,
    parallel: "-",
    image: "imags/universities/isu.png"
  },
  {
    university: "جامعة الإسراء",
    college: "كلية تكنولوجيا المعلومات",
    major: "نظم المعلومات الحاسوبية",
    acceptance: 60,
    hours: 135,
    regular: 70,
    parallel: "-",
    image: "imags/universities/isu.png"
  },
  {
    university: "جامعة الإسراء",
    college: "كلية تكنولوجيا المعلومات",
    major: "النظم الحاسوبية للوسائط المتعددة",
    acceptance: 60,
    hours: 135,
    regular: 70,
    parallel: "-",
    image: "imags/universities/isu.png"
  },
  {
    university: "جامعة الإسراء",
    college: "كلية تكنولوجيا المعلومات",
    major: "علم الحاسوب",
    acceptance: 60,
    hours: 135,
    regular: 70,
    parallel: "-",
    image: "imags/universities/isu.png"
  },
  {
    university: "جامعة الإسراء",
    college: "كلية تكنولوجيا المعلومات",
    major: "هندسة البرمجيات",
    acceptance: 60,
    hours: 135,
    regular: 80,
    parallel: "-",
    image: "imags/universities/isu.png"
  },
  {
    university: "جامعة الإسراء",
    college: "كلية تكنولوجيا المعلومات",
    major: "أنظمة الشبكات الحاسوبية",
    acceptance: 60,
    hours: 135,
    regular: 70,
    parallel: "-",
    image: "imags/universities/isu.png"
  },
  {
    university: "جامعة الإسراء",
    college: "كلية تكنولوجيا المعلومات",
    major: "أمن المعلومات والفضاء الإلكتروني",
    acceptance: 60,
    hours: 135,
    regular: 80,
    parallel: "-",
    image: "imags/universities/isu.png"
  },
  {
    university: "جامعة الإسراء",
    college: "كلية التمريض",
    major: "التمريض",
    acceptance: 70,
    hours: 132,
    regular: 90,
    parallel: "-",
    image: "imags/universities/isu.png"
  },
  {
    university: "جامعة الإسراء",
    college: "كلية العلوم",
    major: "الكيمياء",
    acceptance: 60,
    hours: 135,
    regular: 80,
    parallel: "-",
    image: "imags/universities/isu.png"
  },
  {
    university: "جامعة الإسراء",
    college: "كلية العلوم",
    major: "الفيزياء",
    acceptance: 60,
    hours: 135,
    regular: 60,
    parallel: "-",
    image: "imags/universities/isu.png"
  },
  {
    university: "جامعة الإسراء",
    college: "كلية العلوم",
    major: "الرياضيات",
    acceptance: 60,
    hours: 135,
    regular: 70,
    parallel: "-",
    image: "imags/universities/isu.png"
  },
  {
    university: "جامعة الإسراء",
    college: "كلية العلوم الطبية المساندة",
    major: "العلاج الطبيعي",
    acceptance: 70,
    hours: 132,
    regular: 125,
    parallel: "-",
    image: "imags/universities/isu.png"
  },
  {
    university: "جامعة الإسراء",
    college: "كلية العلوم الطبية المساندة",
    major: "تكنولوجيا التصوير الإشعاعي",
    acceptance: 70,
    hours: 136,
    regular: 150,
    parallel: "-",
    image: "imags/universities/isu.png"
  },
  {
    university: "جامعة الإسراء",
    college: "كلية العلوم الطبية المساندة",
    major: "تكنولوجيا التخدير والإنعاش",
    acceptance: 70,
    hours: 136,
    regular: 150,
    parallel: "-",
    image: "imags/universities/isu.png"
  },
  {
    university: "جامعة الإسراء",
    college: "كلية العلوم الطبية المساندة",
    major: "المعالجة التنفسية",
    acceptance: 70,
    hours: 136,
    regular: 150,
    parallel: "-",
    image: "imags/universities/isu.png"
  },
  {
    university: "جامعة الإسراء",
    college: "كلية الهندسة",
    major: "هندسة العمارة",
    acceptance: 80,
    hours: 169,
    regular: 125,
    parallel: "-",
    image: "imags/universities/isu.png"
  },
  {
    university: "جامعة الإسراء",
    college: "كلية الهندسة",
    major: "الهندسة المدنية",
    acceptance: 80,
    hours: 163,
    regular: 125,
    parallel: "-",
    image: "imags/universities/isu.png"
  },
  {
    university: "جامعة الإسراء",
    college: "كلية الهندسة",
    major: "هندسة الاتصالات والإلكترونيات",
    acceptance: 80,
    hours: 163,
    regular: 100,
    parallel: "-",
    image: "imags/universities/isu.png"
  },
  {
    university: "جامعة الإسراء",
    college: "كلية الهندسة",
    major: "هندسة الطاقة المتجددة",
    acceptance: 80,
    hours: 163,
    regular: 100,
    parallel: "-",
    image: "imags/universities/isu.png"
  },
  {
    university: "جامعة الإسراء",
    college: "كلية العلوم التربوية",
    major: "معلم صف",
    acceptance: 60,
    hours: 135,
    regular: 60,
    parallel: "-",
    image: "imags/universities/isu.png"
  },
  {
    university: "جامعة الإسراء",
    college: "كلية العلوم التربوية",
    major: "تربية طفل",
    acceptance: 60,
    hours: 135,
    regular: 50,
    parallel: "-",
    image: "imags/universities/isu.png"
  },
  {
    university: "جامعة الإسراء",
    college: "كلية الصيدلة",
    major: "الصيدلة",
    acceptance: 80,
    hours: 160,
    regular: 125,
    parallel: "-",
    image: "imags/universities/isu.png"
  },

  // ================================================================
  // 15. جامعة فيلادلفيا
  // ================================================================
  {
    university: "جامعة فيلادلفيا",
    college: "كلية الأعمال",
    major: "المحاسبة",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/philadelphia.png"
  },
  {
    university: "جامعة فيلادلفيا",
    college: "كلية الأعمال",
    major: "إدارة الأعمال",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/philadelphia.png"
  },
  {
    university: "جامعة فيلادلفيا",
    college: "كلية الأعمال",
    major: "المصرفية والتمويل",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/philadelphia.png"
  },
  {
    university: "جامعة فيلادلفيا",
    college: "كلية الأعمال",
    major: "التسويق",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/philadelphia.png"
  },
  {
    university: "جامعة فيلادلفيا",
    college: "كلية الأعمال",
    major: "إدارة الفنادق",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/philadelphia.png"
  },
  {
    university: "جامعة فيلادلفيا",
    college: "كلية الأعمال",
    major: "إدارة السياحة",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/philadelphia.png"
  },
  {
    university: "جامعة فيلادلفيا",
    college: "كلية تكنولوجيا المعلومات",
    major: "علم الحاسوب",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/philadelphia.png"
  },
  {
    university: "جامعة فيلادلفيا",
    college: "كلية تكنولوجيا المعلومات",
    major: "هندسة البرمجيات",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/philadelphia.png"
  },
  {
    university: "جامعة فيلادلفيا",
    college: "كلية تكنولوجيا المعلومات",
    major: "الذكاء الاصطناعي",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/philadelphia.png"
  },
  {
    university: "جامعة فيلادلفيا",
    college: "كلية تكنولوجيا المعلومات",
    major: "نظم المعلومات الإدارية",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/philadelphia.png"
  },
  {
    university: "جامعة فيلادلفيا",
    college: "كلية الصيدلة",
    major: "الصيدلة",
    acceptance: 65,
    hours: 162,
    regular: 45,
    parallel: "-",
    image: "imags/universities/philadelphia.png"
  },
  {
    university: "جامعة فيلادلفيا",
    college: "كلية الصيدلة",
    major: "التكنولوجيا الحيوية والهندسة الوراثية",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/philadelphia.png"
  },
  {
    university: "جامعة فيلادلفیا",
    college: "كلية العلوم الطبية المساندة",
    major: "التغذية والحميات",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/philadelphia.png"
  },
  {
    university: "جامعة فيلادلفيا",
    college: "كلية الآداب والعلوم التربوية",
    major: "اللغة الإنجليزية وآدابها",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/philadelphia.png"
  },
  {
    university: "جامعة فيلادلفيا",
    college: "كلية الآداب والعلوم التربوية",
    major: "علم النفس الإرشادي",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/philadelphia.png"
  },
  {
    university: "جامعة فيلادلفيا",
    college: "كلية الآداب والعلوم التربوية",
    major: "الدراسات التنموية",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/philadelphia.png"
  },
  {
    university: "جامعة فيلادلفيا",
    college: "كلية الحقوق",
    major: "القانون",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/philadelphia.png"
  },
  {
    university: "جامعة فيلادلفيا",
    college: "كلية الهندسة والتكنولوجيا",
    major: "الهندسة المدنية",
    acceptance: 65,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/philadelphia.png"
  },
  {
    university: "جامعة فيلادلفيا",
    college: "كلية الهندسة والتكنولوجيا",
    major: "الهندسة الميكانيكية",
    acceptance: 65,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/philadelphia.png"
  },
  {
    university: "جامعة فيلادلفيا",
    college: "كلية الهندسة والتكنولوجيا",
    major: "الهندسة الكهربائية",
    acceptance: 65,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/philadelphia.png"
  },
  {
    university: "جامعة فيلادلفيا",
    college: "كلية الهندسة والتكنولوجيا",
    major: "هندسة الاتصالات والإلكترونيات",
    acceptance: 65,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/philadelphia.png"
  },
  {
    university: "جامعة فيلادلفيا",
    college: "كلية الهندسة والتكنولوجيا",
    major: "هندسة الحاسوب",
    acceptance: 65,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/philadelphia.png"
  },
  {
    university: "جامعة فيلادلفيا",
    college: "كلية الهندسة والتكنولوجيا",
    major: "هندسة الميكاترونكس",
    acceptance: 65,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/philadelphia.png"
  },
  {
    university: "جامعة فيلادلفيا",
    college: "كلية الهندسة والتكنولوجيا",
    major: "هندسة الطاقة المتجددة",
    acceptance: 65,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/philadelphia.png"
  },
  {
    university: "جامعة فيلادلفيا",
    college: "كلية التمريض",
    major: "التمريض",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/philadelphia.png"
  },
  {
    university: "جامعة فيلادلفيا",
    college: "كلية العمارة والتصميم",
    major: "هندسة العمارة",
    acceptance: 65,
    hours: 169,
    regular: 45,
    parallel: "-",
    image: "imags/universities/philadelphia.png"
  },
  {
    university: "جامعة فيلادلفیا",
    college: "كلية العمارة والتصميم",
    major: "التصميم الداخلي",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/philadelphia.png"
  },
  {
    university: "جامعة فيلادلفيا",
    college: "كلية العمارة والتصميم",
    major: "التصميم الجرافيكي",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/philadelphia.png"
  },
  {
    university: "جامعة فيلادلفیا",
    college: "كلية العمارة والتصميم",
    major: "الوسائط المتعددة",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/philadelphia.png"
  },
  {
    university: "جامعة فيلادلفيا",
    college: "كلية العلوم",
    major: "الرياضيات",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/philadelphia.png"
  },

  // ================================================================
  // 16. جامعة جدارا
  // ================================================================
  {
    university: "جامعة جدارا",
    college: "كلية الآداب والعلوم",
    major: "اللغة العربية وآدابها",
    acceptance: 60,
    hours: 132,
    regular: 20,
    parallel: "-",
    image: "imags/universities/jadara.png"
  },
  {
    university: "جامعة جدارا",
    college: "كلية الآداب والعلوم",
    major: "اللغة الإنجليزية وآدابها",
    acceptance: 60,
    hours: 132,
    regular: 30,
    parallel: "-",
    image: "imags/universities/jadara.png"
  },
  {
    university: "جامعة جدارا",
    college: "كلية الآداب والعلوم",
    major: "اللغة الإنجليزية / ترجمة",
    acceptance: 60,
    hours: 132,
    regular: 30,
    parallel: "-",
    image: "imags/universities/jadara.png"
  },
  {
    university: "جامعة جدارا",
    college: "كلية الآداب والعلوم",
    major: "التاريخ",
    acceptance: 60,
    hours: 132,
    regular: 15,
    parallel: "-",
    image: "imags/universities/jadara.png"
  },
  {
    university: "جامعة جدارا",
    college: "كلية الآداب والعلوم",
    major: "الرياضيات",
    acceptance: 60,
    hours: 132,
    regular: 28,
    parallel: "-",
    image: "imags/universities/jadara.png"
  },
  {
    university: "جامعة جدارا",
    college: "كلية الآداب والعلوم",
    major: "الكيمياء",
    acceptance: 60,
    hours: 132,
    regular: 35,
    parallel: "-",
    image: "imags/universities/jadara.png"
  },
  {
    university: "جامعة جدارا",
    college: "كلية الآداب والعلوم",
    major: "الكيمياء والتصنيع الدوائي (قيد الاستحداث)",
    acceptance: 60,
    hours: 132,
    regular: 84,
    parallel: "-",
    image: "imags/universities/jadara.png"
  },
  {
    university: "جامعة جدارا",
    college: "كلية العلوم التربوية",
    major: "التربية الخاصة",
    acceptance: 60,
    hours: 132,
    regular: 24,
    parallel: "-",
    image: "imags/universities/jadara.png"
  },
  {
    university: "جامعة جدارا",
    college: "كلية العلوم التربوية",
    major: "رياض الأطفال",
    acceptance: 60,
    hours: 132,
    regular: 20,
    parallel: "-",
    image: "imags/universities/jadara.png"
  },
  {
    university: "جامعة جدارا",
    college: "كلية العلوم التربوية",
    major: "الإرشاد النفسي والتربوي",
    acceptance: 60,
    hours: 132,
    regular: 20,
    parallel: "-",
    image: "imags/universities/jadara.png"
  },
  {
    university: "جامعة جدارا",
    college: "كلية العلوم التربوية",
    major: "الإصلاح والإرشاد الأسري",
    acceptance: 60,
    hours: 132,
    regular: 20,
    parallel: "-",
    image: "imags/universities/jadara.png"
  },
  {
    university: "جامعة جدارا",
    college: "كلية العلوم التربوية",
    major: "التربية المهنية",
    acceptance: 60,
    hours: 132,
    regular: 22.5,
    parallel: "-",
    image: "imags/universities/jadara.png"
  },
  {
    university: "جامعة جدارا",
    college: "كلية العلوم التربوية",
    major: "التربية الرياضية",
    acceptance: 60,
    hours: 132,
    regular: 30,
    parallel: "-",
    image: "imags/universities/jadara.png"
  },
  {
    university: "جامعة جدارا",
    college: "كلية العلوم التربوية",
    major: "التدريب الرياضي",
    acceptance: 60,
    hours: 132,
    regular: 30,
    parallel: "-",
    image: "imags/universities/jadara.png"
  },
  {
    university: "جامعة جدارا",
    college: "كلية الأعمال",
    major: "المحاسبة",
    acceptance: 60,
    hours: 132,
    regular: 25,
    parallel: "-",
    image: "imags/universities/jadara.png"
  },
  {
    university: "جامعة جدارا",
    college: "كلية الأعمال",
    major: "إدارة الأعمال",
    acceptance: 60,
    hours: 132,
    regular: 30,
    parallel: "-",
    image: "imags/universities/jadara.png"
  },
  {
    university: "جامعة جدارا",
    college: "كلية الأعمال",
    major: "ذكاء الأعمال",
    acceptance: 60,
    hours: 132,
    regular: 30,
    parallel: "-",
    image: "imags/universities/jadara.png"
  },
  {
    university: "جامعة جدارا",
    college: "كلية الأعمال",
    major: "التكنولوجيا المالية",
    acceptance: 60,
    hours: 132,
    regular: 26,
    parallel: "-",
    image: "imags/universities/jadara.png"
  },
  {
    university: "جامعة جدارا",
    college: "كلية الأعمال",
    major: "التسويق الرقمي",
    acceptance: 60,
    hours: 132,
    regular: 30,
    parallel: "-",
    image: "imags/universities/jadara.png"
  },
  {
    university: "جامعة جدارا",
    college: "كلية الأعمال",
    major: "تكنولوجيا معلومات الأعمال",
    acceptance: 60,
    hours: 132,
    regular: 37.5,
    parallel: "-",
    image: "imags/universities/jadara.png"
  },
  {
    university: "جامعة جدارا",
    college: "كلية الأعمال",
    major: "إدارة الموارد البشرية",
    acceptance: 60,
    hours: 132,
    regular: 35,
    parallel: "-",
    image: "imags/universities/jadara.png"
  },
  {
    university: "جامعة جدارا",
    college: "كلية الأعمال",
    major: "العلوم الجمركية والضريبية",
    acceptance: 60,
    hours: 132,
    regular: 48,
    parallel: "-",
    image: "imags/universities/jadara.png"
  },
  {
    university: "جامعة جدارا",
    college: "كلية الحقوق",
    major: "القانون",
    acceptance: 60,
    hours: 132,
    regular: 28,
    parallel: "-",
    image: "imags/universities/jadara.png"
  },
  {
    university: "جامعة جدارا",
    college: "كلية الشريعة والدراسات الإسلامية",
    major: "الشريعة والدراسات الإسلامية",
    acceptance: 60,
    hours: 132,
    regular: 10,
    parallel: "-",
    image: "imags/universities/jadara.png"
  },
  {
    university: "جامعة جدارا",
    college: "كلية العلوم السياسية",
    major: "العلوم السياسية",
    acceptance: 60,
    hours: 132,
    regular: 14,
    parallel: "-",
    image: "imags/universities/jadara.png"
  },
  {
    university: "جامعة جدارا",
    college: "كلية تكنولوجيا المعلومات",
    major: "علم الحاسوب",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/jadara.png"
  },
  {
    university: "جامعة جدارا",
    college: "كلية تكنولوجيا المعلومات",
    major: "إنترنت الأشياء",
    acceptance: 60,
    hours: 132,
    regular: 33,
    parallel: "-",
    image: "imags/universities/jadara.png"
  },
  {
    university: "جامعة جدارا",
    college: "كلية تكنولوجيا المعلومات",
    major: "شبكات الحاسوب والأمن السيبراني",
    acceptance: 60,
    hours: 132,
    regular: 51,
    parallel: "-",
    image: "imags/universities/jadara.png"
  },
  {
    university: "جامعة جدارا",
    college: "كلية تكنولوجيا المعلومات",
    major: "هندسة البرمجيات",
    acceptance: 60,
    hours: 132,
    regular: 54,
    parallel: "-",
    image: "imags/universities/jadara.png"
  },
  {
    university: "جامعة جدارا",
    college: "كلية تكنولوجيا المعلومات",
    major: "الروبوتات والذكاء الاصطناعي",
    acceptance: 60,
    hours: 132,
    regular: 51,
    parallel: "-",
    image: "imags/universities/jadara.png"
  },
  {
    university: "جامعة جدارا",
    college: "كلية الهندسة",
    major: "الهندسة المدنية",
    acceptance: 65,
    hours: 132,
    regular: 48,
    parallel: "-",
    image: "imags/universities/jadara.png"
  },
  {
    university: "جامعة جدارا",
    college: "كلية الهندسة",
    major: "هندسة الاتصالات والحاسوب",
    acceptance: 65,
    hours: 132,
    regular: 48,
    parallel: "-",
    image: "imags/universities/jadara.png"
  },
  {
    university: "جامعة جدارا",
    college: "كلية الهندسة",
    major: "هندسة الطاقة المتجددة",
    acceptance: 65,
    hours: 132,
    regular: 49.5,
    parallel: "-",
    image: "imags/universities/jadara.png"
  },
  {
    university: "جامعة جدارا",
    college: "كلية الهندسة",
    major: "صيانة الطائرات (قيد الاستحداث)",
    acceptance: 65,
    hours: 132,
    regular: 72,
    parallel: "-",
    image: "imags/universities/jadara.png"
  },
  {
    university: "جامعة جدارا",
    college: "كلية الصيدلة",
    major: "الصيدلة",
    acceptance: 65,
    hours: 162,
    regular: 81,
    parallel: "-",
    image: "imags/universities/jadara.png"
  },
  {
    university: "جامعة جدارا",
    college: "كلية الصيدلة",
    major: "دكتور صيدلة",
    acceptance: 65,
    hours: 216,
    regular: 120,
    parallel: "-",
    image: "imags/universities/jadara.png"
  },
  {
    university: "جامعة جدارا",
    college: "كلية العلوم الطبية المساندة",
    major: "العلوم الطبية المخبرية",
    acceptance: 60,
    hours: 132,
    regular: 60,
    parallel: "-",
    image: "imags/universities/jadara.png"
  },
  {
    university: "جامعة جدارا",
    college: "كلية العلوم الطبية المساندة",
    major: "المعالجة التنفسية",
    acceptance: 60,
    hours: 132,
    regular: 75,
    parallel: "-",
    image: "imags/universities/jadara.png"
  },
  {
    university: "جامعة جدارا",
    college: "كلية العلوم الطبية المساندة",
    major: "الإسعاف والطوارئ (قيد الاستحداث)",
    acceptance: 60,
    hours: 132,
    regular: 48,
    parallel: "-",
    image: "imags/universities/jadara.png"
  },
  {
    university: "جامعة جدارا",
    college: "كلية الإعلام والفنون",
    major: "التصميم الجرافيكي",
    acceptance: 60,
    hours: 132,
    regular: 30,
    parallel: "-",
    image: "imags/universities/jadara.png"
  },
  {
    university: "جامعة جدارا",
    college: "كلية الإعلام والفنون",
    major: "التصميم الداخلي",
    acceptance: 60,
    hours: 132,
    regular: 39,
    parallel: "-",
    image: "imags/universities/jadara.png"
  },
  {
    university: "جامعة جدارا",
    college: "كلية الإعلام والفنون",
    major: "الإعلام وتكنولوجيا الاتصال",
    acceptance: 60,
    hours: 132,
    regular: 30,
    parallel: "-",
    image: "imags/universities/jadara.png"
  },
  {
    university: "جامعة جدارا",
    college: "كلية الإعلام والفنون",
    major: "الإذاعة والتلفزيون",
    acceptance: 60,
    hours: 132,
    regular: 30,
    parallel: "-",
    image: "imags/universities/jadara.png"
  },

  // ================================================================
  // 17. جامعة جرش الخاصة
  // ================================================================
  {
    university: "جامعة جرش الخاصة",
    college: "كلية الآداب",
    major: "اللغة العربية وآدابها",
    acceptance: 60,
    hours: 132,
    regular: 32,
    parallel: "-",
    image: "imags/universities/jpu.png"
  },
  {
    university: "جامعة جرش الخاصة",
    college: "كلية الآداب",
    major: "اللغة الإنجليزية وآدابها",
    acceptance: 60,
    hours: 132,
    regular: 32,
    parallel: "-",
    image: "imags/universities/jpu.png"
  },
  {
    university: "جامعة جرش الخاصة",
    college: "كلية الآداب",
    major: "الترجمة",
    acceptance: 60,
    hours: 132,
    regular: 32,
    parallel: "-",
    image: "imags/universities/jpu.png"
  },
  {
    university: "جامعة جرش الخاصة",
    college: "كلية الآداب",
    major: "العلوم الاجتماعية والإنسانية",
    acceptance: 60,
    hours: 132,
    regular: 32,
    parallel: "-",
    image: "imags/universities/jpu.png"
  },
  {
    university: "جامعة جرش الخاصة",
    college: "كلية العلوم التربوية",
    major: "معلم صف",
    acceptance: 60,
    hours: 132,
    regular: 40,
    parallel: "-",
    image: "imags/universities/jpu.png"
  },
  {
    university: "جامعة جرش الخاصة",
    college: "كلية العلوم التربوية",
    major: "رياض الأطفال",
    acceptance: 60,
    hours: 132,
    regular: 40,
    parallel: "-",
    image: "imags/universities/jpu.png"
  },
  {
    university: "جامعة جرش الخاصة",
    college: "كلية العلوم التربوية",
    major: "الإدارة العامة",
    acceptance: 60,
    hours: 132,
    regular: 40,
    parallel: "-",
    image: "imags/universities/jpu.png"
  },
  {
    university: "جامعة جرش الخاصة",
    college: "كلية العلوم التربوية",
    major: "المناهج العامة",
    acceptance: 60,
    hours: 132,
    regular: 40,
    parallel: "-",
    image: "imags/universities/jpu.png"
  },
  {
    university: "جامعة جرش الخاصة",
    college: "كلية الأعمال",
    major: "إدارة الأعمال",
    acceptance: 60,
    hours: 132,
    regular: 27,
    parallel: "-",
    image: "imags/universities/jpu.png"
  },
  {
    university: "جامعة جرش الخاصة",
    college: "كلية الأعمال",
    major: "المحاسبة",
    acceptance: 60,
    hours: 132,
    regular: 27,
    parallel: "-",
    image: "imags/universities/jpu.png"
  },
  {
    university: "جامعة جرش الخاصة",
    college: "كلية الأعمال",
    major: "التمويل والمصرفية",
    acceptance: 60,
    hours: 132,
    regular: 27,
    parallel: "-",
    image: "imags/universities/jpu.png"
  },
  {
    university: "جامعة جرش الخاصة",
    college: "كلية الأعمال",
    major: "إدارة الموارد البشرية",
    acceptance: 60,
    hours: 132,
    regular: 27,
    parallel: "-",
    image: "imags/universities/jpu.png"
  },
  {
    university: "جامعة جرش الخاصة",
    college: "كلية الأعمال",
    major: "إدارة الخدمات اللوجستية",
    acceptance: 60,
    hours: 132,
    regular: 27,
    parallel: "-",
    image: "imags/universities/jpu.png"
  },
  {
    university: "جامعة جرش الخاصة",
    college: "كلية الحقوق",
    major: "القانون العام",
    acceptance: 60,
    hours: 132,
    regular: 28,
    parallel: "-",
    image: "imags/universities/jpu.png"
  },
  {
    university: "جامعة جرش الخاصة",
    college: "كلية الحقوق",
    major: "القانون الخاص",
    acceptance: 60,
    hours: 132,
    regular: 28,
    parallel: "-",
    image: "imags/universities/jpu.png"
  },
  {
    university: "جامعة جرش الخاصة",
    college: "كلية الشريعة",
    major: "الفقه وأصوله",
    acceptance: 60,
    hours: 132,
    regular: 20,
    parallel: "-",
    image: "imags/universities/jpu.png"
  },
  {
    university: "جامعة جرش الخاصة",
    college: "كلية الشريعة",
    major: "الفقه المقارن",
    acceptance: 60,
    hours: 132,
    regular: 20,
    parallel: "-",
    image: "imags/universities/jpu.png"
  },
  {
    university: "جامعة جرش الخاصة",
    college: "كلية العلوم",
    major: "الرياضيات",
    acceptance: 60,
    hours: 132,
    regular: 30,
    parallel: "-",
    image: "imags/universities/jpu.png"
  },
  {
    university: "جامعة جرش الخاصة",
    college: "كلية العلوم",
    major: "الكيمياء",
    acceptance: 60,
    hours: 132,
    regular: 30,
    parallel: "-",
    image: "imags/universities/jpu.png"
  },
  {
    university: "جامعة جرش الخاصة",
    college: "كلية العلوم",
    major: "الفيزياء",
    acceptance: 60,
    hours: 132,
    regular: 30,
    parallel: "-",
    image: "imags/universities/jpu.png"
  },
  {
    university: "جامعة جرش الخاصة",
    college: "كلية العلوم",
    major: "العلوم الحياتية",
    acceptance: 60,
    hours: 132,
    regular: 42,
    parallel: "-",
    image: "imags/universities/jpu.png"
  },
  {
    university: "جامعة جرش الخاصة",
    college: "كلية الهندسة",
    major: "الهندسة المدنية",
    acceptance: 65,
    hours: 160,
    regular: 48,
    parallel: "-",
    image: "imags/universities/jpu.png"
  },
  {
    university: "جامعة جرش الخاصة",
    college: "كلية الهندسة",
    major: "الهندسة المعمارية",
    acceptance: 65,
    hours: 132,
    regular: 48,
    parallel: "-",
    image: "imags/universities/jpu.png"
  },
  {
    university: "جامعة جرش الخاصة",
    college: "كلية الهندسة",
    major: "هندسة الإلكترونيات والاتصالات",
    acceptance: 65,
    hours: 132,
    regular: 48,
    parallel: "-",
    image: "imags/universities/jpu.png"
  },
  {
    university: "جامعة جرش الخاصة",
    college: "كلية تكنولوجيا المعلومات",
    major: "علم الحاسوب",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/jpu.png"
  },
  {
    university: "جامعة جرش الخاصة",
    college: "كلية تكنولوجيا المعلومات",
    major: "شبكات الحاسوب",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/jpu.png"
  },
  {
    university: "جامعة جرش الخاصة",
    college: "كلية التمريض",
    major: "التمريض",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/jpu.png"
  },
  {
    university: "جامعة جرش الخاصة",
    college: "كلية الصيدلة",
    major: "الصيدلة",
    acceptance: 65,
    hours: 162,
    regular: 81,
    parallel: "-",
    image: "imags/universities/jpu.png"
  },
  {
    university: "جامعة جرش الخاصة",
    college: "كلية الزراعة",
    major: "الإنتاج النباتي",
    acceptance: 60,
    hours: 132,
    regular: 30,
    parallel: "-",
    image: "imags/universities/jpu.png"
  },
  {
    university: "جامعة جرش الخاصة",
    college: "كلية الزراعة",
    major: "الإنتاج الحيواني",
    acceptance: 60,
    hours: 132,
    regular: 30,
    parallel: "-",
    image: "imags/universities/jpu.png"
  },
  {
    university: "جامعة جرش الخاصة",
    college: "كلية الزراعة",
    major: "الاقتصاد الزراعي",
    acceptance: 60,
    hours: 132,
    regular: 30,
    parallel: "-",
    image: "imags/universities/jpu.png"
  },
  {
    university: "جامعة جرش الخاصة",
    college: "كلية الزراعة",
    major: "التغذية والتصنيع الغذائي",
    acceptance: 60,
    hours: 132,
    regular: 30,
    parallel: "-",
    image: "imags/universities/jpu.png"
  },
  {
    university: "جامعة جرش الخاصة",
    college: "كلية العلوم الطبية المساندة",
    major: "العلاج الطبيعي",
    acceptance: 60,
    hours: 132,
    regular: 60,
    parallel: "-",
    image: "imags/universities/jpu.png"
  },

  // ================================================================
  // 18. جامعة البترا
  // ================================================================
  {
    university: "جامعة البترا",
    college: "كلية طب الأسنان",
    major: "دكتور في طب الأسنان",
    acceptance: 90,
    hours: 214,
    regular: 250,
    parallel: "-",
    image: "imags/universities/petra.png"
  },
  {
    university: "جامعة البترا",
    college: "كلية طب الأسنان",
    major: "تكنولوجيا صناعة الأسنان",
    acceptance: 70,
    hours: 132,
    regular: 90,
    parallel: "-",
    image: "imags/universities/petra.png"
  },
  {
    university: "جامعة البترا",
    college: "كلية الصيدلة والعلوم الطبية",
    major: "الصيدلة",
    acceptance: 80,
    hours: 166,
    regular: 120,
    parallel: "-",
    image: "imags/universities/petra.png"
  },
  {
    university: "جامعة البترا",
    college: "كلية الصيدلة والعلوم الطبية",
    major: "التغذية السريرية والحميات",
    acceptance: 70,
    hours: 136,
    regular: 60,
    parallel: "-",
    image: "imags/universities/petra.png"
  },
  {
    university: "جامعة البترا",
    college: "كلية الصيدلة والعلوم الطبية",
    major: "التحاليل الطبية",
    acceptance: 70,
    hours: 136,
    regular: 60,
    parallel: "-",
    image: "imags/universities/petra.png"
  },
  {
    university: "جامعة البترا",
    college: "كلية الهندسة",
    major: "الهندسة المدنية",
    acceptance: 80,
    hours: 160,
    regular: 60,
    parallel: "-",
    image: "imags/universities/petra.png"
  },
  {
    university: "جامعة البترا",
    college: "كلية العمارة والتصميم",
    major: "هندسة العمارة",
    acceptance: 80,
    hours: 169,
    regular: 90,
    parallel: "-",
    image: "imags/universities/petra.png"
  },
  {
    university: "جامعة البترا",
    college: "كلية العمارة والتصميم",
    major: "التصميم الداخلي",
    acceptance: 60,
    hours: 143,
    regular: 90,
    parallel: "-",
    image: "imags/universities/petra.png"
  },
  {
    university: "جامعة البترا",
    college: "كلية العمارة والتصميم",
    major: "التصميم الجرافيكي",
    acceptance: 60,
    hours: 137,
    regular: 90,
    parallel: "-",
    image: "imags/universities/petra.png"
  },
  {
    university: "جامعة البترا",
    college: "كلية العمارة والتصميم",
    major: "التحريك والوسائط المتعددة",
    acceptance: 60,
    hours: 137,
    regular: 90,
    parallel: "-",
    image: "imags/universities/petra.png"
  },
  {
    university: "جامعة البترا",
    college: "كلية العمارة والتصميم",
    major: "تكنولوجيا تصميم الأفلام الرقمية",
    acceptance: 60,
    hours: 140,
    regular: 75,
    parallel: "-",
    image: "imags/universities/petra.png"
  },
  {
    university: "جامعة البترا",
    college: "كلية تكنولوجيا المعلومات",
    major: "هندسة البرمجيات",
    acceptance: 60,
    hours: 133,
    regular: 80,
    parallel: "-",
    image: "imags/universities/petra.png"
  },
  {
    university: "جامعة البترا",
    college: "كلية تكنولوجيا المعلومات",
    major: "علم الحاسوب",
    acceptance: 60,
    hours: 134,
    regular: 80,
    parallel: "-",
    image: "imags/universities/petra.png"
  },
  {
    university: "جامعة البترا",
    college: "كلية تكنولوجيا المعلومات",
    major: "علم البيانات والذكاء الاصطناعي",
    acceptance: 60,
    hours: 133,
    regular: 70,
    parallel: "-",
    image: "imags/universities/petra.png"
  },
  {
    university: "جامعة البترا",
    college: "كلية تكنولوجيا المعلومات",
    major: "أمن المعلومات",
    acceptance: 60,
    hours: 133,
    regular: 80,
    parallel: "-",
    image: "imags/universities/petra.png"
  },
  {
    university: "جامعة البترا",
    college: "كلية تكنولوجيا المعلومات",
    major: "الواقع الافتراضي والمعزز",
    acceptance: 60,
    hours: 133,
    regular: 80,
    parallel: "-",
    image: "imags/universities/petra.png"
  },
  {
    university: "جامعة البترا",
    college: "كلية العلوم الإدارية والمالية",
    major: "إدارة الأعمال",
    acceptance: 60,
    hours: 132,
    regular: 80,
    parallel: "-",
    image: "imags/universities/petra.png"
  },
  {
    university: "جامعة البترا",
    college: "كلية العلوم الإدارية والمالية",
    major: "المحاسبة",
    acceptance: 60,
    hours: 132,
    regular: 85,
    parallel: "-",
    image: "imags/universities/petra.png"
  },
  {
    university: "جامعة البترا",
    college: "كلية العلوم الإدارية والمالية",
    major: "التمويل والمصرفية",
    acceptance: 60,
    hours: 132,
    regular: 80,
    parallel: "-",
    image: "imags/universities/petra.png"
  },
  {
    university: "جامعة البترا",
    college: "كلية العلوم الإدارية والمالية",
    major: "التسويق الرقمي",
    acceptance: 60,
    hours: 132,
    regular: 80,
    parallel: "-",
    image: "imags/universities/petra.png"
  },
  {
    university: "جامعة البترا",
    college: "كلية العلوم الإدارية والمالية",
    major: "الأعمال والتجارة الإلكترونية",
    acceptance: 60,
    hours: 132,
    regular: 80,
    parallel: "-",
    image: "imags/universities/petra.png"
  },
  {
    university: "جامعة البترا",
    college: "كلية العلوم الإدارية والمالية",
    major: "ذكاء الأعمال وتحليل البيانات",
    acceptance: 60,
    hours: 132,
    regular: 70,
    parallel: "-",
    image: "imags/universities/petra.png"
  },
  {
    university: "جامعة البترا",
    college: "كلية العلوم الإدارية والمالية",
    major: "التكنولوجيا المالية",
    acceptance: 60,
    hours: 132,
    regular: 70,
    parallel: "-",
    image: "imags/universities/petra.png"
  },
  {
    university: "جامعة البترا",
    college: "كلية العلوم الإدارية والمالية",
    major: "إدارة سلاسل التوريد والعلوم اللوجستية",
    acceptance: 60,
    hours: 132,
    regular: 80,
    parallel: "-",
    image: "imags/universities/petra.png"
  },
  {
    university: "جامعة البترا",
    college: "كلية الآداب والعلوم",
    major: "اللغة العربية وآدابها",
    acceptance: 60,
    hours: 135,
    regular: 30,
    parallel: "-",
    image: "imags/universities/petra.png"
  },
  {
    university: "جامعة البترا",
    college: "كلية الآداب والعلوم",
    major: "اللغة الإنجليزية وآدابها",
    acceptance: 60,
    hours: 135,
    regular: 60,
    parallel: "-",
    image: "imags/universities/petra.png"
  },
  {
    university: "جامعة البترا",
    college: "كلية الآداب والعلوم",
    major: "اللغة الإنجليزية / ترجمة",
    acceptance: 60,
    hours: 135,
    regular: 60,
    parallel: "-",
    image: "imags/universities/petra.png"
  },
  {
    university: "جامعة البترا",
    college: "كلية الآداب والعلوم",
    major: "اللغة الفرنسية والإنجليزية وآدابها",
    acceptance: 60,
    hours: 135,
    regular: 60,
    parallel: "-",
    image: "imags/universities/petra.png"
  },
  {
    university: "جامعة البترا",
    college: "كلية الآداب والعلوم",
    major: "معلم صف",
    acceptance: 60,
    hours: 135,
    regular: 40,
    parallel: "-",
    image: "imags/universities/petra.png"
  },
  {
    university: "جامعة البترا",
    college: "كلية الآداب والعلوم",
    major: "تربية طفل",
    acceptance: 60,
    hours: 135,
    regular: 40,
    parallel: "-",
    image: "imags/universities/petra.png"
  },
  {
    university: "جامعة البترا",
    college: "كلية الآداب والعلوم",
    major: "الكيمياء",
    acceptance: 60,
    hours: 132,
    regular: 55,
    parallel: "-",
    image: "imags/universities/petra.png"
  },
  {
    university: "جامعة البترا",
    college: "كلية الآداب والعلوم",
    major: "الرياضيات",
    acceptance: 60,
    hours: 132,
    regular: 55,
    parallel: "-",
    image: "imags/universities/petra.png"
  },
  {
    university: "جامعة البترا",
    college: "كلية الآداب والعلوم",
    major: "التربية البدنية",
    acceptance: 60,
    hours: 135,
    regular: 50,
    parallel: "-",
    image: "imags/universities/petra.png"
  },
  {
    university: "جامعة البترا",
    college: "كلية الحقوق",
    major: "القانون",
    acceptance: 65,
    hours: 141,
    regular: 60,
    parallel: "-",
    image: "imags/universities/petra.png"
  },
  {
    university: "جامعة البترا",
    college: "كلية الإعلام",
    major: "الصحافة والإعلام الرقمي",
    acceptance: 60,
    hours: 135,
    regular: 70,
    parallel: "-",
    image: "imags/universities/petra.png"
  },
  {
    university: "جامعة البترا",
    college: "كلية الإعلام",
    major: "العلاقات العامة والترويج الرقمي",
    acceptance: 60,
    hours: 135,
    regular: 70,
    parallel: "-",
    image: "imags/universities/petra.png"
  },
  {
    university: "جامعة البترا",
    college: "كلية الإعلام",
    major: "الإذاعة والتلفزيون",
    acceptance: 60,
    hours: 135,
    regular: 70,
    parallel: "-",
    image: "imags/universities/petra.png"
  },

  // ================================================================
  // 19. جامعة الشرق الأوسط
  // ================================================================
  {
    university: "جامعة الشرق الأوسط",
    college: "كلية الصيدلة",
    major: "الصيدلة",
    acceptance: 80,
    hours: 165,
    regular: 130,
    parallel: "-",
    image: "imags/universities/meu.png"
  },
  {
    university: "جامعة الشرق الأوسط",
    college: "كلية الهندسة",
    major: "الهندسة المدنية",
    acceptance: 80,
    hours: 160,
    regular: 85,
    parallel: "-",
    image: "imags/universities/meu.png"
  },
  {
    university: "جامعة الشرق الأوسط",
    college: "كلية الهندسة",
    major: "هندسة العمارة",
    acceptance: 80,
    hours: 165,
    regular: 125,
    parallel: "-",
    image: "imags/universities/meu.png"
  },
  {
    university: "جامعة الشرق الأوسط",
    college: "كلية الهندسة",
    major: "هندسة الطاقة المتجددة",
    acceptance: 80,
    hours: 160,
    regular: 85,
    parallel: "-",
    image: "imags/universities/meu.png"
  },
  {
    university: "جامعة الشرق الأوسط",
    college: "كلية تكنولوجيا المعلومات",
    major: "هندسة البرمجيات",
    acceptance: 60,
    hours: 132,
    regular: 90,
    parallel: "-",
    image: "imags/universities/meu.png"
  },
  {
    university: "جامعة الشرق الأوسط",
    college: "كلية تكنولوجيا المعلومات",
    major: "علم الحاسوب",
    acceptance: 60,
    hours: 132,
    regular: 90,
    parallel: "-",
    image: "imags/universities/meu.png"
  },
  {
    university: "جامعة الشرق الأوسط",
    college: "كلية تكنولوجيا المعلومات",
    major: "الذكاء الاصطناعي",
    acceptance: 60,
    hours: 132,
    regular: 90,
    parallel: "-",
    image: "imags/universities/meu.png"
  },
  {
    university: "جامعة الشرق الأوسط",
    college: "كلية الأعمال",
    major: "إدارة الأعمال",
    acceptance: 60,
    hours: 132,
    regular: 80,
    parallel: "-",
    image: "imags/universities/meu.png"
  },
  {
    university: "جامعة الشرق الأوسط",
    college: "كلية الأعمال",
    major: "المحاسبة",
    acceptance: 60,
    hours: 132,
    regular: 85,
    parallel: "-",
    image: "imags/universities/meu.png"
  },
  {
    university: "جامعة الشرق الأوسط",
    college: "كلية الأعمال",
    major: "التسويق الإلكتروني والتواصل الاجتماعي",
    acceptance: 60,
    hours: 132,
    regular: 90,
    parallel: "-",
    image: "imags/universities/meu.png"
  },
  {
    university: "جامعة الشرق الأوسط",
    college: "كلية الأعمال",
    major: "ذكاء الأعمال",
    acceptance: 60,
    hours: 132,
    regular: 90,
    parallel: "-",
    image: "imags/universities/meu.png"
  },
  {
    university: "جامعة الشرق الأوسط",
    college: "كلية الأعمال",
    major: "التكنولوجيا المالية",
    acceptance: 60,
    hours: 132,
    regular: 90,
    parallel: "-",
    image: "imags/universities/meu.png"
  },
  {
    university: "جامعة الشرق الأوسط",
    college: "كلية الآداب والعلوم التربوية",
    major: "اللغة الإنجليزية وآدابها",
    acceptance: 60,
    hours: 135,
    regular: 80,
    parallel: "-",
    image: "imags/universities/meu.png"
  },
  {
    university: "جامعة الشرق الأوسط",
    college: "كلية الآداب والعلوم التربوية",
    major: "الترجمة التطبيقية",
    acceptance: 60,
    hours: 135,
    regular: 90,
    parallel: "-",
    image: "imags/universities/meu.png"
  },
  {
    university: "جامعة الشرق الأوسط",
    college: "كلية الآداب والعلوم التربوية",
    major: "تكنولوجيا التعليم",
    acceptance: 60,
    hours: 132,
    regular: 70,
    parallel: "-",
    image: "imags/universities/meu.png"
  },
  {
    university: "جامعة الشرق الأوسط",
    college: "كلية الحقوق",
    major: "القانون",
    acceptance: 65,
    hours: 141,
    regular: 65,
    parallel: "-",
    image: "imags/universities/meu.png"
  },
  {
    university: "جامعة الشرق الأوسط",
    college: "كلية الإعلام",
    major: "الإعلام الرقمي",
    acceptance: 60,
    hours: 132,
    regular: 80,
    parallel: "-",
    image: "imags/universities/meu.png"
  },
  {
    university: "جامعة الشرق الأوسط",
    college: "كلية الإعلام",
    major: "الصحافة والإعلام",
    acceptance: 60,
    hours: 132,
    regular: 70,
    parallel: "-",
    image: "imags/universities/meu.png"
  },
  {
    university: "جامعة الشرق الأوسط",
    college: "كلية الإعلام",
    major: "الإذاعة والتلفزيون",
    acceptance: 60,
    hours: 132,
    regular: 70,
    parallel: "-",
    image: "imags/universities/meu.png"
  },
  {
    university: "جامعة الشرق الأوسط",
    college: "كلية العمارة والتصميم",
    major: "التصميم الجرافيكي",
    acceptance: 60,
    hours: 135,
    regular: 90,
    parallel: "-",
    image: "imags/universities/meu.png"
  },
  {
    university: "جامعة الشرق الأوسط",
    college: "كلية العمارة والتصميم",
    major: "التصميم الداخلي",
    acceptance: 60,
    hours: 141,
    regular: 100,
    parallel: "-",
    image: "imags/universities/meu.png"
  },
  {
    university: "جامعة الشرق الأوسط",
    college: "كلية العلوم الطبية المساندة",
    major: "التحاليل الطبية",
    acceptance: 60,
    hours: 132,
    regular: 85,
    parallel: "-",
    image: "imags/universities/meu.png"
  },
  {
    university: "جامعة الشرق الأوسط",
    college: "كلية العلوم الطبية المساندة",
    major: "العلاج الطبيعي",
    acceptance: 60,
    hours: 132,
    regular: 85,
    parallel: "-",
    image: "imags/universities/meu.png"
  },
  {
    university: "جامعة الشرق الأوسط",
    college: "كلية العلوم الطبية المساندة",
    major: "تصنيع المستحضرات التجميلية والكيماوية",
    acceptance: 70,
    hours: 132,
    regular: 85,
    parallel: "-",
    image: "imags/universities/meu.png"
  },
  {
    university: "جامعة الشرق الأوسط",
    college: "كلية التمريض",
    major: "التمريض",
    acceptance: 60,
    hours: 132,
    regular: 85,
    parallel: "-",
    image: "imags/universities/meu.png"
  },

  // ================================================================
  // 20. جامعة الزرقاء
  // ================================================================
  {
    university: "جامعة الزرقاء",
    college: "كلية الشريعة والدراسات الإسلامية",
    major: "الفقه وأصوله",
    acceptance: 65,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/zarqa.png"
  },
  {
    university: "جامعة الزرقاء",
    college: "كلية الشريعة والدراسات الإسلامية",
    major: "أصول الدين",
    acceptance: 65,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/zarqa.png"
  },
  {
    university: "جامعة الزرقاء",
    college: "كلية الحقوق",
    major: "القانون",
    acceptance: 65,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/zarqa.png"
  },
  {
    university: "جامعة الزرقاء",
    college: "كلية الأعمال",
    major: "المحاسبة",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/zarqa.png"
  },
  {
    university: "جامعة الزرقاء",
    college: "كلية الأعمال",
    major: "إدارة الأعمال",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/zarqa.png"
  },
  {
    university: "جامعة الزرقاء",
    college: "كلية الأعمال",
    major: "العلوم المالية والمصرفية",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/zarqa.png"
  },
  {
    university: "جامعة الزرقاء",
    college: "كلية الأعمال",
    major: "نظم المعلومات الإدارية",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/zarqa.png"
  },
  {
    university: "جامعة الزرقاء",
    college: "كلية الأعمال",
    major: "التسويق",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/zarqa.png"
  },
  {
    university: "جامعة الزرقاء",
    college: "كلية التمريض",
    major: "التمريض",
    acceptance: 60,
    hours: 132,
    regular: 55,
    parallel: "-",
    image: "imags/universities/zarqa.png"
  },
  {
    university: "جامعة الزرقاء",
    college: "كلية العلوم الطبية المساندة",
    major: "العلاج الطبيعي",
    acceptance: 70,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/zarqa.png"
  },
  {
    university: "جامعة الزرقاء",
    college: "كلية العلوم الطبية المساندة",
    major: "التغذية والحميات",
    acceptance: 70,
    hours: 136,
    regular: 30,
    parallel: "-",
    image: "imags/universities/zarqa.png"
  },
  {
    university: "جامعة الزرقاء",
    college: "كلية الآداب والعلوم",
    major: "اللغة العربية وآدابها",
    acceptance: 60,
    hours: 132,
    regular: 20,
    parallel: "-",
    image: "imags/universities/zarqa.png"
  },
  {
    university: "جامعة الزرقاء",
    college: "كلية الآداب والعلوم",
    major: "اللغة الإنجليزية وآدابها",
    acceptance: 60,
    hours: 132,
    regular: 30,
    parallel: "-",
    image: "imags/universities/zarqa.png"
  },
  {
    university: "جامعة الزرقاء",
    college: "كلية الآداب والعلوم",
    major: "الترجمة",
    acceptance: 60,
    hours: 132,
    regular: 30,
    parallel: "-",
    image: "imags/universities/zarqa.png"
  },
  {
    university: "جامعة الزرقاء",
    college: "كلية الآداب والعلوم",
    major: "الرياضيات",
    acceptance: 60,
    hours: 132,
    regular: 26,
    parallel: "-",
    image: "imags/universities/zarqa.png"
  },
  {
    university: "جامعة الزرقاء",
    college: "كلية الآداب والعلوم",
    major: "علم الاجتماع",
    acceptance: 60,
    hours: 132,
    regular: 18,
    parallel: "-",
    image: "imags/universities/zarqa.png"
  },
  {
    university: "جامعة الزرقاء",
    college: "كلية تكنولوجيا المعلومات",
    major: "علم الحاسوب",
    acceptance: 60,
    hours: 132,
    regular: 42,
    parallel: "-",
    image: "imags/universities/zarqa.png"
  },
  {
    university: "جامعة الزرقاء",
    college: "كلية تكنولوجيا المعلومات",
    major: "هندسة البرمجيات",
    acceptance: 60,
    hours: 132,
    regular: 50,
    parallel: "-",
    image: "imags/universities/zarqa.png"
  },
  {
    university: "جامعة الزرقاء",
    college: "كلية تكنولوجيا المعلومات",
    major: "علم البيانات والذكاء الاصطناعي",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/zarqa.png"
  },
  {
    university: "جامعة الزرقاء",
    college: "كلية تكنولوجيا المعلومات",
    major: "الأمن السيبراني",
    acceptance: 60,
    hours: 132,
    regular: 40,
    parallel: "-",
    image: "imags/universities/zarqa.png"
  },
  {
    university: "جامعة الزرقاء",
    college: "كلية العلوم التربوية",
    major: "معلم صف",
    acceptance: 60,
    hours: 132,
    regular: 30,
    parallel: "-",
    image: "imags/universities/zarqa.png"
  },
  {
    university: "جامعة الزرقاء",
    college: "كلية العلوم التربوية",
    major: "الإرشاد النفسي والتربوي",
    acceptance: 60,
    hours: 132,
    regular: 20,
    parallel: "-",
    image: "imags/universities/zarqa.png"
  },
  {
    university: "جامعة الزرقاء",
    college: "كلية العلوم التربوية",
    major: "التربية الخاصة",
    acceptance: 60,
    hours: 132,
    regular: 24,
    parallel: "-",
    image: "imags/universities/zarqa.png"
  },
  {
    university: "جامعة الزرقاء",
    college: "كلية العلوم التربوية",
    major: "التربية المهنية",
    acceptance: 60,
    hours: 132,
    regular: 25,
    parallel: "-",
    image: "imags/universities/zarqa.png"
  },
  {
    university: "جامعة الزرقاء",
    college: "كلية الفنون والتصميم",
    major: "التصميم الجرافيكي",
    acceptance: 60,
    hours: 132,
    regular: 30,
    parallel: "-",
    image: "imags/universities/zarqa.png"
  },
  {
    university: "جامعة الزرقاء",
    college: "كلية الفنون والتصميم",
    major: "الفنون",
    acceptance: 60,
    hours: 132,
    regular: 25,
    parallel: "-",
    image: "imags/universities/zarqa.png"
  },

  // ================================================================
  // 21. جامعة عمان العربية
  // ================================================================
  {
    university: "جامعة عمان العربية",
    college: "كلية العلوم الإدارية والمالية",
    major: "المحاسبة",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/aau.png"
  },
  {
    university: "جامعة عمان العربية",
    college: "كلية العلوم الإدارية والمالية",
    major: "إدارة الأعمال",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/aau.png"
  },
  {
    university: "جامعة عمان العربية",
    college: "كلية العلوم الإدارية والمالية",
    major: "العلوم المالية والمصرفية",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/aau.png"
  },
  {
    university: "جامعة عمان العربية",
    college: "كلية العلوم الإدارية والمالية",
    major: "نظم المعلومات الإدارية",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/aau.png"
  },
  {
    university: "جامعة عمان العربية",
    college: "كلية العلوم الإدارية والمالية",
    major: "التسويق",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/aau.png"
  },
  {
    university: "جامعة عمان العربية",
    college: "كلية الهندسة",
    major: "الهندسة المدنية",
    acceptance: 65,
    hours: 160,
    regular: 50,
    parallel: "-",
    image: "imags/universities/aau.png"
  },
  {
    university: "جامعة عمان العربية",
    college: "كلية الهندسة",
    major: "هندسة العمارة",
    acceptance: 65,
    hours: 165,
    regular: 55,
    parallel: "-",
    image: "imags/universities/aau.png"
  },
  {
    university: "جامعة عمان العربية",
    college: "كلية الهندسة",
    major: "هندسة الحاسوب",
    acceptance: 65,
    hours: 160,
    regular: 50,
    parallel: "-",
    image: "imags/universities/aau.png"
  },
  {
    university: "جامعة عمان العربية",
    college: "كلية تكنولوجيا المعلومات",
    major: "علم الحاسوب",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: "-",
    image: "imags/universities/aau.png"
  },
  {
    university: "جامعة عمان العربية",
    college: "كلية تكنولوجيا المعلومات",
    major: "هندسة البرمجيات",
    acceptance: 60,
    hours: 132,
    regular: 50,
    parallel: "-",
    image: "imags/universities/aau.png"
  },
  {
    university: "جامعة عمان العربية",
    college: "كلية تكنولوجيا المعلومات",
    major: "الأمن السيبراني",
    acceptance: 60,
    hours: 132,
    regular: 50,
    parallel: "-",
    image: "imags/universities/aau.png"
  },
  {
    university: "جامعة عمان العربية",
    college: "كلية تكنولوجيا المعلومات",
    major: "الذكاء الاصطناعي",
    acceptance: 60,
    hours: 132,
    regular: 50,
    parallel: "-",
    image: "imags/universities/aau.png"
  },
  {
    university: "جامعة عمان العربية",
    college: "كلية الحقوق",
    major: "القانون",
    acceptance: 65,
    hours: 132,
    regular: 40,
    parallel: "-",
    image: "imags/universities/aau.png"
  },
  {
    university: "جامعة عمان العربية",
    college: "كلية الآداب والعلوم",
    major: "اللغة العربية وآدابها",
    acceptance: 60,
    hours: 132,
    regular: 25,
    parallel: "-",
    image: "imags/universities/aau.png"
  },
  {
    university: "جامعة عمان العربية",
    college: "كلية الآداب والعلوم",
    major: "اللغة الإنجليزية وآدابها",
    acceptance: 60,
    hours: 132,
    regular: 30,
    parallel: "-",
    image: "imags/universities/aau.png"
  },
  {
    university: "جامعة عمان العربية",
    college: "كلية العلوم التربوية",
    major: "معلم صف",
    acceptance: 60,
    hours: 132,
    regular: 25,
    parallel: "-",
    image: "imags/universities/aau.png"
  },
  {
    university: "جامعة عمان العربية",
    college: "كلية العلوم التربوية",
    major: "التربية الخاصة",
    acceptance: 60,
    hours: 132,
    regular: 25,
    parallel: "-",
    image: "imags/universities/aau.png"
  },
  {
    university: "جامعة عمان العربية",
    college: "كلية التمريض",
    major: "التمريض",
    acceptance: 60,
    hours: 132,
    regular: 50,
    parallel: "-",
    image: "imags/universities/aau.png"
  },
  {
    university: "جامعة عمان العربية",
    college: "كلية الصيدلة",
    major: "الصيدلة",
    acceptance: 80,
    hours: 165,
    regular: 85,
    parallel: "-",
    image: "imags/universities/aau.png"
  },

  // ================================================================
  // 22. جامعة إربد الأهلية
  // ================================================================
  {
    university: "جامعة إربد الأهلية",
    college: "كلية الآداب والفنون",
    major: "اللغة العربية وآدابها",
    acceptance: 60,
    hours: 132,
    regular: 20,
    parallel: 25,
    image: "imags/universities/inu.png"
  },
  {
    university: "جامعة إربد الأهلية",
    college: "كلية الآداب والفنون",
    major: "اللغة الإنجليزية وآدابها",
    acceptance: 60,
    hours: 132,
    regular: 30,
    parallel: 40,
    image: "imags/universities/inu.png"
  },
  {
    university: "جامعة إربد الأهلية",
    college: "كلية الآداب والفنون",
    major: "الترجمة",
    acceptance: 60,
    hours: 132,
    regular: 30,
    parallel: 40,
    image: "imags/universities/inu.png"
  },
  {
    university: "جامعة إربد الأهلية",
    college: "كلية الآداب والفنون",
    major: "التصميم الجرافيكي",
    acceptance: 60,
    hours: 132,
    regular: 30,
    parallel: 60,
    image: "imags/universities/inu.png"
  },
  {
    university: "جامعة إربد الأهلية",
    college: "كلية الآداب والفنون",
    major: "علم الاجتماع",
    acceptance: 60,
    hours: 132,
    regular: 18,
    parallel: 35,
    image: "imags/universities/inu.png"
  },
  {
    university: "جامعة إربد الأهلية",
    college: "كلية العلوم وتكنولوجيا المعلومات",
    major: "علم الحاسوب",
    acceptance: 60,
    hours: 132,
    regular: 42,
    parallel: 50,
    image: "imags/universities/inu.png"
  },
  {
    university: "جامعة إربد الأهلية",
    college: "كلية العلوم وتكنولوجيا المعلومات",
    major: "هندسة البرمجيات",
    acceptance: 60,
    hours: 132,
    regular: 50,
    parallel: 60,
    image: "imags/universities/inu.png"
  },
  {
    university: "جامعة إربد الأهلية",
    college: "كلية العلوم وتكنولوجيا المعلومات",
    major: "علم البيانات والذكاء الاصطناعي",
    acceptance: 60,
    hours: 132,
    regular: 45,
    parallel: 70,
    image: "imags/universities/inu.png"
  },
  {
    university: "جامعة إربد الأهلية",
    college: "كلية العلوم وتكنولوجيا المعلومات",
    major: "الأمن السيبراني",
    acceptance: 60,
    hours: 132,
    regular: 40,
    parallel: 60,
    image: "imags/universities/inu.png"
  },
  {
    university: "جامعة إربد الأهلية",
    college: "كلية العلوم وتكنولوجيا المعلومات",
    major: "الرياضيات",
    acceptance: 60,
    hours: 132,
    regular: 26,
    parallel: 35,
    image: "imags/universities/inu.png"
  },
  {
    university: "جامعة إربد الأهلية",
    college: "كلية العلوم الإدارية والمالية",
    major: "المحاسبة",
    acceptance: 60,
    hours: 132,
    regular: 25,
    parallel: 45,
    image: "imags/universities/inu.png"
  },
  {
    university: "جامعة إربد الأهلية",
    college: "كلية العلوم الإدارية والمالية",
    major: "إدارة الأعمال",
    acceptance: 60,
    hours: 132,
    regular: 26,
    parallel: 40,
    image: "imags/universities/inu.png"
  },
  {
    university: "جامعة إربد الأهلية",
    college: "كلية العلوم الإدارية والمالية",
    major: "العلوم المالية والمصرفية",
    acceptance: 60,
    hours: 132,
    regular: 25,
    parallel: 40,
    image: "imags/universities/inu.png"
  },
  {
    university: "جامعة إربد الأهلية",
    college: "كلية العلوم الإدارية والمالية",
    major: "نظم المعلومات الإدارية",
    acceptance: 60,
    hours: 132,
    regular: 20,
    parallel: 40,
    image: "imags/universities/inu.png"
  },
  {
    university: "جامعة إربد الأهلية",
    college: "كلية العلوم الإدارية والمالية",
    major: "نظم المعلومات المحاسبية",
    acceptance: 60,
    hours: 132,
    regular: 25,
    parallel: 45,
    image: "imags/universities/inu.png"
  },
  {
    university: "جامعة إربد الأهلية",
    college: "كلية العلوم الإدارية والمالية",
    major: "ريادة الأعمال",
    acceptance: 60,
    hours: 132,
    regular: 20,
    parallel: 60,
    image: "imags/universities/inu.png"
  },
  {
    university: "جامعة إربد الأهلية",
    college: "كلية العلوم الإدارية والمالية",
    major: "التسويق الإلكتروني والتواصل الاجتماعي",
    acceptance: 60,
    hours: 132,
    regular: 30,
    parallel: 60,
    image: "imags/universities/inu.png"
  },
  {
    university: "جامعة إربد الأهلية",
    college: "كلية التمريض",
    major: "التمريض",
    acceptance: 60,
    hours: 132,
    regular: 55,
    parallel: 80,
    image: "imags/universities/inu.png"
  },
  {
    university: "جامعة إربد الأهلية",
    college: "كلية العلوم الطبية التطبيقية",
    major: "العلاج الطبيعي",
    acceptance: 70,
    hours: 132,
    regular: 45,
    parallel: 75,
    image: "imags/universities/inu.png"
  },
  {
    university: "جامعة إربد الأهلية",
    college: "كلية العلوم الطبية التطبيقية",
    major: "التغذية والحميات",
    acceptance: 70,
    hours: 136,
    regular: 30,
    parallel: 70,
    image: "imags/universities/inu.png"
  },
  {
    university: "جامعة إربد الأهلية",
    college: "كلية العلوم التربوية",
    major: "معلم صف",
    acceptance: 60,
    hours: 132,
    regular: 30,
    parallel: 30,
    image: "imags/universities/inu.png"
  },
  {
    university: "جامعة إربد الأهلية",
    college: "كلية العلوم التربوية",
    major: "الإرشاد النفسي والتربوي",
    acceptance: 60,
    hours: 132,
    regular: 20,
    parallel: 40,
    image: "imags/universities/inu.png"
  },
  {
    university: "جامعة إربد الأهلية",
    college: "كلية العلوم التربوية",
    major: "التربية الخاصة",
    acceptance: 60,
    hours: 132,
    regular: 24,
    parallel: 40,
    image: "imags/universities/inu.png"
  },
  {
    university: "جامعة إربد الأهلية",
    college: "كلية العلوم التربوية",
    major: "التربية المهنية",
    acceptance: 60,
    hours: 132,
    regular: 25,
    parallel: 50,
    image: "imags/universities/inu.png"
  },
  {
    university: "جامعة إربد الأهلية",
    college: "كلية القانون",
    major: "القانون",
    acceptance: 65,
    hours: 132,
    regular: 28,
    parallel: 30,
    image: "imags/universities/inu.png"
  },

  // ================================================================
  // 23. جامعة عجلون الوطنية
  // ================================================================
  {
    university: "جامعة عجلون الوطنية",
    college: "كلية الآداب والعلوم التربوية",
    major: "اللغة العربية وآدابها",
    acceptance: 60,
    hours: 132,
    regular: 20,
    parallel: "-",
    image: "imags/universities/anu.png"
  },
  {
    university: "جامعة عجلون الوطنية",
    college: "كلية الآداب والعلوم التربوية",
    major: "اللغة الإنجليزية وآدابها",
    acceptance: 60,
    hours: 132,
    regular: 30,
    parallel: "-",
    image: "imags/universities/anu.png"
  },
  {
    university: "جامعة عجلون الوطنية",
    college: "كلية الآداب والعلوم التربوية",
    major: "التربية الخاصة",
    acceptance: 60,
    hours: 132,
    regular: 24,
    parallel: "-",
    image: "imags/universities/anu.png"
  },
  {
    university: "جامعة عجلون الوطنية",
    college: "كلية الآداب والعلوم التربوية",
    major: "الإرشاد النفسي",
    acceptance: 60,
    hours: 132,
    regular: 20,
    parallel: "-",
    image: "imags/universities/anu.png"
  },
  {
    university: "جامعة عجلون الوطنية",
    college: "كلية الحقوق",
    major: "القانون",
    acceptance: 65,
    hours: 132,
    regular: 28,
    parallel: "-",
    image: "imags/universities/anu.png"
  },
  {
    university: "جامعة عجلون الوطنية",
    college: "كلية تكنولوجيا المعلومات",
    major: "علم الحاسوب",
    acceptance: 60,
    hours: 132,
    regular: 42,
    parallel: "-",
    image: "imags/universities/anu.png"
  },
  {
    university: "جامعة عجلون الوطنية",
    college: "كلية تكنولوجيا المعلومات",
    major: "نظم المعلومات الحاسوبية",
    acceptance: 60,
    hours: 132,
    regular: 42,
    parallel: "-",
    image: "imags/universities/anu.png"
  },
  {
    university: "جامعة عجلون الوطنية",
    college: "كلية تكنولوجيا المعلومات",
    major: "هندسة البرمجيات",
    acceptance: 60,
    hours: 132,
    regular: 50,
    parallel: "-",
    image: "imags/universities/anu.png"
  },
  {
    university: "جامعة عجلون الوطنية",
    college: "كلية إدارة الأعمال",
    major: "إدارة الأعمال",
    acceptance: 60,
    hours: 132,
    regular: 26,
    parallel: "-",
    image: "imags/universities/anu.png"
  },
  {
    university: "جامعة عجلون الوطنية",
    college: "كلية إدارة الأعمال",
    major: "المحاسبة",
    acceptance: 60,
    hours: 132,
    regular: 25,
    parallel: "-",
    image: "imags/universities/anu.png"
  },
  {
    university: "جامعة عجلون الوطنية",
    college: "كلية إدارة الأعمال",
    major: "نظم المعلومات الإدارية",
    acceptance: 60,
    hours: 132,
    regular: 20,
    parallel: "-",
    image: "imags/universities/anu.png"
  },
  {
    university: "جامعة عجلون الوطنية",
    college: "كلية إدارة الأعمال",
    major: "المصارف الإسلامية",
    acceptance: 60,
    hours: 132,
    regular: 25,
    parallel: "-",
    image: "imags/universities/anu.png"
  },
  {
    university: "جامعة عجلون الوطنية",
    college: "كلية إدارة الأعمال",
    major: "العلوم المالية والمصرفية",
    acceptance: 60,
    hours: 132,
    regular: 25,
    parallel: "-",
    image: "imags/universities/anu.png"
  },
  {
    university: "جامعة عجلون الوطنية",
    college: "كلية إدارة الأعمال",
    major: "التسويق",
    acceptance: 60,
    hours: 132,
    regular: 30,
    parallel: "-",
    image: "imags/universities/anu.png"
  },
  {
    university: "جامعة عجلون الوطنية",
    college: "كلية الهندسة",
    major: "الهندسة المدنية",
    acceptance: 65,
    hours: 160,
    regular: 48,
    parallel: "-",
    image: "imags/universities/anu.png"
  },
  {
    university: "جامعة عجلون الوطنية",
    college: "كلية العلوم",
    major: "الرياضيات",
    acceptance: 60,
    hours: 132,
    regular: 26,
    parallel: "-",
    image: "imags/universities/anu.png"
  },

  // ================================================================
  // 24. جامعة العقبة للتكنولوجيا
  // ================================================================
  {
    university: "جامعة العقبة للتكنولوجيا",
    college: "كلية منيب وانجيلا المصري للهندسة",
    major: "الهندسة المدنية",
    acceptance: 65,
    hours: 160,
    regular: 90,
    parallel: "-",
    image: "imags/universities/aut.png"
  },
  {
    university: "جامعة العقبة للتكنولوجيا",
    college: "كلية منيب وانجيلا المصري للهندسة",
    major: "هندسة العمارة",
    acceptance: 65,
    hours: 165,
    regular: 90,
    parallel: "-",
    image: "imags/universities/aut.png"
  },
  {
    university: "جامعة العقبة للتكنولوجيا",
    college: "كلية ميشيل الصايغ للصيدلة",
    major: "الصيدلة",
    acceptance: 80,
    hours: 165,
    regular: 85,
    parallel: "-",
    image: "imags/universities/aut.png"
  },
  {
    university: "جامعة العقبة للتكنولوجيا",
    college: "كلية تكنولوجيا المعلومات",
    major: "هندسة البرمجيات",
    acceptance: 60,
    hours: 132,
    regular: 85,
    parallel: "-",
    image: "imags/universities/aut.png"
  },
  {
    university: "جامعة العقبة للتكنولوجيا",
    college: "كلية تكنولوجيا المعلومات",
    major: "علوم الحاسوب والذكاء الاصطناعي",
    acceptance: 60,
    hours: 132,
    regular: 85,
    parallel: "-",
    image: "imags/universities/aut.png"
  },
  {
    university: "جامعة العقبة للتكنولوجيا",
    college: "كلية الآداب والعلوم",
    major: "التصوير الطبي والإشعاعي",
    acceptance: 65,
    hours: 132,
    regular: 85,
    parallel: "-",
    image: "imags/universities/aut.png"
  },
  {
    university: "جامعة العقبة للتكنولوجيا",
    college: "كلية الآداب والعلوم",
    major: "العلاج الطبيعي",
    acceptance: 65,
    hours: 132,
    regular: 85,
    parallel: "-",
    image: "imags/universities/aut.png"
  },
  {
    university: "جامعة العقبة للتكنولوجيا",
    college: "كلية الآداب والعلوم",
    major: "الإعلام الرقمي",
    acceptance: 60,
    hours: 132,
    regular: 75,
    parallel: "-",
    image: "imags/universities/aut.png"
  },
  {
    university: "جامعة العقبة للتكنولوجيا",
    college: "كلية الآداب والعلوم",
    major: "التصميم الجرافيكي",
    acceptance: 60,
    hours: 132,
    regular: 70,
    parallel: "-",
    image: "imags/universities/aut.png"
  },
  {
    university: "جامعة العقبة للتكنولوجيا",
    college: "كلية العلوم الإدارية والمالية",
    major: "المحاسبة",
    acceptance: 60,
    hours: 132,
    regular: 75,
    parallel: "-",
    image: "imags/universities/aut.png"
  },
  {
    university: "جامعة العقبة للتكنولوجيا",
    college: "كلية العلوم الإدارية والمالية",
    major: "إدارة الأعمال",
    acceptance: 60,
    hours: 132,
    regular: 70,
    parallel: "-",
    image: "imags/universities/aut.png"
  },
  {
    university: "جامعة العقبة للتكنولوجيا",
    college: "كلية القانون",
    major: "القانون",
    acceptance: 65,
    hours: 132,
    regular: 75,
    parallel: "-",
    image: "imags/universities/aut.png"
  }

];