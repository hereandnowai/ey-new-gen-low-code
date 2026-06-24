// 1. Base interface
interface Message {
  text: string;
  sender: "user" | "bot";
}

// 2. Inherited interface (inherits text and sender, and adds a timestamp)
interface DetailedMessage extends Message {
  timestamp: Date;
}

// 3. Function using the inherited interface
function displayMessage(message: DetailedMessage) {
  console.log(`${message.sender} (${message.timestamp.toLocaleTimeString()}): ${message.text}`);
}

// 4. Creating an object that satisfies the DetailedMessage interface
let userMessage: DetailedMessage = {
  text: "Hello TypeScript!",
  sender: "user",
  timestamp: new Date()
};

// Now we can pass this object to the function because it matches DetailedMessage
displayMessage(userMessage);

// a simple example of inheriting interfaces in typescript
// In the above example, 'DetailedMessage' inherits all the properties of the 'Message' interface
// and adds a new property 'timestamp'.
// The 'displayMessage' function expects an object that satisfies the 'DetailedMessage' interface,
// so we create an object 'userMessage' that has all the required properties.
// This is a powerful feature of TypeScript that allows you to create complex
// data structures by combining simpler ones.

// a simple code example of inheriting interfaces in typescript

interface Person {
    name: string;
    age: number;
}

interface Employee extends Person {
    employeeId: number;
}

function displayPerson(person: Person) {
    console.log(`${person.name} is ${person.age} years old.`);
}

let user: Person = {
    name: "John",
    age: 30
};

displayPerson(user);

let employee: Employee = {
    name: "Jane",
    age: 25,
    employeeId: 123
};

displayPerson(employee);
  