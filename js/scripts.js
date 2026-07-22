window.onload = main;

function main() {
    const expandables = document.querySelectorAll(".expandable-button");

    expandables.forEach(button => {
        button.addEventListener("click", function () {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("open");
        });
    });

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