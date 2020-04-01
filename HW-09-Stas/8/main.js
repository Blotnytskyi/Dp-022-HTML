let amout = prompt('Please enter how much many do you have');
let price = prompt('Please enter chocolates price');
alert('You can buy ' + ((amout - (amout % price)) / price) + ' chocolates and change will be ' + (amout % price) + ' $');
