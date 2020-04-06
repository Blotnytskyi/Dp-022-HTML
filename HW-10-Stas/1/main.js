
let length;
let width;
let height;
let roomVolume;
let canNumber;
const paintVolume = 16;
do {
    do {
        length = Number(prompt('Please enter length in meters, equal or less than 1000 and bigger then 0'));
    } while (length > 1000)
} while (length <= 0)

do {
    do {
        width = Number(prompt('Please enter width in meters, equal or less than 1000 and bigger then 0'));
    } while (width > 1000)
} while (width <= 0)

do {
    do {
        height = Number(prompt('Please enter height in meters, equal or less than 1000 and bigger then 0'));
    } while (height > 1000)
} while (width <= 0)


roomVolume = length * width * height;
if ((roomVolume % paintVolume) > 0) {
    canNumber = ((roomVolume - (roomVolume % paintVolume)) / paintVolume) + 1;
}
else {
    canNumber = roomVolume / paintVolume
}

alert('Number of paint can is equal to ' + canNumber);
