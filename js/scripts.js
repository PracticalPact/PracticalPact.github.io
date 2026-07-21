window.onload = main;

function main() {
    const expandables = document.getElementsByClassName("expandable-button");

    for (const button of expandables) {
        button.addEventListener("click", function () {
            this.classList.toggle("active");

            const content = this.nextElementSibling;

            content.style.maxHeight = content.style.maxHeight
                ? null
                : content.scrollHeight + "px";
        });
    }

    const overlay = document.getElementById("overlay");
    const overlayImg = document.getElementById("overlay-img");

    if (!overlay || !overlayImg) return;

    document.querySelectorAll(".zoomable").forEach(img => {
        img.addEventListener("click", () => {
            overlayImg.src = img.src;
            overlay.style.display = "flex";
        });
    });
}

function closeImage() {
    const overlay = document.getElementById("overlay");
    const overlayImg = document.getElementById("overlay-img");

    if (!overlay || !overlayImg) return;

    overlay.style.display = "none";
    overlayImg.src = "";
}