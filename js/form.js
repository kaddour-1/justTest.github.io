const formControl = document.querySelectorAll(".form-control");
formControl.forEach(input => {
    input.addEventListener("focus", animate);
    input.addEventListener("blur", animate);
});

function animate(event) {
    if (event.type == "focus") {
        this.parentElement.classList.add("focused");
    } else {
        this.parentElement.classList.remove("focused");
    }
}
