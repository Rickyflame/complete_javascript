const markWeight = 78;
const johnWeight = 92;
const markHeight = 1.69;
const johnHeight = 1.76;

let markBMI = markWeight / (markHeight ** 2);
let JohnBMI = johnWeight / (johnHeight ** 2);
console.log(markBMI, JohnBMI);
let higher;
if (markBMI < JohnBMI) {
    higher = `Marks BMI (${markBMI}) is lower than john's (${JohnBMI})`
} else {
    higher = `John's BMI (${JohnBMI}) is higher than mark's (${markBMI})`
}
console.log(higher);