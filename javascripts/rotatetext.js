function rotateRandom() {
    var rotatedelemtents = document.querySelectorAll(".rotated"); 
    if (window.innerWidth <= 700) {
        rotatedelemtents.classList.remove("rotated");
    }
    rotatedelemtents.forEach(rotatedelement => {
        rotationDegree = (Math.floor(Math.random() * 6)-3) ;
        rotatedelement.style.rotate = rotationDegree+"deg"; 
    }
    )  
}
rotateRandom();