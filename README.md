# Task Management System
<<<<<<< HEAD
=======

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
- bcrypt, JWT , Mocha, chai

## Installation & Getting Started
```bash
- git clone https://github.com/Yawer091/TaskManagementSystem.git
- npm install
- Set up MongoDB and configure the connection string in config/db.js.
- Generate JWT secret key and update it in the authentication middleware (middleware/auth.middleware.js).
- npm run server
```
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
  "title": "String",
  "description": "String",
  "dueDate": "Date",
  "priority":"String",
  "status":"Boolean"
  }

#### GET /tasks/read

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
  "title": "String",
  "description": "String",
  "dueDate": "Date",
  "priority": "Number",
  "status": "Boolean"
  }

#### DELETE /tasks/:taskID

- **Description:** Delete a task by ID.

- **Authentication:** Required

### Server Information
    The server is running on a dynamic port configured via the .env  file.
    Connected to MongoDB database.

### Testing
    For unit Testing (Based on user information provided) execute the following command in Terminal
  
    npm run test
    
    

>>>>>>> 5855681db00a174ebc30b26e2c3723ef5a70d98f
