import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './services/app.service';
import { ConstNum } from './services/constNum.dao';

@Module({
  controllers: [AppController],
  providers: [AppService, ConstNum],
})
export class AppModule {}
