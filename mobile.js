if (/Android|iPhone/i.test(navigator.userAgent)) {
    // User is on a mobile device
    console.log('User is on a mobile device.');

    open("https://nadir-software.github.io/nadircss/mobile.html", "_blank");
}

else {
    // User is not on a mobile device
    console.log('User is not on a mobile device.');
}