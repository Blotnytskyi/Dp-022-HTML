buttonAboutMe.onclick = function () {
    menuAboutMe.style.opacity = "1";
    menuAboutMe.style.zIndex = "1";
    menuAboutMe.style.width = "100vw";
    menuAboutMe.style.height = "100vh";
    crossButton.style.height = "75px";
    crossButton.style.width = "75px";
}

crossButton.onclick = function () {
    menuAboutMe.style.opacity = "0";
    menuAboutMe.style.zIndex = "0";
    menuAboutMe.style.width = "0";
    menuAboutMe.style.height = "0";

    crossButton.style.height = "0";
    crossButton.style.width = "0";
}

tabhtml.onclick = function () {
    if (tabhtml.style.height == "650px") {
        tabhtml.style.height = "150px"
        tabhtml.style.marginTop = '0px';
    } else {
        tabhtml.style.height = "650px"
        tabhtml.style.marginTop = '-500px';
    }

}

tabcss.onclick = function () {
    if (tabcss.style.height == "700px") {
        tabcss.style.height = "100px"
        tabcss.style.marginTop = '0px';
    } else {
        tabcss.style.height = "700px"
        tabcss.style.marginTop = '-550px';
    }
    let h = returnStyle(document.getElementById("tabhtml"), "height")
    if (h === "150px") {
        tabhtml.classList.toggle('blank1');
    }
    tabcss.classList.toggle('open');
}

tabjs.onclick = function () {
    if (tabjs.style.height == "750px") {
        tabjs.style.height = "50px"
        tabjs.style.marginTop = '0px';
    } else {
        tabjs.style.height = "750px"
        tabjs.style.marginTop = '-600px';
    }
    let h = returnStyle(document.getElementById("tabhtml"), "height")
    if (h === "150px") {
        tabhtml.classList.toggle('blank1');
    }
    let h2 = returnStyle(document.getElementById("tabcss"), "height")
    if (h2 === "100px") {
        tabcss.classList.toggle('blank2');
    }

    tabjs.classList.toggle('openjs');
}

function returnStyle(element, typestyle) {
    return "getComputedStyle" in window ?
        getComputedStyle(element, null)[typestyle] :
        element.currentStyle[typestyle];
};

$(window).on('load', function () {

    $(".loader_inner").delay(5000).fadeOut();
    $(".loader").delay(1000).fadeOut("slow");

});


