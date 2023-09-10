import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './services/app.service';
import { ConstNum } from './services/constNum.dao';

@Controller('tempConvertor')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly constNum: ConstNum,
  ) {}

  @Get()
  convertToCelsius(@Query('fahrenheit') fahrenheit: number): string {
    const constNumValue = this.constNum.getConstNum(); // Call the getConstNum method
    const celsiusTemp = this.appService.convertFahrenheitToCelsius(
      fahrenheit,
      constNumValue, // Pass the result of getConstNum
    );
    return `Celsius Temperature: <b>${celsiusTemp}</b>°C`;
  }
}
