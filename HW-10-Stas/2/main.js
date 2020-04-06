let number;
do {
    do {
        number = Number(prompt('Please enter 6-digit ticket number'));
    } while (number > 999999)
} while (number <= 0)

let tempNumeral;
let tempNumber = number;
let sum123 = 0;
let sum456 = 0;

for (let i = 1; i <= 6; i++) {
    tempNumeral = tempNumber % 10;
    // alert(tempNumeral + ' ' + i);

    if (i <= 3) {
        sum456 = sum456 + tempNumeral;
        // alert(sum456);
    }
    else {
        sum123 = sum123 + tempNumeral;
        // alert(sum123);
    }

    tempNumber = (tempNumber - tempNumeral) / 10;
    // alert(tempNumber);

}

if (sum123 == sum456) { alert('You have lucky ticket') } else { alert('Sorry your ticket is not lucky') }

alert(sum123 + ' ' + sum456);