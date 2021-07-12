window.addEventListener("DOMcontentloaded", (event) => {
    let topbutton = document.getElementById("top");
    window.onscroll = () => {
        if (document.body.onscroll > 20 || document.documentElement.onscroll > 20) {
            topbutton.style.display = "block";
        } else {
            topbutton.style.display = "none";
        }
    }
})