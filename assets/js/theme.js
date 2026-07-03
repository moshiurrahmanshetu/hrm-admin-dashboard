/* ==========================================================================
   HRM Premium Admin Dashboard - Theme System Controller (theme.js)
   ========================================================================== */

(function () {
    // Default theme settings
    const STORAGE_KEY = 'hrm_premium_theme';
    const DEFAULT_THEME = 'dark';

    // Retrieve active theme from localStorage or system preferences
    function getStoredTheme() {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) return stored;
        return DEFAULT_THEME;
    }

    // Apply selected theme to HTML tag
    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(STORAGE_KEY, theme);
        
        // Dispatch custom event so pages can react (e.g., Chart.js re-render)
        window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme } }));
    }

    // Initialize theme immediately before DOM loads to prevent flash of light/dark background
    const activeTheme = getStoredTheme();
    applyTheme(activeTheme);

    // Document Ready Syncing
    document.addEventListener('DOMContentLoaded', () => {
        syncThemeToggleUI(activeTheme);

        // Bind listener for theme toggle buttons
        const togglers = document.querySelectorAll('.theme-toggle-trigger');
        togglers.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const current = document.documentElement.getAttribute('data-theme') || 'light';
                const nextTheme = current === 'light' ? 'dark' : 'light';
                
                applyTheme(nextTheme);
                syncThemeToggleUI(nextTheme);
            });
        });
    });

    // Sync theme buttons and icons
    function syncThemeToggleUI(theme) {
        const togglers = document.querySelectorAll('.theme-toggle-trigger');
        togglers.forEach(btn => {
            const icon = btn.querySelector('i');
            if (icon) {
                if (theme === 'dark') {
                    icon.className = 'fa-solid fa-sun'; // Switch option to click sun
                    btn.setAttribute('title', 'Switch to Light Theme');
                } else {
                    icon.className = 'fa-solid fa-moon'; // Switch option to click moon
                    btn.setAttribute('title', 'Switch to Dark Theme');
                }
            }
        });
    }

    // Export global interface for page modules if needed
    window.HRM_Theme = {
        getTheme: () => document.documentElement.getAttribute('data-theme') || 'light',
        setTheme: (theme) => {
            applyTheme(theme);
            syncThemeToggleUI(theme);
        }
    };
})();
