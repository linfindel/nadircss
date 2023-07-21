function changeFont(font) {
    document.body.className = `body-font-${font}`;

    var buttons = document.querySelectorAll('.segmented-button button');
    buttons.forEach(button => button.classList.remove('segmented-button-active'));

    document.getElementById(`demo-font-${font}`).classList.add("segmented-button-active");
}

function chip(action) {
    if (action == "chip") {
        if (!document.getElementById("demo-chip").innerHTML.includes("span")) {
            document.getElementById("demo-chip").innerHTML = "<span class='material-symbols-rounded'>done</span>Chip";
        }

        else {
            document.getElementById("demo-chip").innerHTML = "Chip";
        }
    }

    else {
        if (!document.getElementById("demo-chip-input").innerHTML.includes("span")) {
            document.getElementById("demo-chip-input").innerHTML += "<span class='material-symbols-rounded'>close</span>"
        }

        else {
            document.getElementById("demo-chip-input").innerHTML = "Input";
        }
    }
}