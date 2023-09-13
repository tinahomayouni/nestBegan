import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './services/app.service';
import { TemperatureUtilsDao } from './dao/temperature-utils.dao';

@Module({
  controllers: [AppController],
  providers: [AppService, TemperatureUtilsDao],
})
export class AppModule {}
