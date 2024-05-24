const numbers = [45, 4, 9, 16, 25];

let txt ="";
numbers.forEach(myFunction);
console.log(txt);

function myFunction(value) {
  txt += value + "\n"; 
}

// const numbers = [45, 4, 9, 16, 25];

let text = "";
for (let i = 0; i < numbers.length; i++) {
  text += numbers[i] + "\n";
}
console.log(text);
