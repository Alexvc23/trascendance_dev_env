# Backend 👨‍💻

The backend part of the project is responsible for handling the business logic and data processing. It provides the necessary APIs for the frontend to interact with the application and communicates with the database to store and retrieve data.

## 📁 File Structure

The backend directory has the following file structure:

- `auth.controller.ts` 🎮: This file contains the implementation of the authentication controller. It defines the API routes for user authentication, such as the login route.

- `auth.service.ts` 🔐: The authentication service handles the authentication logic, such as validating user credentials and generating authentication tokens.

- `app.module.ts` 📦: This is the main module of the application. It imports and declares all the necessary controllers, services, and providers.

- `user.service.ts` 👥: The user service is responsible for interacting with the database and performing operations related to user data, such as finding a user by their username.

## 🚀 API Routes

The backend provides the following API routes:

- `POST /auth/login` 🔐: This route is used for user authentication. It expects a JSON payload containing the username and password. The authentication service validates the credentials and returns a response indicating whether the login was successful or not.

## 📦 Dependencies

The backend project has the following dependencies:

- `@nestjs/common` 🚀: Provides common functionality and decorators used in NestJS applications.

- `@nestjs/core` 🏗️: The core module of NestJS that handles the application bootstrapping and dependency injection.

- `reflect-metadata` 🌟: A library that enables decorators in TypeScript.

- `rxjs` 🔄: A library for reactive programming used by NestJS.

## 🚀 Getting Started

To run the backend server, follow these steps:

1. Install Node.js and npm on your machine if you haven't already.

2. Navigate to the `backend` directory.

3. Run the following command to install the project dependencies:


4. Start the backend server:


This will start the server on the specified port, and you should see a message indicating that the server is running.

## ⚙️ Configuration

The backend server can be configured using environment variables. The following variables can be set:

- `PORT` 🌐: The port on which the server should listen (default: 3000).

- `DATABASE_URL` 🗄️: The URL of the database connection.

Make sure to configure these variables according to your environment.

## 🧪 Testing

The backend code can be tested using unit tests and integration tests. The tests can be found in the `test` directory. To run the tests, use the following command:


This will execute the test suite and display the test results.
