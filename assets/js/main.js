/* ==========================================================================
   HRM Premium Admin Dashboard - Main App Architecture (main.js)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Sidebar Collapse Controllers
    initSidebarControls();

    // 2. Multi-Level Submenu Controller
    initSubmenuControls();

    // 3. Highlight & Open Active Navigation Menu Link
    highlightActiveMenu();

    // 4. Custom Ripple Effects for Buttons and Menu items
    initRippleEffects();

    // 5. Initializations of Bootstrap tooltips
    initBootstrapHelpers();

    // 6. Interactive Premium Dashboard Features
    initDashboardFeatures();
});

/**
 * 1. Sidebar collapse & drawer overlay logic
 */
function initSidebarControls() {
    const sidebarToggle = document.querySelector('.sidebar-toggle-btn');
    const mobileToggle = document.querySelector('.mobile-sidebar-toggle-btn'); // For mobile header layout
    const body = document.body;

    // Create and append the mobile overlay if it doesn't exist
    let overlay = document.querySelector('.sidebar-overlay');
    if (!overlay && window.innerWidth <= 992) {
        overlay = document.createElement('div');
        overlay.className = 'sidebar-overlay';
        document.querySelector('.app-wrapper').appendChild(overlay);
    }

    const toggleSidebarDesktop = () => {
        body.classList.toggle('sidebar-collapsed');
    };

    const toggleSidebarMobile = () => {
        body.classList.toggle('sidebar-open');
    };

    const closeSidebarMobile = () => {
        body.classList.remove('sidebar-open');
    };

    // Attach listeners
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', (e) => {
            e.preventDefault();
            if (window.innerWidth <= 992) {
                toggleSidebarMobile();
            } else {
                toggleSidebarDesktop();
            }
        });
    }

    if (mobileToggle) {
        mobileToggle.addEventListener('click', (e) => {
            e.preventDefault();
            toggleSidebarMobile();
        });
    }

    if (overlay) {
        overlay.addEventListener('click', closeSidebarMobile);
    }

    // Handle screen resize configurations
    window.addEventListener('resize', () => {
        if (window.innerWidth > 992) {
            body.classList.remove('sidebar-open');
        } else {
            body.classList.remove('sidebar-collapsed');
        }
    });
}

/**
 * 2. Multi-level sidebar menu toggle logic
 */
function initSubmenuControls() {
    const toggles = document.querySelectorAll('.has-submenu > .sidebar-nav-link');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const parentItem = this.parentElement;
            const submenu = parentItem.querySelector('.sidebar-submenu');

            if (!submenu) return;

            const isOpen = parentItem.classList.contains('open');

            // Close other sibling submenus
            const siblings = parentItem.parentElement.children;
            for (let sibling of siblings) {
                if (sibling !== parentItem && sibling.classList.contains('has-submenu')) {
                    sibling.classList.remove('open');
                    const sibMenu = sibling.querySelector('.sidebar-submenu');
                    if (sibMenu) {
                        slideUp(sibMenu, 250);
                    }
                }
            }

            // Toggle active clicked submenu
            if (isOpen) {
                parentItem.classList.remove('open');
                slideUp(submenu, 250);
            } else {
                parentItem.classList.add('open');
                slideDown(submenu, 250);
            }
        });
    });
}

/**
 * 3. Match URL to highlight sidebar item and expand parent if inside submenu
 */
function highlightActiveMenu() {
    const currentPath = window.location.pathname;
    const pageName = currentPath.substring(currentPath.lastIndexOf('/') + 1);

    // Default back to index.html if on root URL
    let targetPage = pageName === '' ? 'index.html' : pageName;

    // Smart sub-page mapping for sidebar highlighting
    const parentMapping = {
        'add-employee.html': 'employees.html',
        'employee-details.html': 'employees.html',
        'timesheet.html': 'employees.html',
        'add-department.html': 'departments.html',
        'add-designation.html': 'designations.html',
        'apply-leave.html': 'leave.html',
        'leave-balance.html': 'leave.html',
        'payroll-history.html': 'payroll.html',
        'payslip.html': 'payroll.html',
        'salary-structure.html': 'payroll.html',
        'candidates.html': 'recruitment.html',
        'job-openings.html': 'recruitment.html',
        'interviews.html': 'recruitment.html',
        'offers.html': 'recruitment.html',
        'appraisal.html': 'performance.html',
        'goals.html': 'performance.html',
        'project-details.html': 'projects.html',
        'tasks.html': 'projects.html',
        'task-details.html': 'projects.html',
        'events.html': 'calendar.html',
        'meetings.html': 'calendar.html',
        'holidays.html': 'calendar.html',
        'analytics.html': 'reports.html',
        'branches.html': 'settings.html',
        'company.html': 'settings.html',
        'roles.html': 'settings.html',
        'users.html': 'settings.html',
        'shift-management.html': 'settings.html',
        'training.html': 'settings.html',
        'overtime.html': 'settings.html'
    };

    if (parentMapping[targetPage]) {
        targetPage = parentMapping[targetPage];
    }

    // Clear all active/open classes from sidebar items to prevent duplicates
    document.querySelectorAll('.sidebar-nav-item, .sidebar-submenu-item').forEach(item => {
        item.classList.remove('active', 'open');
    });
    document.querySelectorAll('.sidebar-submenu').forEach(submenu => {
        submenu.style.removeProperty('display');
    });

    const allLinks = document.querySelectorAll('.sidebar-nav-link, .sidebar-submenu-link');

    allLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (!href) return;

        // Check if current href matches targetPage or is included in route pattern
        if (href === targetPage || href === targetPage.replace('.html', '')) {
            const parentNavItem = link.closest('.sidebar-nav-item');
            const parentSubmenuItem = link.closest('.sidebar-submenu-item');

            if (parentSubmenuItem) {
                parentSubmenuItem.classList.add('active');
            }

            if (parentNavItem) {
                parentNavItem.classList.add('active');
                
                // If it belongs to a submenu, expand that submenu
                if (parentNavItem.classList.contains('has-submenu')) {
                    parentNavItem.classList.add('open');
                    const submenu = parentNavItem.querySelector('.sidebar-submenu');
                    if (submenu) {
                        submenu.style.display = 'flex';
                    }
                }
            }
        }
    });
}

/**
 * 4. Premium Ripple Click Effects
 */
function initRippleEffects() {
    const rippleElements = document.querySelectorAll('.gradient-btn, .outline-btn, .sidebar-nav-link, .dropdown-item-premium');

    rippleElements.forEach(element => {
        element.style.position = 'relative';
        element.style.overflow = 'hidden';

        element.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const ripple = document.createElement('span');
            ripple.className = 'ripple-effect';
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

/**
 * 5. Bootstrap helpers
 */
function initBootstrapHelpers() {
    // Enable Bootstrap tooltips if bootstrap object is defined
    if (typeof bootstrap !== 'undefined' && bootstrap.Tooltip) {
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
    }
}

/**
 * Slide Animation Helpers for Vanilla JS
 */
function slideUp(target, duration = 300) {
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.boxSizing = 'border-box';
    target.style.height = target.offsetHeight + 'px';
    target.offsetHeight; // force reflow
    target.style.overflow = 'hidden';
    target.style.height = '0';
    target.style.paddingTop = '0';
    target.style.paddingBottom = '0';
    target.style.marginTop = '0';
    target.style.marginBottom = '0';
    
    window.setTimeout(() => {
        target.style.display = 'none';
        target.style.removeProperty('height');
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
    }, duration);
}

function slideDown(target, duration = 300) {
    target.style.removeProperty('display');
    let display = window.getComputedStyle(target).display;
    if (display === 'none') display = 'flex';
    target.style.display = display;
    
    const height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = '0';
    target.style.paddingTop = '0';
    target.style.paddingBottom = '0';
    target.style.marginTop = '0';
    target.style.marginBottom = '0';
    target.offsetHeight; // force reflow
    
    target.style.boxSizing = 'border-box';
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    
    window.setTimeout(() => {
        target.style.removeProperty('height');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
    }, duration);
}

/**
 * 6. Dashboard specific premium features
 */
function initDashboardFeatures() {
    const welcomeBanner = document.getElementById('welcomeBanner');
    if (!welcomeBanner) return; // Only run on dashboard home

    // Theme responsive chart helper
    function getChartColors(theme) {
        const isDark = theme === 'dark';
        return {
            primary: '#4f46e5',
            primaryLight: 'rgba(79, 70, 229, 0.1)',
            primarySolid: 'rgba(79, 70, 229, 0.85)',
            info: '#06b6d4',
            infoLight: 'rgba(6, 182, 212, 0.1)',
            success: '#10b881',
            successLight: 'rgba(16, 185, 129, 0.15)',
            warning: '#f59e0b',
            warningLight: 'rgba(245, 158, 11, 0.15)',
            text: isDark ? '#94a3b8' : '#64748b',
            grid: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)',
            tooltipBg: isDark ? '#1e293b' : '#ffffff',
            tooltipBorder: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.06)'
        };
    }

    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    let colors = getChartColors(currentTheme);
    const dashboardCharts = {};

    // Sparklines Initialization
    createSparkline('sparklineEmployees', [1200, 1210, 1215, 1222, 1235, 1248], colors.primary);
    createSparkline('sparklineDepartments', [11, 11, 11, 11, 12, 12], colors.info);
    createSparkline('sparklineAttendance', [97.5, 98.0, 97.2, 98.1, 98.3, 98.4], colors.success);
    createSparkline('sparklineJobs', [40, 38, 35, 37, 36, 34], colors.warning);

    function createSparkline(canvasId, data, color) {
        const ctx = document.getElementById(canvasId);
        if (!ctx) return;
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.map((_, i) => i),
                datasets: [{
                    data: data,
                    borderColor: color,
                    borderWidth: 1.5,
                    pointRadius: 0,
                    tension: 0.4,
                    fill: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false }, tooltip: { enabled: false } },
                scales: {
                    x: { display: false },
                    y: { display: false }
                }
            }
        });
    }

    // 1. Attendance trends line chart
    const attendanceCtx = document.getElementById('attendanceAnalyticsChart');
    if (attendanceCtx) {
        dashboardCharts.attendance = new Chart(attendanceCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                datasets: [
                    {
                        label: 'On-Time Presence',
                        data: [92, 94, 95, 93, 96, 97, 98.4],
                        borderColor: colors.primary,
                        backgroundColor: 'rgba(79, 70, 229, 0.04)',
                        borderWidth: 2,
                        tension: 0.35,
                        fill: true,
                        pointBackgroundColor: colors.primary,
                        pointBorderColor: '#ffffff',
                        pointHoverRadius: 6
                    },
                    {
                        label: 'Late Check-ins',
                        data: [6, 5, 4, 5, 3, 2.5, 1.2],
                        borderColor: colors.info,
                        backgroundColor: 'rgba(6, 182, 212, 0.02)',
                        borderWidth: 1.5,
                        tension: 0.35,
                        fill: true,
                        pointBackgroundColor: colors.info,
                        pointBorderColor: '#ffffff',
                        pointHoverRadius: 6
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            color: colors.text,
                            font: { family: 'var(--font-sans)', weight: '600', size: 11 },
                            boxWidth: 12
                        }
                    },
                    tooltip: {
                        backgroundColor: colors.tooltipBg,
                        borderColor: colors.tooltipBorder,
                        borderWidth: 1,
                        titleColor: currentTheme === 'dark' ? '#f8fafc' : '#1e293b',
                        bodyColor: currentTheme === 'dark' ? '#cbd5e1' : '#475569',
                        padding: 10,
                        cornerRadius: 8,
                        usePointStyle: true
                    }
                },
                scales: {
                    x: {
                        grid: { color: colors.grid },
                        ticks: { color: colors.text, font: { family: 'var(--font-sans)', size: 10 } }
                    },
                    y: {
                        grid: { color: colors.grid },
                        ticks: { color: colors.text, font: { family: 'var(--font-sans)', size: 10 } }
                    }
                }
            }
        });
    }

    // 2. Department distribution doughnut chart
    const deptCtx = document.getElementById('departmentDistributionChart');
    if (deptCtx) {
        dashboardCharts.department = new Chart(deptCtx, {
            type: 'doughnut',
            data: {
                labels: ['Engineering', 'Marketing', 'Operations', 'HR'],
                datasets: [{
                    data: [550, 320, 250, 128],
                    backgroundColor: [colors.primary, colors.info, colors.success, colors.warning],
                    borderWidth: 2,
                    borderColor: currentTheme === 'dark' ? '#1e293b' : '#ffffff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '72%',
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: colors.tooltipBg,
                        borderColor: colors.tooltipBorder,
                        borderWidth: 1,
                        titleColor: currentTheme === 'dark' ? '#f8fafc' : '#1e293b',
                        bodyColor: currentTheme === 'dark' ? '#cbd5e1' : '#475569',
                        padding: 10,
                        cornerRadius: 8
                    }
                }
            }
        });
    }

    // 3. Payroll overview bar chart
    const payrollCtx = document.getElementById('payrollOverviewChart');
    if (payrollCtx) {
        dashboardCharts.payroll = new Chart(payrollCtx, {
            type: 'bar',
            data: {
                labels: ['Mar', 'Apr', 'May', 'Jun', 'Jul'],
                datasets: [
                    {
                        label: 'Base Salary',
                        data: [420, 435, 440, 460, 480],
                        backgroundColor: colors.primarySolid,
                        borderRadius: 4
                    },
                    {
                        label: 'Bonuses',
                        data: [50, 65, 55, 70, 85],
                        backgroundColor: colors.info,
                        borderRadius: 4
                    },
                    {
                        label: 'Benefits',
                        data: [80, 85, 90, 95, 100],
                        backgroundColor: colors.success,
                        borderRadius: 4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        stacked: true,
                        grid: { color: colors.grid },
                        ticks: { color: colors.text, font: { family: 'var(--font-sans)', size: 10 } }
                    },
                    y: {
                        stacked: true,
                        grid: { color: colors.grid },
                        ticks: { color: colors.text, font: { family: 'var(--font-sans)', size: 10 } }
                    }
                },
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            color: colors.text,
                            font: { family: 'var(--font-sans)', weight: '600', size: 11 },
                            boxWidth: 12
                        }
                    },
                    tooltip: {
                        backgroundColor: colors.tooltipBg,
                        borderColor: colors.tooltipBorder,
                        borderWidth: 1,
                        titleColor: currentTheme === 'dark' ? '#f8fafc' : '#1e293b',
                        bodyColor: currentTheme === 'dark' ? '#cbd5e1' : '#475569',
                        padding: 10,
                        cornerRadius: 8
                    }
                }
            }
        });
    }

    // Update charts dynamically on theme switch
    window.addEventListener('themeChanged', (e) => {
        const nextTheme = e.detail.theme;
        const nextColors = getChartColors(nextTheme);

        // Update Line Chart
        if (dashboardCharts.attendance) {
            const chart = dashboardCharts.attendance;
            chart.options.scales.x.grid.color = nextColors.grid;
            chart.options.scales.y.grid.color = nextColors.grid;
            chart.options.scales.x.ticks.color = nextColors.text;
            chart.options.scales.y.ticks.color = nextColors.text;
            chart.options.plugins.legend.labels.color = nextColors.text;
            chart.options.plugins.tooltip.backgroundColor = nextColors.tooltipBg;
            chart.options.plugins.tooltip.borderColor = nextColors.tooltipBorder;
            chart.options.plugins.tooltip.titleColor = nextTheme === 'dark' ? '#f8fafc' : '#1e293b';
            chart.options.plugins.tooltip.bodyColor = nextTheme === 'dark' ? '#cbd5e1' : '#475569';
            chart.update();
        }

        // Update Doughnut Chart
        if (dashboardCharts.department) {
            const chart = dashboardCharts.department;
            chart.data.datasets[0].borderColor = nextTheme === 'dark' ? '#1e293b' : '#ffffff';
            chart.options.plugins.tooltip.backgroundColor = nextColors.tooltipBg;
            chart.options.plugins.tooltip.borderColor = nextColors.tooltipBorder;
            chart.options.plugins.tooltip.titleColor = nextTheme === 'dark' ? '#f8fafc' : '#1e293b';
            chart.options.plugins.tooltip.bodyColor = nextTheme === 'dark' ? '#cbd5e1' : '#475569';
            chart.update();
        }

        // Update Bar Chart
        if (dashboardCharts.payroll) {
            const chart = dashboardCharts.payroll;
            chart.options.scales.x.grid.color = nextColors.grid;
            chart.options.scales.y.grid.color = nextColors.grid;
            chart.options.scales.x.ticks.color = nextColors.text;
            chart.options.scales.y.ticks.color = nextColors.text;
            chart.options.plugins.legend.labels.color = nextColors.text;
            chart.options.plugins.tooltip.backgroundColor = nextColors.tooltipBg;
            chart.options.plugins.tooltip.borderColor = nextColors.tooltipBorder;
            chart.options.plugins.tooltip.titleColor = nextTheme === 'dark' ? '#f8fafc' : '#1e293b';
            chart.options.plugins.tooltip.bodyColor = nextTheme === 'dark' ? '#cbd5e1' : '#475569';
            chart.update();
        }
    });

    // Animate statistics counters
    const counters = document.querySelectorAll('.counter-value');
    counters.forEach(counter => {
        const targetStr = counter.getAttribute('data-target');
        const target = parseFloat(targetStr);
        const isFloat = targetStr.includes('.');
        const duration = 1200; // milliseconds
        const startTime = performance.now();

        function step(timestamp) {
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = progress * (2 - progress); // Ease out quad
            const current = ease * target;

            if (isFloat) {
                counter.textContent = current.toFixed(1);
            } else {
                counter.textContent = Math.floor(current);
            }

            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                counter.textContent = targetStr;
            }
        }
        requestAnimationFrame(step);
    });

    // Greeting Message & Clock update
    function updateGreetingAndClock() {
        const clockEl = document.getElementById('digitalClock');
        const dateEl = document.getElementById('currentDate');
        const greetingEl = document.getElementById('greetingMessage');
        const now = new Date();

        if (clockEl) {
            let hours = now.getHours();
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            const ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12;
            clockEl.textContent = `${String(hours).padStart(2, '0')}:${minutes}:${seconds} ${ampm}`;
        }

        if (dateEl) {
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            dateEl.textContent = now.toLocaleDateString('en-US', options);
        }

        if (greetingEl) {
            const hour = now.getHours();
            let greeting = "Good Evening";
            if (hour < 12) {
                greeting = "Good Morning";
            } else if (hour < 18) {
                greeting = "Good Afternoon";
            }
            greetingEl.textContent = `${greeting}, Sarah Jenkins!`;
        }
    }
    updateGreetingAndClock();
    setInterval(updateGreetingAndClock, 1000);

    // Scratchpad Auto-Persistence
    const scratchpad = document.getElementById('scratchpadText');
    const saveStatus = document.getElementById('scratchpadSaveStatus');
    if (scratchpad) {
        // Load saved notes
        const savedNotes = localStorage.getItem('aura_scratchpad');
        if (savedNotes) {
            scratchpad.value = savedNotes;
        }

        let debounceTimeout;
        scratchpad.addEventListener('input', () => {
            if (saveStatus) saveStatus.textContent = 'Saving...';
            clearTimeout(debounceTimeout);
            debounceTimeout = setTimeout(() => {
                localStorage.setItem('aura_scratchpad', scratchpad.value);
                if (saveStatus) saveStatus.textContent = 'Auto-saved';
            }, 600);
        });
    }

    // Mini Calendar Days selection
    const calendarDays = document.querySelectorAll('#miniCalendarDays .calendar-day:not(.muted)');
    calendarDays.forEach(day => {
        day.addEventListener('click', function() {
            calendarDays.forEach(d => d.classList.remove('active'));
            this.classList.add('active');
            const dayNum = this.textContent;
            showToast(`Selected July ${dayNum}, 2026 for agenda schedule.`, 'info');
        });
    });

    // Leave Approvals Interactivity (Reject and Approve buttons)
    const leaveList = document.getElementById('dashboardLeaveList');
    if (leaveList) {
        leaveList.addEventListener('click', (e) => {
            const btn = e.target.closest('.leave-approve-btn, .leave-reject-btn');
            if (!btn) return;

            const isApprove = btn.classList.contains('leave-approve-btn');
            const employeeName = btn.getAttribute('data-name') || 'Employee';
            const requestCard = btn.closest('.p-3.rounded.border');

            if (requestCard) {
                requestCard.style.transition = 'all 0.45s ease';
                requestCard.style.opacity = '0';
                requestCard.style.transform = 'scale(0.9) translateY(10px)';
                
                setTimeout(() => {
                    requestCard.remove();
                    if (leaveList.children.length === 0) {
                        leaveList.innerHTML = `
                            <div class="text-center p-4 text-muted fs-xs">
                                <i class="fa-solid fa-clipboard-check fs-4 mb-2 text-success"></i>
                                <div>No pending leave requests left. Good job!</div>
                            </div>
                        `;
                    }
                }, 450);

                if (isApprove) {
                    showToast(`Approved leave request for ${employeeName} successfully!`, 'success');
                } else {
                    showToast(`Rejected leave request for ${employeeName}.`, 'danger');
                }
            }
        });
    }

    // Mark All Notifications as Read
    const markAllReadBtn = document.getElementById('markAllReadBtn');
    const notificationList = document.getElementById('notificationWidgetList');
    if (markAllReadBtn && notificationList) {
        markAllReadBtn.addEventListener('click', () => {
            const unreadItems = notificationList.querySelectorAll('.notification-item-unread');
            if (unreadItems.length === 0) {
                showToast("All notifications are already marked as read.", "info");
                return;
            }

            unreadItems.forEach(item => {
                item.classList.remove('notification-item-unread');
                item.style.background = 'transparent';
                
                const dot = item.querySelector('.online-dot');
                if (dot) {
                    dot.style.backgroundColor = 'transparent';
                    dot.style.opacity = '0';
                }
            });

            // If there's a notification badge in the header, clear it
            const headerNotificationBadge = document.querySelector('.header-action-btn .btn-badge');
            if (headerNotificationBadge) {
                headerNotificationBadge.remove();
            }

            showToast("Successfully marked all notifications as read.", "success");
        });
    }

    // Live Ticker Simulation
    const liveFeed = document.getElementById('attendanceLiveFeed');
    if (liveFeed) {
        const liveStaff = [
            { name: "John Davis", role: "Marketing Associate", portal: "QR code scanner" },
            { name: "Lina Vance", role: "Database Engineer", portal: "biometric gate 1" },
            { name: "Sophia Martinez", role: "Product Manager", portal: "mobile app check-in" },
            { name: "Robert Chen", role: "System Architect", portal: "Slack auth hook" },
            { name: "Alisha Patel", role: "Recruiting Coordinator", portal: "desktop client" }
        ];

        let staffIndex = 0;
        setInterval(() => {
            const person = liveStaff[staffIndex];
            staffIndex = (staffIndex + 1) % liveStaff.length;

            const now = new Date();
            const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });

            const item = document.createElement('div');
            item.className = 'd-flex align-items-center gap-2 py-1 fs-xs border-bottom border-dashed text-secondary animate-fade-in-up';
            item.style.opacity = '0';
            item.style.transform = 'translateY(10px)';
            item.style.transition = 'all 0.5s ease';

            item.innerHTML = `
                <span class="badge rounded bg-success-bg text-success fw-600">${timeStr}</span>
                <span class="fw-700 text-primary">${person.name}</span>
                <span class="text-secondary">(${person.role}) clocked in via ${person.portal}.</span>
            `;

            liveFeed.prepend(item);

            // Trigger animation frame for fade-in
            requestAnimationFrame(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            });

            // Keep only latest 3 items in the ticker
            while (liveFeed.children.length > 3) {
                liveFeed.lastElementChild.remove();
            }
        }, 15000); // add a new check-in every 15 seconds
    }

    // Expose showToast to dashboard scope
    window.showToast = showToast;
}

// Dynamic Toast Notification Engine
function showToast(message, type = 'success') {
    let container = document.getElementById('toastContainer');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toastContainer';
        container.style.position = 'fixed';
        container.style.bottom = '2rem';
        container.style.right = '2rem';
        container.style.zIndex = '9999';
        container.style.display = 'flex';
        container.style.flexDirection = 'column';
        container.style.gap = '0.5rem';
        document.body.appendChild(container);
    }
    
    const toast = document.createElement('div');
    toast.className = 'glass-card p-3 d-flex align-items-center gap-3';
    toast.style.width = '320px';
    toast.style.background = 'var(--card-bg-solid)';
    toast.style.border = '1px solid var(--card-border)';
    
    let colorHex = '#10b881';
    let icon = 'fa-circle-check';
    if (type === 'danger') { colorHex = '#ef4444'; icon = 'fa-circle-xmark'; }
    else if (type === 'warning') { colorHex = '#f59e0b'; icon = 'fa-triangle-exclamation'; }
    else if (type === 'info') { colorHex = '#06b6d4'; icon = 'fa-circle-info'; }

    toast.style.borderLeft = `4px solid ${colorHex}`;
    toast.style.boxShadow = 'var(--shadow-soft-lg)';
    toast.style.borderRadius = 'var(--radius-md)';
    toast.style.transition = 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';

    toast.innerHTML = `
        <div class="brand-icon-wrapper" style="width: 28px; height: 28px; background: rgba(79, 70, 229, 0.05); color: ${colorHex}; box-shadow: none; flex-shrink: 0; border-radius: var(--radius-sm);">
            <i class="fa-solid ${icon} fs-xs"></i>
        </div>
        <div class="flex-grow-1">
            <div class="fw-700 fs-xs text-primary" style="text-transform: uppercase; letter-spacing: 0.5px;">${type === 'danger' ? 'error' : type}</div>
            <div class="text-secondary fs-xxs" style="line-height: 1.3;">${message}</div>
        </div>
        <button class="border-0 bg-transparent text-muted fs-xs p-1" style="cursor: pointer;" onclick="this.parentElement.remove()"><i class="fa-solid fa-xmark"></i></button>
    `;
    
    container.appendChild(toast);
    
    // Trigger show animation
    setTimeout(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateY(0)';
    }, 10);
    
    // Auto remove after 4s
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        setTimeout(() => toast.remove(), 350);
    }, 4000);
}
