// what is a function in typescript
// A function is a block of code that performs a specific task and can be called multiple times.
// In TypeScript, functions can have typed parameters and return types, which helps catch errors at compile time.

function calculateSalary(
    salary: number,
    bonus: number,
    taxRate: number
){
    let taxAmount: number = (salary + bonus) * taxRate;
    let netSalary: number = (salary + bonus) - taxAmount;
    return netSalary
}

console.log("Total Compensation: ", calculateSalary(50000, 5000, 0.2), "\n");

