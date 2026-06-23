// what is interface in typescript?
// An interface is a way to define the shape of an object in TypeScript.
// It allows you to specify the properties and methods that an object should have,
// without providing an implementation.
// Interfaces are used for type-checking and can be implemented by classes or used to type objects.

interface Employee {
    name: string;
    age: number;
    department: string;
    salary: number;
    bonus: number;
    isApproved: boolean;
    skills: string[];
}

// Example of using the Employee interface
let employee2: Employee = {
    name: "Gowri",
    age: 30,
    department: "Engineering",
    salary: 50000,
    bonus: 5000,
    isApproved: true,
    skills: ["JavaScript", "TypeScript", "React", "Node.js"]
};

console.log("Employee Profile: ", employee2, "\n");