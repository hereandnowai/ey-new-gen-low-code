// Activity 1: Create a new React app using TypeScript and set up the project structure.
// function App() {
//   return (
//     <h1>Hello Power Apps Makers, Welcome to React!</h1>
//   )
// }

// export default App

// Activity 2: Create a new React app using TypeScript and set up the project structure.
// Add a new component called "Welcome" that displays a welcome message.
// Import and use the "Welcome" component in the App component.
// function App() {
//   return (
//     <div>
//       <h1>Hello Power Apps Makers</h1>
//       <p>Welcome to React!</p>
//     </div>
    
//   )
// }

// export default App

// Activity 3: Create a reaact app with counter
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default App