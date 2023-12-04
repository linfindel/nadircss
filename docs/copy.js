function copy(id) {
    navigator.clipboard.writeText(document.getElementById(id).innerHTML)
    .then(() => {
        document.getElementById(`${id}-trigger-icon`).innerText = "done";
        document.getElementById(`${id}-trigger-text`).innerText = "HTML copied to clipboard";
        document.getElementById(`${id}-trigger`).className = "button-success";

        setTimeout(() => {
            document.getElementById(`${id}-trigger-icon`).innerText = "content_copy";
            document.getElementById(`${id}-trigger-text`).innerText = "Copy";
            document.getElementById(`${id}-trigger`).className = "";
        }, 2500);
    })
    .catch(error => {
        console.error('Error copying to clipboard:', error);
    });
}