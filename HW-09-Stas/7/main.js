let fileSize = 820;
let flashSize = prompt('Please enter fleshdrive size');
alert('You can store ' + ((flashSize - (flashSize % fileSize)) / fileSize) + ' files with size ' + fileSize + 'mb');
