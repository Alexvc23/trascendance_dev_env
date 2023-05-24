import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [], // List of imported modules (none in this case)
  controllers: [AppController], // List of controllers used in the application
  providers: [AppService], // List of services used in the application
})
export class AppModule {}