
# Volunteer Management System

This repository contains a full‑stack MERN application developed to support volunteer management for community organisations.

The system provides a React frontend for volunteers and administrators, a Node.js and Express backend exposing RESTful APIs, and MongoDB for persistent data storage.

---

## Technology Stack

- Frontend: React
- Backend: Node.js, Express
- Database: MongoDB Atlas
- CI/CD: GitHub Actions

---

## Project Structure
'''
/taskmanager
  /backend
  /frontend
.github/workflows
README.md

## Setup Instructions

### Prerequisites
- Node.js (v18 or later)
- npm

---

### Backend Setup

'''
cd taskmanager/backend
npm install
npm start

The backend will run on:
http://localhost:5001

---

### Frontend Setup

'''
cd taskmanager/frontend
npm install
npm start

The frontend will run on:
http://localhost:3000

---

## Application Access

The application is accessed via a web browser at:

http://localhost:3000
The application is demonstrated in a local development environment. A persistent public EC2 URL was not maintained for the final submission due to the use of ephemeral cloud instances during development.

No authentication is required for demonstration purposes.

---

## Continuous Integration

This project includes a GitHub Actions CI pipeline configured under `.github/workflows/ci.yml`. The pipeline executes automated dependency installation and backend test execution on each push to the main branch.

---
## JIRA Project Management
JIRA Board:
https://petermckenzie.atlassian.net/jira/software/projects/SCRUM/boards/1/backlog
(Note: The JIRA board requires authentication and is not publicly accessible.)

## Author

Peter McKenzie  
Student ID: n12808547
