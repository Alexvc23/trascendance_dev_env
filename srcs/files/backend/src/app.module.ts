// The AppModule file serves as the root module of the NestJS application.
// It is responsible for defining the structure and dependencies of the application.
// In this file, the controllers and services are registered and provided to the NestJS dependency injection system.
// The AppModule acts as the entry point for the application, where you can import other modules, declare controllers, and provide services.

// Importing the Module decorator from the NestJS framework, which allows marking the class as a module
import { Module } from '@nestjs/common';
// Importing the AppController class from './app.controller' file
import { AppController } from './app.controller';
// Importing the AppService class from './app.service' file
import { AppService } from './app.service';
// Importing the AuthController class from './controllers/auth.controller' file
import { AuthController } from './controllers/auth.controller';
// Importing the AuthService class from './services/auth.service' file
import { AuthService } from './services/auth.service';
// Importing the UserService class from './services/user.service' file
import { UserService } from './services/user.service';

// Applying the Module decorator to mark the class as a module
@Module({
  // Declaring any modules that need to be imported (none in this case)
  imports: [],
  // Declaring the controllers that belong to this module
  controllers: [AppController, AuthController],
  // Declaring the providers (services) that belong to this module
  providers: [AppService, AuthService, UserService],
})
export class AppModule {}