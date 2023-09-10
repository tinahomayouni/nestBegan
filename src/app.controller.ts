import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './services/app.service';

@Controller('tempConvertor') // Change the route to '/tempConvertor'
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  convertToCelsius(@Query('fahrenheit') fahrenheit: number): string {
    const celsiusTemp = this.appService.convertFahrenheitToCelsius(fahrenheit);
    return `Celsius Temperature: <b>${celsiusTemp}</b>°C`;
  }
}
