// let text = String('aaaAAA1111');
let text = String(prompt("Please enter string"));
alert(getDuplicates(text));

function getDuplicates(text) {
    let str = text.toLowerCase();
    let lineLength = str.length;
    let cheracters = str.split("");
    let count = 1;
    let i = 0;
    let j = 0;
    let result = new Array();
    for (j = 0; j < (lineLength - 1); j++) {
        count = 1;
        for (i = j + 1; i <= (lineLength - 1); i++) {
            if (cheracters[j] == cheracters[i]) {
                count++;
                cheracters.splice(i, 1);
                lineLength--;
                i--;
            }
        }
        if (count >= 2) console.log(cheracters[j] + ' ' + count);
        result.push(cheracters[j], count);
    }
    return result;
}
