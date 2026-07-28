// فتح وإغلاق القائمة على الموبايل
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });
}

// تبديل الوضع الليلي / النهاري
const themeToggle = document.getElementById('themeToggle');
const htmlEl = document.documentElement;

// تحميل الثيم المحفوظ عند فتح الصفحة (أو حسب إعدادات النظام)
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
