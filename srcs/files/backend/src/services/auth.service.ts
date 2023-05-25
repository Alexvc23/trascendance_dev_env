// The AuthService file contains the logic for handling authentication-related operations.
// It imports the necessary decorators and modules from the NestJS framework to define the class behavior.
// The '@Injectable' decorator marks the class as injectable, allowing it to be used as a service.
// The constructor injects an instance of the 'UserService' class to enable user-related operations.
// The 'login' method handles the authentication process.
// It accepts 'credentials' (username and password) as a parameter.
// Inside the method, it calls the 'findByUsername' method of the injected 'userService' instance to retrieve the user.
// It then checks if the user exists and if the provided password matches the user's password.
// If the user doesn't exist or the password doesn't match, it throws an error indicating invalid credentials.
// If the authentication is successful, it returns a success message as an object.


// Importing the Injectable decorator from the NestJS framework
import { Injectable } from '@nestjs/common';
// Importing the UserService class from './user.service' file
import { UserService } from './user.service';

// Applying the Injectable decorator to mark the class as injectable
@Injectable()
export class AuthService {
  // Injecting an instance of the UserService class into the AuthService class
  constructor(private readonly userService: UserService) {}

  // Declaring an asynchronous method called 'login' which accepts 'credentials' as a parameter
  async login(credentials: { username: string; password: string }) {
    // Extracting the 'username' and 'password' from the 'credentials' object
    const { username, password } = credentials;
    // Calling the 'findByUsername' method of the injected 'userService' instance to retrieve the user
    const user = await this.userService.findByUsername(username);

    // Checking if the user doesn't exist or the password doesn't match
    if (!user || user.password !== password) {
      // Throwing an error indicating invalid username or password
      throw new Error('Invalid username or password');
    }

    // Returning a success message as an object
    return { message: 'Login successful' };
  }
}