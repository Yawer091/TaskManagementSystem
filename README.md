# Task Management System

## Introduction
  Welcome to the project Task Management System This application provide user to manage their daily task in easy way
  It allow user to Perfom Create, Read, Update and Delete Task by registering and login on the basic of their authentication.

## Project Type
   Backend

## Directory Structure
TaskManagementSystem/<br>
├─ backend/<br>
│  ├─ config/<br>
│  ├─ middlewares/<br>
│  ├─ models/<br>
│  ├─ routes/<br>
│  ├─ server.js<br>
│  └─ package.json<br>

## Technology Stack
- Nodejs
- Express.js
- MongoDB, Mongoose
- bcrypt, JWT , Mocha, Zest

## Installation & Getting Started
- git clone https://github.com/Yawer091/TaskManagementSystem.git
- npm install
- Set up MongoDB and configure the connection string in config/db.js.
- Generate JWT secret key and update it in the authentication middleware (middleware/auth.middleware.js).
- npm run server

## API Endpoints

### Users

#### POST /users/register

- **Description:** Register a new user.

- **Request Body:**
    ```json
{
"name": "string",
"email": "string",
"password": "string"
}

#### POST /users/login

- **Description:** Login an existing user.

- **Request Body:**
  ```json
{
"email": "string",
"password": "string"
}


**Authentication Middleware:** All endpoints under /tasks require authentication. JWT token should be included in the Authorization header as "Bearer ".

### Tasks

#### POST /tasks/create

- **Description:** Create a new task.

- **Authentication:** Required

- **Request Body:**
  ```json
{
"title": "string",
"description": "string",
"duedate": "string (format: YYYY-MM-DDTHH:MM:SSZ)"
}

#### GET /tasks/

- **Description:** Get all tasks.

- **Authentication:** Required

#### GET /tasks/:taskID

- **Description:** Get a single task by ID.

- **Authentication:** Required

#### PATCH /tasks/:taskID

- **Description:** Update a task by ID.

- **Authentication:** Required

- **Request Body:** (Fields to update)
  ```json
{
"title": "string",
"description": "string",
"duedate": "string (format: YYYY-MM-DDTHH:MM:SSZ)",
"priority": "number",
"status": "string"
}

#### DELETE /tasks/:taskID

- **Description:** Delete a task by ID.

- **Authentication:** Required
