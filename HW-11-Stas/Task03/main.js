let line = String(prompt("Please enter string"));
alert(DNA(line));

function DNA(line) {
    let lineLength = line.length;
    let str = line.split("");
    let count = 1;
    let longWord = 0;
    let space = ' ';
    let i = 0;
    let char;
    for (i = 0; i < lineLength; i++) {
        char = String(str[i]);
        console.log(char);
        if (char === space) {
            if (longWord <= count) {
                longWord = count - 1;
                count = 1;
                console.log('Longest ' + longWord);
            }
            else { count = 1; }
        }
        else {
            console.log("count " + count);
            if (i == (lineLength - 1)) {
                if (longWord <= count) {
                    longWord = count;
                }
                break;
            }
            if (count == lineLength) {
                longWord = count;
                break;
            }
            count++;
        }
    }
    console.log("longest word " + longWord);
    return longWord;
}