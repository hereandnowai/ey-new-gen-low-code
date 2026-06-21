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
  *Chief AI Scientist, Here and Now AI*  
  *Website: [ruthranraghavan.com](https://ruthranraghavan.com)*

---

## 📅 5-Day Training Schedule

| Day | Focus Area | Major Activities |
| :--- | :--- | :--- |
| **Day 1** | Foundations & Vibe Coding | Program introduction, AI-driven low-code engineering, Power Apps Vibe Coding fundamentals, TypeScript & React essentials, simple app lab, prompting patterns. |
| **Day 2** | Complex Apps & Dataverse / Vibe to Pro-Code | Exporting Vibe apps to VS Code, complex AI-driven app generation, multi-screen business app, Dataverse fundamentals, tables and relationships lab. |
| **Day 3** | Advanced Dataverse & MCP Fundamentals | Advanced Dataverse modeling, CRUD and schema publishing, MCP architecture, agent-assisted vendor validation, capstone planning. |
| **Day 4** | Custom MCP Server & Integration | Building a custom MCP server, creating MCP tools, connecting MCP tools with Power Apps and agents, invoking tools from app workflows. |
| **Day 5** | Advanced Capabilities, Governance & Capstone | RAG, memory, monitoring, logging, security, governance, deployment, ALM, pro-code extension best practices, capstone implementation and final demos. |

---

## 📘 Detailed 40-Hour Curriculum

### Module 1: Introduction to AI-Driven Low-Code Engineering (2 Hours)
* **Learning Objectives**: Understand the landscape of AI-assisted application development; understand how Vibe Coding, Dataverse, MCP, and agents fit together; preview React/TypeScript and VS Code extensions.
* **Topics Covered**:
  * Evolution from traditional low-code to AI-driven app development.
  * Introduction to `vibe.powerapps.com` and its export capabilities.
  * Role of AI agents in application building.
* **Hands-on Activity**: Review a sample business requirement and identify app features, data entities, agent actions, external tools, and governance concerns.

### Module 2: TypeScript & React Essentials for Low-Code Developers (4 Hours)
* **Learning Objectives**: Understand basic TypeScript syntax, React component structure, and hooks; bridge the gap between low-code and pro-code.
* **Topics Covered**:
  * TypeScript Basics: variables, functions, basic types (string, number, boolean, array), interfaces, custom types.
  * React Basics: functional components, JSX, props, state, `useState`, `useEffect`, handling events (`onClick`, `onChange`).
  * Connecting to APIs (basic fetch) and comparing Power Apps components vs. React components.
* **Hands-on Activity**: Build a simple React + TypeScript component (e.g., an approval card) that displays request details and accepts a button click.

### Module 3: From Vibe to Pro-Code – Opening Power Apps in VS Code (3 Hours)
* **Learning Objectives**: Export a Power Apps Vibe app, understand the generated code structure, and make simple pro-code enhancements.
* **Topics Covered**:
  * Exporting a Power Apps Vibe app (steps and formats).
  * Understanding the folder structure (`components`, `themes`, `assets`, `config`).
  * Making safe pro-code customizations (appearance tweaks, button handlers, TypeScript interfaces).
* **Hands-on Activity**: Export a simple Employee Request App, open in VS Code, change a label/add a console log, and test the updated behavior.

### Module 4: Power Apps Vibe Coding Fundamentals (3 Hours)
* **Learning Objectives**: Use natural language prompts to create apps using Power Apps Vibe Coding.
* **Topics Covered**:
  * Prompt structure for app generation.
  * Iterative refinement through conversation.
  * Common limitations and practical usage considerations.
* **Hands-on Activity**: Build a simple Employee Request App with a request form, category, status, list view, basic validation, and review functionality.

### Module 5: Building Simple and Complex Apps with AI-Driven Generation (4 Hours)
* **Learning Objectives**: Move from simple app generation to complex business applications using AI-driven development.
* **Topics Covered**:
  * Multi-screen app generation.
  * Creating forms, views, dashboards, and detail screens.
  * Adding business rules and prompting for user roles/permissions.
* **Hands-on Activity**: Build a Procurement Request Management App with submission, approval, vendor details, tracking dashboard, filters, and validation rules.

### Module 6: Dataverse Fundamentals for Vibe Apps (4 Hours)
* **Learning Objectives**: Use Dataverse for structured business data, relationships, CRUD operations, and schema publishing.
* **Topics Covered**:
  * Tables, columns, records, and relationships.
  * One-to-many and many-to-one relationships, lookups, and choice columns.
  * Schema modification and app regeneration.
* **Hands-on Activity**: Design and implement Dataverse tables for Employee, Department, Vendor, Purchase Request, and Approval History.

### Module 7: Advanced Dataverse Data Modeling and Business Rules (3 Hours)
* **Learning Objectives**: Design realistic business data models and support complex application logic.
* **Topics Covered**:
  * Multi-table data modeling and data normalization basics.
  * Validation rules, status management, and audit-style history tables.
  * Data model changes and app impact.
* **Hands-on Activity**: Extend the Procurement App data model with approval levels, budget category, cost center, comments, and attachment metadata.

### Module 8: Introduction to MCP Architecture and Agent Tool Usage (4 Hours)
* **Learning Objectives**: Understand Model Context Protocol (MCP) architecture and how agents use tools.
* **Topics Covered**:
  * MCP Server, Tools, Resources, and Prompts.
  * Tool discovery by agents and how agents invoke tools.
  * Human-in-the-loop workflows and autonomous workflow examples.
* **Hands-on Activity**: Case activity on agent-assisted vendor validation checking vendor status, spending threshold, and returning an approval recommendation.

### Module 9: Building a Custom MCP Server (5 Hours)
* **Learning Objectives**: Build a custom MCP server and expose business tools that agents can discover and use.
* **Topics Covered**:
  * MCP server development fundamentals & protocol basics.
  * Defining custom tools, input schemas, output structures, and error handling.
  * Testing MCP tools locally.
* **Hands-on Activity**: Build an MCP server with tools such as `validate_vendor`, `calculate_approval_level`, and `check_budget_availability`.

### Module 10: Connecting MCP Tools with Power Apps and Agents (4 Hours)
* **Learning Objectives**: Connect MCP tools with Power Apps and agents to support external business actions.
* **Topics Covered**:
  * MCP tool invocation pipeline.
  * Passing context from Power Apps to MCP tools and returning results.
  * Human approval before tool execution.
* **Hands-on Activity**: Connect the Procurement App with custom MCP tools for vendor validation, budget checking, approval recommendations, and status updates.

### Module 11: Advanced MCP Capabilities (4 Hours)
* **Learning Objectives**: Make MCP-based agentic applications enterprise-ready by adding advanced capabilities.
* **Topics Covered**:
  * RAG and document retrieval before tool execution.
  * Memory, stateful interactions, logging tool calls, and monitoring agent actions.
  * Secure MCP endpoints and authorization for tool access.
* **Hands-on Activity**: Add logging, error handling, access checks, basic monitoring, human approval, and RAG-style knowledge lookup before recommendations.

### Module 12: Deployment, ALM, Governance, and Enterprise Readiness (4 Hours)
* **Learning Objectives**: Prepare AI-powered Power Apps solutions for deployment and enterprise usage.
* **Topics Covered**:
  * Application Lifecycle Management (ALM) for AI-powered Power Apps.
  * Versioning of apps and components, and version control for VS Code extensions (Git).
  * Environment strategy, solution packaging, security review, and production readiness checklists.
* **Hands-on Activity**: Prepare architecture view, data model view, app workflow, MCP tool list, agent workflow, and governance controls.

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
