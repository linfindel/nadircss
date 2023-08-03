// DEMO

function changeFont(font) {
    document.body.className = `body-font-${font}`;

    var buttons = document.querySelectorAll('.segmented-button button');
    buttons.forEach(button => button.classList.remove('segmented-button-active'));

    document.getElementById(`demo-font-${font}`).classList.add("segmented-button-active");
}