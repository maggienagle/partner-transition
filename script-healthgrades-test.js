// 🧪 TEST SCRIPT - Logo Animation Testing
// This is a SAFE COPY for testing without affecting production pages
// Original: script-healthgrades.js

// Test Interstitial page functionality
class TestInterstitialPage {
    constructor() {
        this.manualRedirectBtn = document.getElementById('manual-redirect');
        this.versionSelect = document.getElementById('version-select');
        this.container = document.querySelector('.container');
        this.testMode = true; // Always in test mode
        this.animationsPaused = false;
        this.currentVersion = 1; // Default to Version 1
        this.countdownSeconds = 6; // Countdown to restart animation
        this.countdownInterval = null;
        
        this.init();
    }
    
    init() {
        this.setupTestEventListeners();
        this.preloadImages();
        this.trackTestPageView();
        this.setupTestControls();
        this.initializeVersion();
        this.startCountdown(); // Start the countdown timer
        this.logTestMode();
    }
    
    initializeVersion() {
        // Set Version 2 as default since it's first in dropdown
        this.currentVersion = 2;
        this.container.classList.add('version-2');
        this.versionSelect.value = '2';
        console.log('🧪 TEST: Initialized with Version 2 (Dots with Scale) - first option');
    }
    
    logTestMode() {
        console.log('🧪 TEST PAGE LOADED: Logo Animation Testing Environment');
        console.log('🧪 Safe to experiment with animations without affecting production');
        console.log('🧪 Use the test controls in the bottom left corner');
        console.log('🧪 Version Switcher: Toggle between dots animation (V1) and overlapping logos (V2)');
    }
    
    setupTestEventListeners() {
        // Test button - no actual redirect
        if (this.manualRedirectBtn) {
            this.manualRedirectBtn.addEventListener('click', () => {
                this.proceedToZocdoc();
            });
        }
        
        // Keyboard test controls
        document.addEventListener('keydown', (e) => {
            if (e.key === 'r' || e.key === 'R') {
                this.restartAnimation();
            }
            if (e.key === 't' || e.key === 'T') {
                this.toggleAnimation();
            }
            if (e.key === 'Escape') {
                this.resetToOriginal();
            }
        });
        
        // Prevent accidental navigation
        window.addEventListener('beforeunload', (e) => {
            e.preventDefault();
            e.returnValue = 'Are you sure you want to leave the test environment?';
        });
    }
    
    setupTestControls() {
        // Add global test functions for buttons
        window.proceedToZocdoc = () => this.proceedToZocdoc();
        window.restartAnimation = () => this.restartAnimation();
        window.switchVersion = () => this.switchVersion();
    }
    
    switchVersion() {
        const selectedVersion = parseInt(this.versionSelect.value);
        console.log(`🧪 TEST: Switching to Version ${selectedVersion}`);
        
        this.currentVersion = selectedVersion;
        
        // Remove all version classes
        this.container.classList.remove('version-1', 'version-2', 'version-3');
        
        // Apply new version class
        this.container.classList.add(`version-${selectedVersion}`);
        
        // Reset countdown when switching versions
        this.resetCountdown();
        
        // Reset and restart animations for new version
        this.restartAnimation();
        
        // Log version details
        if (selectedVersion === 1) {
            console.log('🧪 Version 1 - Logo Overlap: Logos slide to overlapping positions (12px overlap), no dots');
            console.log('🧪 Using margin-left: -12px on right logo for very subtle 12% overlap');
        } else if (selectedVersion === 2) {
            console.log('🧪 Version 2 - Dots with Scale: Logos slide apart with improved dot animation');
            console.log('🧪 Dots appear earlier (0.6s delays) and shrink less (min 0.8 scale vs 0.5)');
        } else if (selectedVersion === 3) {
            console.log('🧪 Version 3 - Simple Dots: Logos very close together (±6px = 12px gap) with 6px spaced sequential dots');
            console.log('🧪 Ultra smooth: 4s cycle, 1.33s delays, gentle easing curve, very gradual color fills');
        }
    }
    
    startCountdown() {
        // Start countdown immediately
        this.countdownInterval = setInterval(() => {
            this.countdownSeconds--;
            this.updateCountdown();
            
            if (this.countdownSeconds <= 0) {
                console.log('🧪 Countdown reached 0 - showing redirect state then restarting');
                this.proceedToZocdoc();
            }
        }, 1000);
        
        console.log('🧪 Countdown started - will show redirect state then restart every 6 seconds');
    }
    
    updateCountdown() {
        const countdownElement = document.getElementById('countdown');
        if (countdownElement) {
            countdownElement.textContent = this.countdownSeconds;
        }
    }
    
    resetCountdown() {
        if (this.countdownInterval) {
            clearInterval(this.countdownInterval);
            this.countdownInterval = null;
        }
        this.countdownSeconds = 6;
        this.updateCountdown();
        this.startCountdown();
        console.log('🧪 Countdown reset to 6 seconds');
    }
    
    clearCountdown() {
        if (this.countdownInterval) {
            clearInterval(this.countdownInterval);
            this.countdownInterval = null;
        }
        console.log('🧪 Countdown stopped');
    }
    
    proceedToZocdoc() {
        console.log('🧪 TEST: Book on Zocdoc clicked - showing redirect state then restarting');
        
        // Clear countdown when manually clicked
        this.clearCountdown();
        
        // Show loading state like the real page
        this.showRedirectingState();
        
        // Instead of actually redirecting, restart after showing redirect state
        setTimeout(() => {
            console.log('🧪 Instead of redirecting, restarting animation');
            this.restartAnimation();
        }, 2000); // Show redirect state for 2 seconds then restart
    }
    
    showRedirectingState() {
        const button = this.manualRedirectBtn;
        const countdownText = document.getElementById('countdown-text');
        
        if (button) {
            // Keep button text as "Continue booking" - only disable and style it
            button.disabled = true;
            button.style.opacity = '0.7';
            button.style.background = '#e5e7eb';
            button.style.color = '#9ca3af';
        }
        
        if (countdownText) {
            countdownText.textContent = 'Redirecting...';
            countdownText.style.color = '#727272';
        }
        
        console.log('🧪 Showing redirect state - button text stays "Continue booking", countdown shows "Redirecting..."');
    }
    
    resetButtonState() {
        const button = this.manualRedirectBtn;
        const countdownText = document.getElementById('countdown-text');
        
        if (button) {
            // Button text should always be "Continue booking" in test environment
            button.textContent = 'Continue booking';
            button.disabled = false;
            button.style.opacity = '1';
            button.style.background = '';
            button.style.color = '';
        }
        
        if (countdownText) {
            countdownText.innerHTML = 'Redirecting in <span id="countdown">6</span> seconds';
            countdownText.style.color = '';
        }
        
        console.log('🧪 Reset button to original state - "Continue booking" text maintained');
    }
    
    restartAnimation() {
        console.log(`🧪 TEST: Restarting ENTIRE page animation for Version ${this.currentVersion}`);
        
        // Clear countdown during restart to prevent conflicts
        this.clearCountdown();
        
        // Show visual feedback that restart is happening
        const button = document.querySelector('.test-btn-main');
        if (button) {
            button.textContent = '🔄 Restarting...';
            button.disabled = true;
        }
        
        // Use the same method that works for version switching - force a DOM rebuild
        const currentVersion = this.currentVersion;
        
        // Step 1: Remove version class completely
        this.container.classList.remove('version-1', 'version-2', 'version-3');
        
        // Step 2: Add a temporary "restarting" class to force a complete reset
        this.container.classList.add('restarting-animation');
        
        // Step 3: Force multiple reflows to ensure state changes
        this.container.offsetHeight;
        document.body.offsetHeight;
        
        console.log('🧪 Removed all version classes, forcing reset...');
        
        // Step 4: Remove restart class and re-apply the current version after delay
        setTimeout(() => {
            this.container.classList.remove('restarting-animation');
            this.container.classList.add(`version-${currentVersion}`);
            
            console.log(`🧪 Re-applied version-${currentVersion} class - animations should restart now!`);
            
            // Reset button text
            if (button) {
                button.textContent = 'Restart Animation';
                button.disabled = false;
            }
            
            // Reset button state and restart countdown after animation restart
            this.resetButtonState();
            this.resetCountdown();
            
                        // For Version 1, verify negative margins are applied
                        if (currentVersion === 1) {
                setTimeout(() => {
                    const firstLogo = document.querySelector('.version-1 .brand-logos .logo-container:first-child');
                    if (firstLogo) {
                        const marginRight = window.getComputedStyle(firstLogo).marginRight;
                        console.log('🧪 First logo margin-right:', marginRight);
                        if (marginRight === '-24px') {
                                        console.log('✅ Version 1 full page restart - overlap applied correctly');
                                    } else {
                                        console.log('❌ Version 1 overlap not applied, got:', marginRight);
                        }
                    }
                }, 100);
                console.log('🧪 Version 1: Full page restart - logos should overlap, content should fade in');
            } else if (currentVersion === 2) {
                console.log('🧪 Version 2: Full page restart - logos separate, scaling/fading dots, content fades in');
            } else if (currentVersion === 3) {
                console.log('🧪 Version 3: Full page restart - logos close (±10px), 4px spaced sequential dots, faster progression');
            }
            
            console.log('🧪 FULL PAGE animation restart complete - watch for fresh animations!');
            
        }, 100);
    }
    
    
    // 🧪 EXPERIMENTAL ANIMATION FUNCTIONS - Add your custom animations here
    
    testBounceAnimation() {
        const logos = document.querySelectorAll('.logo-container');
        logos.forEach((logo, index) => {
            setTimeout(() => {
                logo.style.animation = 'bounceIn 1s ease-out forwards';
            }, index * 200);
        });
    }
    
    testColorChange() {
        const logos = document.querySelectorAll('.logo-container');
        logos.forEach(logo => {
            logo.style.background = 'linear-gradient(45deg, #4ecdc4, #45b7d1)';
            logo.style.boxShadow = '0 12px 48px rgba(76, 205, 196, 0.3)';
        });
    }
    
    testRotation() {
        const logos = document.querySelectorAll('.logo-container');
        logos.forEach((logo, index) => {
            const rotation = index === 0 ? '360deg' : '-360deg';
            logo.style.transform += ` rotate(${rotation})`;
            logo.style.transition = 'transform 1s ease-in-out';
        });
    }
    
    testScaleAnimation() {
        const logos = document.querySelectorAll('.logo-container');
        logos.forEach(logo => {
            logo.style.transform += ' scale(1.5)';
            logo.style.transition = 'transform 0.5s ease-out';
        });
    }
    
    testSlideFromTop() {
        const logos = document.querySelectorAll('.logo-container');
        logos.forEach((logo, index) => {
            logo.style.transform = 'translateY(-100px)';
            setTimeout(() => {
                logo.style.transform = 'translateY(0)';
                logo.style.transition = 'transform 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            }, index * 300);
        });
    }
    
    // Safe image preloading for test environment
    preloadImages() {
        const imagesToPreload = [
            'assets/healthgrades-logo.png',
            'assets/zocdoc-logo.svg'
        ];
        
        imagesToPreload.forEach(src => {
            const img = new Image();
            img.src = src;
        });
        
        console.log('🧪 TEST: Images preloaded');
    }
    
    trackTestPageView() {
        console.log('🧪 TEST: Page view tracked', {
            page: 'Healthgrades Logo Animation Test',
            timestamp: new Date().toISOString(),
            testMode: true
        });
    }
}

// Test-specific helper functions
function addTestKeyframe(name, keyframe) {
    const style = document.createElement('style');
    style.textContent = `@keyframes ${name} { ${keyframe} }`;
    document.head.appendChild(style);
    console.log(`🧪 TEST: Added keyframe "${name}"`);
}

function applyTestAnimation(selector, animationName, duration = '1s', easing = 'ease-out') {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        element.style.animation = `${animationName} ${duration} ${easing} forwards`;
    });
    console.log(`🧪 TEST: Applied "${animationName}" to ${elements.length} elements`);
}

// Initialize test environment when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.testInterstitialPage = new TestInterstitialPage();
});

// Test mode warning
console.log(`
🧪 ===================================
🧪 LOGO ANIMATION TEST ENVIRONMENT
🧪 ===================================
🧪 This is a safe testing environment.
🧪 No navigation will occur.
🧪 Experiment freely with animations!
🧪 
🧪 Keyboard shortcuts:
🧪 R - Restart animations
🧪 T - Toggle play/pause animations
🧪 ESC - Reset to original
🧪 ===================================
`);

// Export test functions for console access
if (typeof window !== 'undefined') {
    window.testAnimations = {
        bounce: () => window.testInterstitialPage.testBounceAnimation(),
        colorChange: () => window.testInterstitialPage.testColorChange(),
        rotation: () => window.testInterstitialPage.testRotation(),
        scale: () => window.testInterstitialPage.testScaleAnimation(),
        slideFromTop: () => window.testInterstitialPage.testSlideFromTop(),
        restart: () => window.testInterstitialPage.restartAnimation(),
        toggle: () => window.testInterstitialPage.toggleAnimation(),
        reset: () => window.testInterstitialPage.resetToOriginal()
    };
}
