window.onload = function() { main(); }
async function main() {

    var expandables = document.getElementsByClassName("expandable-button");
    var i;
    
    for (i = 0; i < expandables.length; i++) {
        expandables[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight){
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            } 
        });
    } 
}