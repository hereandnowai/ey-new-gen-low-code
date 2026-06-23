let salary = 50000; // number type

console.log("Employee Salary:", salary, "\n");

let bonus = 5000; // number type
console.log("Employee Bonus:", bonus, "\n")

console.log("Total Compensation: ", (salary + bonus))

let tax: number = 0.2;
let taxAmount: number = (salary + bonus) * tax;
let netSalary: number = (salary + bonus) - taxAmount;
let monthSalary: number = netSalary / 12;

console.log("Tax Amount: ", taxAmount, "\n");
console.log("Net Salary: ", netSalary, "\n");
console.log("Monthly Salary: ", monthSalary, "\n");