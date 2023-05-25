
// The AuthController file defines the controller responsible for handling authentication-related HTTP requests.
// It imports necessary decorators and modules from the NestJS framework to define the controller's behavior.
// The '@Controller' decorator specifies that this class is a controller and assigns the '/auth' route prefix to all routes defined within.
// The constructor injects an instance of the 'AuthService' class to enable authentication operations.
// The '@Post' decorator defines a POST route handler for the '/auth/login' endpoint.
// The 'login' method is an asynchronous route handler that accepts the 'credentials' (username and password) as the request body.
// It calls the 'login' method of the injected 'authService' instance, passing the credentials, and returns the result.


// Importing the necessary decorators and modules from the NestJS framework
import { Controller, Post, Body } from '@nestjs/common';
// Importing the AuthService class from '../services/auth.service' file
import { AuthService } from '../services/auth.service';

// Creating a controller with the '/auth' route prefix
@Controller('auth')
export class AuthController {
  // Injecting an instance of the AuthService class into the AuthController class
  constructor(private readonly authService: AuthService) {}

  // Creating a POST route handler for the '/auth/login' endpoint
  @Post('login')
  // Declaring an asynchronous method called 'login' which accepts 'credentials' as the request body
  async login(@Body() credentials: { username: string; password: string }) {
    // Calling the 'login' method of the injected 'authService' instance and passing the 'credentials'
    return await this.authService.login(credentials);
  }
}
