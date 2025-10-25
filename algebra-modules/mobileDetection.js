// algebra-modules/mobileDetection.js
class MobileDetection {
    static isMobileDevice() {
        // Check for touch capability and mobile user agents
        const hasTouchScreen = 'ontouchstart' in window ||
                               navigator.maxTouchPoints > 0 ||
                               navigator.msMaxTouchPoints > 0;

        const mobileUserAgents = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
        const isMobileUA = mobileUserAgents.test(navigator.userAgent);

        // Additional check for small screens (typical mobile/tablet)
        const isSmallScreen = window.innerWidth <= 1024;

        return (hasTouchScreen && isMobileUA) || (hasTouchScreen && isSmallScreen);
    }

    static isAndroid() {
        return /Android/i.test(navigator.userAgent);
    }

    static isIOS() {
        return /iPhone|iPad|iPod/i.test(navigator.userAgent);
    }

    static getDeviceType() {
        if (this.isIOS()) return 'ios';
        if (this.isAndroid()) return 'android';
        if (this.isMobileDevice()) return 'mobile';
        return 'desktop';
    }
}
