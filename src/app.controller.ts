import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':fahrenheit')
  convertToCelsius(@Param('fahrenheit') fahrenheit: number): string {
    const celsiusTemp = this.appService.convertFahrenheitToCelsius(fahrenheit);
    return `Celsius Temperature: <b>${celsiusTemp}</b>°C`;
  }
}
