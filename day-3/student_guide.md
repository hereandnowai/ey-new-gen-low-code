# Student Guide: Build Your First AI Chatbot (React + Node.js + Azure OpenAI)

**Author:** Ruthran Raghavan  
**Designation:** Chief AI Scientist  
**Website:** [ruthranraghavan.com](https://ruthranraghavan.com)  

---

## Welcome, Future AI Engineers!
In this hands-on workshop, you are going to build a fully functioning, modern AI Chatbot from scratch. You will build a React frontend that runs in your browser, a Node.js server that runs on your local machine, and connect them both to the enterprise-grade **Azure OpenAI Foundry** portal!

---

## 1. Core Concepts Explained

### What is React?
React is a popular JavaScript library used to build interactive user interfaces. Instead of writing massive HTML pages, React lets us build small, reusable blocks called **Components**.
*   **State (`useState`):** This is React's "memory." When you update state (like adding a new message to your chat window), React instantly re-draws that part of the screen automatically without reloading the page.
*   **JSX/TSX:** A syntax extension that lets us write HTML-like elements directly inside our JavaScript/TypeScript files.

### What is TypeScript?
TypeScript is a layer built on top of JavaScript that adds **Type Safety**. It forces us to define the "shape" of our data (using interfaces). 
*   **Why use it?** If we declare that a message must contain `text` (a string) and a `sender` (user or bot), TypeScript will throw a red squiggly line in our editor if we make a typo like `msg.txt`. This prevents 90% of common beginner bugs before the code even runs!

### What is Node.js?
Normally, JavaScript only runs inside web browsers. **Node.js** is a runtime environment that allows us to run JavaScript directly on our computers (like a python script). We use it to build backend applications.

### What is Express?
Express is a fast, lightweight web framework for Node.js. It allows us to set up "listening doors" called **API Endpoints** (routes) like `POST /chat`. When a browser sends data to this endpoint, Express catches it and runs our backend code.

### Why do we need a Backend Server?
**Security!** To talk to Azure OpenAI, we need a secret API Key. If we put this key directly inside our frontend React code, anyone visiting our website could open their browser DevTools, inspect the source code, and steal our key. By running a private Node.js backend, we keep our keys completely hidden.

---

## 2. Project Folder Structure
Your final project will look like this:
```text
day-3/
├── backend/
│   ├── .env
│   ├── .env.example
│   ├── package.json
│   └── server.js
└── frontend/
    ├── package.json
    └── src/
        ├── App.tsx
        ├── App.css
        └── main.tsx
```

---

## 3. Step-by-Step Build Instructions

### Step A: Setting Up the Frontend (React)
1.  Open your terminal in your root directory and generate a new Vite React TypeScript project:
    ```bash
    npm create vite@latest frontend -- --template react-ts
    ```
2.  Navigate into your newly created frontend folder:
    ```bash
    cd frontend
    ```
3.  Install all the default frontend packages:
    ```bash
    npm install
    ```
4.  Open the project in VS Code. We will be working inside `src/App.tsx` and `src/App.css`.
5.  *Class Activity:* Your professor will guide you in writing the React layout (`App.tsx`) and styling (`App.css`) line-by-line.

---

### Step B: Setting Up the Backend (Node.js & Express)
1.  Open a new terminal window, navigate back to your root directory, create a `backend` folder, and enter it:
    ```bash
    cd ..
    mkdir backend
    cd backend
    ```
2.  We will create three files here:
    *   `package.json` (Our project blueprint)
    *   `server.js` (Our Express API code)
    *   `.env` (Our private API key storage)
3.  *Class Activity:* Follow along as we write our backend server.
4.  Install the backend dependencies:
    ```bash
    npm install
    ```

---

## 4. Running the Application

### 1. Start the React Frontend
In your frontend terminal, run the development server:
```bash
npm run dev
```
Open the URL printed in the terminal (usually `http://localhost:5173`) to view your interface.

### 2. Start the Backend Server
In your backend terminal, start the API:
```bash
npm start
```

Now type a message in your browser, press Send, and watch your AI chatbot respond!
