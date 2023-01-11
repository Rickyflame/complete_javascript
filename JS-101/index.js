//this represents a comment.
let Fname = "Ricky";
console.log(name);
//Rules for names should not be reserved keywords
//should be meaningful
//Cannot start with a number, space or hyphen
//are case-sensitive
let firstame = 'Rogue'; // string literal
//to declare multiple variable in one line
let FirstNae = 'Fast', Lastname = 'hamedi';
const interestRate = 0.3;
console.log(interestRate);
let agre = '30'; // a number literal
let isApproved = true; //boolean literal
let firstName = undefined;
let selectedColor = null;
//JS is a dynamic language
let person = {
    name: 'mosh',
    age: 30
};
//dot notation
person.name = 'John';
//Bracket notation
person['name'] = 'Mary';

console.log(person.name);
let selectedColors = ['red', 'blue'];
selectedColors[2] = '1';
console.log(selectedColors.length);

//performing a task
function greet(name, lastNAme) {
    console.log('hello world ' + name + ' ' + lastNAme);
}

greet('John', 'Semos');
greet('mary', 'Wahome');
//function calculates a value
function square (number) {
    return number * number;
}


console.log(square(5));