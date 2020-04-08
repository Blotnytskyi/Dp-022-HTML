let oneside = String(prompt("Please enter string"));
alert(DNA(oneside));

function DNA(oneside) {
    let lineLength = oneside.length;
    let str = oneside.split("");
    for (i = 0; i <= lineLength; i++) {
        switch (str[i]) {
            case "A":
                str.splice(i, 1, "T");
                break;
            case "T":
                str.splice(i, 1, "A");
                break;
            case "G":
                str.splice(i, 1, "C");
                break;
            case "C":
                str.splice(i, 1, "G");
                break;
        }
    }
    return str.join("")
}