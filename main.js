var popup1 = document.getElementById("isPopup1");
var popup2 = document.getElementById("isPopup2");
var popup3 = document.getElementById("isPopup3");
var butt1 = document.getElementById("isButton1");
var butt2 = document.getElementById("isButton2");
var butt3 = document.getElementById("isButton3");
var back = document.getElementById("main_content");

document.addEventListener("click", function(event) {
    if ((!butt1.contains(event.target)) && (popup1.style.display == "block") ) {
        document.getElementById("isPopup1").style.display = "none";
        document.getElementById("main_content").style.opacity = 1;
    }
    if ((!butt2.contains(event.target)) && (popup2.style.display == "block") ) {
        document.getElementById("isPopup2").style.display = "none";
        document.getElementById("main_content").style.opacity = 1;
    }
    if ((!butt3.contains(event.target)) && (popup3.style.display == "block") ) {
        document.getElementById("isPopup3").style.display = "none";
        document.getElementById("main_content").style.opacity = 1;
    }
});

document.getElementById("isButton1").onclick = function () {
    popup1.style.display = "block";
    back.style.opacity = 0.3;
}
document.getElementById("isButton2").onclick = function () {
    popup2.style.display = "block";
    back.style.opacity = 0.3;
}
document.getElementById("isButton3").onclick = function () {
    popup3.style.display = "block";
    back.style.opacity = 0.3;
}
