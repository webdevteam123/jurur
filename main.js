const header = document.querySelector("header");
let isChanged = false;
window.addEventListener("scroll", e => {
    console.log(window.scrollY, isChanged);
    if(window.scrollY > 100 && !isChanged) {
        header.classList.add("white");
        header.classList.remove("trans");
        isChanged = true;
    }
    if(window.scrollY <= 100 && isChanged) {
        header.classList.add("trans");
        header.classList.remove("white");
        isChanged = false;
    }
})