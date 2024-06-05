function switchStyle(title) {
    let i, a;
    for (i = 0; (a = document.getElementsByTagName("link")[i]); i++) {
        if (a.getAttribute("rel").indexOf("stylesheet") != -1 && a.getAttribute("title")) {
            a.disabled = true;
            if (a.getAttribute("title") == title) a.disabled = false;
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    let heading = document.getElementById("heading");
    let headingColor = heading.style.color;
    let headingBGColor = heading.style.backgroundColor;

    let paragraphs = document.getElementsByTagName("p");
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.color = headingColor;
        paragraphs[i].style.backgroundColor = headingBGColor;
    }
});