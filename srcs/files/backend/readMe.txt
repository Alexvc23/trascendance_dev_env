# :rocket: Backend

This is the backend project of my application.

## :gear: Installation

1. Clone this repository
2. Run `npm install`

## :wrench: Scripts

The `package.json` includes the following scripts:

- `npm start`: Start the project using Nest.
- `npm test`: Run the test script.

## :file_folder: Project Structure

- `Dockerfile`: Used by Docker to build an image of the backend application.
- `package.json`: Contains the list of dependencies and metadata about the project.
- `src/`: Contains all the JavaScript source code. The entry point to the application (in this case, `index.js`) is located here, along with any other files required by the application.
- `test/`: Contains the test scripts.

## :package: Dependencies

This project is built with the following dependencies:

- `@nestjs/common`
- `@nestjs/core`
- `@nestjs/platform-express`
- `reflect-metadata`
- `rxjs`

## :white_check_mark: Tests

To run tests, use the `npm test` command.