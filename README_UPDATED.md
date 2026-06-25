# Next-Gen Low-Code AI Engineering

> **Power Apps Vibe Coding + Dataverse + Model Context Protocol (MCP) Server + Agentic Workflows + React/TypeScript + Pro-Code Extensions**
>
> A professional 40-hour training curriculum designed to bridge the gap between low-code ease and pro-code capabilities, enabling participants to build production-style AI-powered business applications.

---

## 🌟 Overview

This repository contains the training materials, labs, and resources for the **Next-Gen Low-Code AI Engineering** program. The training guides participants from natural language app generation to enterprise-grade application design, governance, deployment, and human-agent collaboration.

### Key Highlights
- **Low-Code AI App Development**: Harnessing Power Apps Vibe Coding.
- **Pro-Code Extensions**: Opening AI-generated Power Apps in VS Code, customizing with React & TypeScript.
- **AI Agent Integration**: Integrating Model Context Protocol (MCP) servers and tools.
- **Enterprise Readiness**: Dataverse modeling, Application Lifecycle Management (ALM), and governance.

---

## 👨‍🏫 Author & Attribution

This curriculum and content was created by:
* **Ruthran Raghavan**  
  *Chief AI Scientist, HERE AND NOW AI*  
  *Website: [ruthranraghavan.com](https://ruthranraghavan.com)*

---

## 📅 10-Day Training Schedule

| Day | Focus Area | Major Activities |
| :--- | :--- | :--- |
| **Day 1** | Foundations of AI Engineering & TypeScript Basics | Introduction to AI-assisted low-code engineering (Vibe Coding, Dataverse, MCP, agents). Fundamentals of TypeScript syntax (variables, basic types, and interfaces). Covered in `day-1` folder. |
| **Day 2** | Advanced TypeScript & React Essentials | TypeScript advanced concepts and React functional components (JSX, props, state with `useState`, and event handlers). Covered in `day-2` folder. |
| **Day 3** | Building Your First AI Chatbot | Designing a React frontend and Node.js/Express backend. Connecting to Azure OpenAI Foundry, secure API key management, and routing. Covered in `day-3` folder. |
| **Day 4** | Advanced Chatbot Capabilities | Implementing system prompts, multi-turn chat history, memory management, and stateful AI assistant integration. Covered in `day-4` folder. |
| **Day 5** | Dataverse Fundamentals for Vibe Apps | Understanding Dataverse tables, columns, records, relationships, lookups, choices, CRUD operations, and app regeneration. |
| **Day 6** | Advanced Dataverse & Introduction to MCP | Multi-table data modeling, validation rules, status management, audit history, and introductory Model Context Protocol (MCP) concepts. |
| **Day 7** | MCP Architecture & Custom Server Fundamentals | Human-agent collaboration patterns, human-in-the-loop workflows, and starting custom MCP server development using JSON-RPC. |
| **Day 8** | Custom MCP Server Development & Testing | Defining custom tools, input schemas, output structures, validation, error handling, and local tool testing. |
| **Day 9** | Connecting MCP Tools with Power Apps | Integrating MCP tools into Power Apps, handling tool invocation pipelines, passing context, and managing human approval gates. |
| **Day 10** | Advanced MCP, Deployment, ALM & Governance | RAG, memory, logging, monitoring, environment strategy, solution packaging, production readiness, and final architecture/workflow preparation. |

---

## 📘 Detailed 40-Hour Curriculum

### Day 1: Foundations of AI Engineering & TypeScript Basics
* **Focus Area**: Overview of next-gen AI engineering and introductory programming concepts required for extending low-code solutions.
* **Topics Covered**:
  * Landscape of AI-assisted application development.
  * Role of Vibe Coding, Dataverse, MCP, and autonomous agents.
  * TypeScript Basics: variables, basic types (string, number, boolean, array), and interfaces.
* **Hands-on Activity**: Setting up the environment and executing the introductory TypeScript exercises.
* **Repository Reference**: Materials are located in [day-1](file:///Users/hnai/Desktop/ey-new-gen-low-code/day-1) (includes `Module1_AI_LowCode_Engineering.pdf` and `1-typescript-tuto`).

### Day 2: Advanced TypeScript & React Essentials
* **Focus Area**: Expanding language skills to building user interfaces with React.
* **Topics Covered**:
  * TypeScript advanced concepts: custom types, functions, and structured data shapes.
  * React Basics: functional components, JSX syntax, props, and state management using `useState`.
  * Event handling (`onClick`, `onChange`) and comparing low-code components with React components.
* **Hands-on Activity**: Building and styling interactive React components locally.
* **Repository Reference**: Materials are located in [day-2](file:///Users/hnai/Desktop/ey-new-gen-low-code/day-2) (includes `1-typescript-tuto`, `2-typescript-concepts`, and `3-react-demo`).

### Day 3: Building Your First AI Chatbot
* **Focus Area**: Integrating frontend and backend systems with enterprise LLM endpoints.
* **Topics Covered**:
  * Architecture of web applications connecting to AI models.
  * Backend development with Node.js and Express.
  * Secure API key management using environment variables.
  * Connecting to Azure OpenAI Foundry and managing chat endpoints.
* **Hands-on Activity**: Setting up a React frontend and Node.js backend to exchange messages with Azure OpenAI.
* **Repository Reference**: Materials are located in [day-3](file:///Users/hnai/Desktop/ey-new-gen-low-code/day-3) (includes `AI_Chatbot_Training.pdf`, `architecture.svg`, `backend`, `frontend`, and `student_guide.md`).

### Day 4: Advanced Chatbot Capabilities
* **Focus Area**: Adding state, context, and specialized behavior to AI conversational agents.
* **Topics Covered**:
  * Formatting and managing system prompts for domain specialization.
  * Implementing conversation memory by passing historical message arrays.
  * Node.js and Express route customization for stateful interactions.
* **Hands-on Activity**: Enhancing the chatbot backend to support system role instructions and multi-turn conversational history.
* **Repository Reference**: Materials are located in [day-4](file:///Users/hnai/Desktop/ey-new-gen-low-code/day-4) (includes `backend` and `frontend`).

### Day 5: Dataverse Fundamentals for Vibe Apps
* **Timing**: 10 am to 2 pm (4 Hours)
* **Focus Area**: Designing and implementing structured business data repositories using Microsoft Dataverse.
* **Topics Covered**:
  * What is Dataverse?
  * Tables, columns, records, and relationships (one-to-many, many-to-one).
  * Lookups and choice columns.
  * Draft tables and published schema.
  * CRUD operations in Power Apps.
  * Schema modification and app regeneration.
* **Hands-on Activity**: **Lab**: Design and implement Dataverse tables for Employee, Department, Vendor, Purchase Request, and Approval History.
* **Expected Outcome**: Participants can create Dataverse-backed business applications with proper data modeling and CRUD functionality.

### Day 6: Advanced Dataverse & Introduction to MCP
* **Timing**: 10 am to 2 pm (4 Hours)
* **Focus Area**: Constructing normalized data architectures and understanding the Model Context Protocol (MCP).
* **Topics Covered**:
  * **Module 7: Advanced Dataverse Data Modeling and Business Rules** (10 am to 12 pm)
    * Multi-table data modeling and data normalization basics.
    * Designing relationships for business workflows.
    * Validation rules, status management, and audit-style history tables.
    * Data model changes, schema publishing, and app impact.
  * **Module 8: Introduction to MCP Architecture and Agent Tool Usage** (1 pm to 2 pm - Session 1)
    * What is MCP?
    * MCP Server, Tools, Resources, and Prompts.
    * Tool discovery by agents and how agents invoke tools.
* **Hands-on Activity**: **Lab**: Extend the Procurement App data model with approval levels, budget category, cost center, comments, approval history, and attachment metadata (12 pm to 1 pm).
* **Expected Outcome**: Participants can design Dataverse schemas that support real-world business workflows and comprehend the fundamentals of MCP.

### Day 7: MCP Architecture & Custom Server Fundamentals
* **Timing**: 10 am to 2 pm (4 Hours)
* **Focus Area**: Human-agent interaction patterns and the basics of building custom integration servers.
* **Topics Covered**:
  * **Module 8: Introduction to MCP Architecture and Agent Tool Usage** (10 am to 11 am - Session 2)
    * App skills and external capability exposure.
    * Human-agent collaboration patterns and human-in-the-loop workflows.
    * Autonomous workflow examples.
  * **Module 9: Building a Custom MCP Server** (1 pm to 2 pm - Session 1)
    * MCP server development fundamentals.
    * MCP protocol basics and JSON-RPC communication.
* **Hands-on Activity**: **Case Activity**: Agent-assisted vendor validation where an agent checks vendor status, spending threshold, and returns an approval recommendation (11 am to 1 pm).
* **Expected Outcome**: Participants understand where MCP fits in AI-powered business applications and the basics of JSON-RPC communication.

### Day 8: Custom MCP Server Development & Testing
* **Timing**: 10 am to 2 pm (4 Hours)
* **Focus Area**: Writing, validating, and testing custom business tools within an MCP server.
* **Topics Covered**:
  * **Module 9: Building a Custom MCP Server** (10 am to 12 pm - Session 2)
    * Defining custom tools, tool input schemas, and tool output structures.
    * Input validation, error handling, and testing MCP tools locally.
* **Hands-on Activity**: **Lab**: Build an MCP server with tools such as `validate_vendor`, `calculate_approval_level`, and `check_budget_availability` (12 pm to 2 pm).
* **Expected Outcome**: Participants can build and run a custom MCP server with 2-3 business tools.

### Day 9: Connecting MCP Tools with Power Apps
* **Timing**: 10 am to 2 pm (4 Hours)
* **Focus Area**: Integrating custom API and agentic capabilities directly into low-code user interfaces.
* **Topics Covered**:
  * **Module 10: Connecting MCP Tools with Power Apps and Agents** (10 am to 12 pm)
    * MCP tool invocation pipeline.
    * Connecting Power Apps with external tools.
    * Agent discovery of MCP tools and passing context from Power Apps to MCP tools.
    * Returning tool results to the app or agent.
    * Error handling, retry logic, and secure endpoint considerations.
    * Human approval before tool execution.
* **Hands-on Activity**: **Lab**: Connect the Procurement App with custom MCP tools for vendor validation, budget checking, approval recommendation, and status update suggestion (12 pm to 2 pm).
* **Expected Outcome**: Participants can connect MCP tools with Power Apps and agentic workflows.

### Day 10: Advanced MCP, Deployment, ALM & Governance
* **Timing**: 10 am to 2 pm (4 Hours)
* **Focus Area**: Enterprise readiness, deployment, lifecycle management, and final project packaging.
* **Topics Covered**:
  * **Module 11: Advanced MCP Capabilities** (10 am to 11 am)
    * RAG and document retrieval before tool execution.
    * Memory, stateful interactions, context injection, and logging tool calls.
    * Monitoring agent actions, secure MCP endpoints, and authorization for tool access.
    * Governance policies, approval gates, and audit trails.
  * **Module 12: Deployment, ALM, Governance, and Enterprise Readiness** (12 pm to 1 pm)
    * Deployment considerations and ALM for AI-powered Power Apps.
    * Versioning of apps and components, and managing Vibe apps, Dataverse schemas, and MCP servers together.
    * Version control for VS Code pro-code extensions (Git).
    * Environment strategy, solution packaging, security reviews, and production readiness checklists.
* **Hands-on Activities**:
  * **Lab**: Add logging, error handling, access checks, basic monitoring, human approval, and RAG-style knowledge lookup before recommendations (11 am to 12 pm).
  * **Activity**: Prepare architecture view, data model view, app workflow, MCP tool list, agent workflow, governance controls, known limitations, and future improvement areas (1 pm to 2 pm).
* **Expected Outcome**: Participants understand how to transition from a prototype to a controlled enterprise agentic application.

---

## 🏆 Capstone Project: Procurement Approval Assistant

Build and present a working production-style business application using Power Apps Vibe Coding, Dataverse, custom MCP tools, and agentic workflows.

### 📊 Capstone Data Model
- **Employee**: Stores employee information.
- **Department**: Stores department details.
- **Vendor**: Stores vendor information.
- **Purchase Request**: Stores procurement request details.
- **Approval History**: Tracks approval decisions.
- **Policy Reference**: Stores policy or rule references.
- **Agent Action Log**: Tracks agent and MCP tool activity.

### 🛠️ Capstone MCP Tools
- `validate_vendor`: Checks vendor status.
- `check_budget`: Checks department budget availability.
- `classify_request_risk`: Classifies procurement risk.
- `recommend_approval_path`: Suggests approval workflow.
- `retrieve_policy_guidance`: Retrieves policy guidance before recommendation.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
