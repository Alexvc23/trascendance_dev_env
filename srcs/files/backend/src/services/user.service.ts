// The UserService class is responsible for handling user-related operations, such as retrieving user information from a database.
// It provides a method called 'findByUsername' to find a user by their username.
// The actual implementation of the database query to find a user is expected to be added within the 'findByUsername' method.

// Importing the Injectable decorator from the NestJS framework
import { Injectable } from '@nestjs/common';
// Importing the User model from '../models/user.model' file
import { User } from '../models/user.model';

// Applying the Injectable decorator to mark the class as injectable
@Injectable()
export class UserService {
  // Declaring an asynchronous method called 'findByUsername' which accepts 'username' as a parameter
  async findByUsername(username: string): Promise<User | undefined> {
    // Replace this with your database query to find a user by username
    // Return the user object if found, otherwise return undefined
  }
}