let employees = [
    "Gowri",
    "Rahul",
    "Anand",
    "Parthiban",
    "Bhagya"
]

console.log("Employee List: ", employees, "\n");

let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Gowri", "Rahul", "Anand", "Parthiban", "Bhagya"];
let mixed: (number | string)[] = [1, "Gowri", 2, "Rahul", 3, "Anand", 4, "Parthiban", 5, "Bhagya"];

console.log("Numbers: ", numbers, "\n");
console.log("Names: ", names, "\n");
console.log("Mixed: ", mixed, "\n");

// how to slice an array
let sliceNumbers = numbers.slice(1, 4);
console.log("Sliced Numbers: ", sliceNumbers, "\n");

// how to push an element to an array
numbers.push(6);
console.log("Numbers Array after push: ", numbers, "\n");

// how to pop an element from an array
let poppedNumber = numbers.pop();
console.log("Popped Number: ", poppedNumber, "\n");
console.log("Numbers Array after pop: ", numbers, "\n");