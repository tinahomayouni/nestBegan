import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './services/app.service';
import { TemperatureDto } from './dtos/response/temperature.response.dto';
import { TemperatureRequestParams } from './dtos/request/temperature.request.dto';

@Controller('')
export class AppController {
  presentationService: any;
  constructor(private readonly appService: AppService) {}

  /**
   * Restful endpoint
   */
  @Get('temperature/:type/:temperature')
  async convertToCelsius(
    @Param() params: TemperatureRequestParams,
  ): Promise<TemperatureDto> {
    const temperature = this.appService.getTemperature(
      params.type,
      params.temperature,
    );
    return temperature;
  }

  /**
   * RPC Methods
   */

  @Get('convertToFahrenheit')
  convertToFahrenheit(@Query('celcius') celcius: number): string {
    const celsiusTemp = this.appService.convertCelsiusToFahrenheit(celcius);
    return `Fahrenheit Temperature: <b>${celsiusTemp}</b>°C`;
  }

  @Get('convertToCelcius')
  convertToCelcius(@Query('fahrenheit') fahrenheit: number): string {
    const celsiusTemp = this.appService.convertFahrenheitToCelsius(fahrenheit);
    return `Celsius Temperature: <b>${celsiusTemp}</b>°C`;
  }
}

// @TelegramController()
// export class TelegramAppController {
//   constructor(private readonly appService: AppService) {}

//   /**
//    * Restful endpoint
//    */
//   @Command('temperature')
//   convertToCelsius(
//     @UesrInput('type') type: types,
//     @UserInput('temperature') temperature: number,
//   ): string {
//     const celsiusTemp = this.appService.convertFahrenheitToCelsius(fahrenheit);
//     return `Celsius Temperature: <b>${celsiusTemp}</b>°C`;
//   }
// }
