f1.onclick = function () {
    // f1.style.width = '400px';
    // f1.style.height = '500px';
    // f1.style.marginTop = '-300px';
    if (f1.style.height == '500px') {
        f1.style.height = '200px';
        f1.style.marginTop = '0px';
    }
    else {
        f1.style.height = '500px';
        f1.style.marginTop = '-300px';
    }

    // f1.style.height = '300px';
    // f1.style.gridRowStart = '2';
    // f1.style.gridRowEnd = '4';
}

f2.onclick = function () {
    // f2.style.gridColumnStart = '1';
    // f2.style.gridColumnEnd = '4';
    f2.style.gridRowStart = '4';
    f2.style.gridRowEnd = '1';

}