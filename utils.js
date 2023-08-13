// DEMO

function demoChangeFont(font) {
    document.body.className = `body-font-${font}`;

    var buttons = document.querySelectorAll('.segmented-button button');
    buttons.forEach(button => button.classList.remove('segmented-button-active'));

    document.getElementById(`demo-font-${font}`).classList.add("segmented-button-active");
}

// PROD

function extendedInputMenu(elementID, thisID) {
    const menu = document.getElementById(elementID);

    if (menu.classList.contains("input-extended-menu-closed")) {
        document.getElementById(thisID).innerText = "menu_open";

        menu.style.height = "100%";
        menu.style.marginTop = "1rem";
        menu.style.opacity = 1;
        menu.style.padding = "2.5rem";
        menu.style.pointerEvents = "all";

        menu.classList.remove("input-extended-menu-closed");
    }

    else {
        document.getElementById(thisID).innerText = "menu";

        menu.style.height = 0;
        menu.style.marginTop = 0;
        menu.style.opacity = 0;
        menu.style.padding = 0;
        menu.style.pointerEvents = "none";

        menu.classList.add("input-extended-menu-closed");
    }
}