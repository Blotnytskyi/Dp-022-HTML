buttonAbout.onclick = function (){
    menuAbout.style.opacity = "1";
    menuAbout.style.zIndex = "1";
    buttonAbout.style.zIndex = "-1";
}

closeButton.onclick = function (){
    menuAbout.style.opacity = "0";
    menuAbout.style.zIndex = "0";
    buttonAbout.style.zIndex = "1";
}


