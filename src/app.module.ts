import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './services/app.service';
import { ConstNum } from './services/constNum.dao'; // Import the ConstNum service

@Module({
  controllers: [AppController],
  providers: [AppService, ConstNum], // Add ConstNum to the providers array
})
export class AppModule {}
