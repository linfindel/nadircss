function isMobileDevice() {
    return typeof window.orientation !== 'undefined' || navigator.userAgent.indexOf('Mobile') !== -1;
}

if (isMobileDevice()) {
    // User is on a mobile device
    console.log('User is on a mobile device.');
} else {
    // User is not on a mobile device
    console.log('User is not on a mobile device.');
}