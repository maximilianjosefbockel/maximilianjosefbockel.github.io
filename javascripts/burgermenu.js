/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function toggleMenu() {
    var navListElement = document.getElementById("myHeader-nav");
    navListElement.classList.toggle("open")
}

/* */
window.onresize = function resizeWindow() {
    if (window.innerWidth >= 700) {
        var navListElement = document.getElementById("myHeader-nav");
        navListElement.classList.remove("open");
    }
}