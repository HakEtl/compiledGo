// theme.js

// Function to set theme
function setTheme(theme) {
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        document.documentElement.setAttribute('dir', 'rtl'); // Double ensure RTL
        localStorage.setItem('theme', 'dark');
        document.cookie = "theme=dark; path=/; max-age=31536000"; // 1 year
    } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.setAttribute('dir', 'rtl'); // Double ensure RTL
        localStorage.setItem('theme', 'light');
        document.cookie = "theme=light; path=/; max-age=31536000"; // 1 year
    }
}

// Function to toggle theme
function toggleTheme() {
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'light' : 'dark');
}

// Initialize theme on load (if cookie is not present or doesn't match localstorage)
document.addEventListener('DOMContentLoaded', () => {
    const localTheme = localStorage.getItem('theme');
    const cookieTheme = document.cookie.split('; ').find(row => row.startsWith('theme='))?.split('=')[1];
    
    if (localTheme && localTheme !== cookieTheme) {
        setTheme(localTheme);
    }
});
