let number = prompt('Please enter three-digit number');
alert('' + (number % 10) + '' + (((number % 100) - ((number % 100) % 10)) / 10) + '' + ((number - (number % 100)) / 100));

