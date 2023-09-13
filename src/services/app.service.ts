import { Injectable } from '@nestjs/common';
import { TemperatureUtilsDao } from '../dao/temperature-utils.dao';
import { TemperatureDto } from 'src/dtos/response/temperature.request.dto';

export enum types {
  fahrenheit = 'fahrenheit',
  celsius = 'celsius',
}

@Injectable()
export class AppService {
  constructor(private readonly temperatureUtilsDao: TemperatureUtilsDao) {}

  async getTemperature(
    type: types,
    temperature: number,
  ): Promise<TemperatureDto> {
    let celsius: number;
    let fahrenheit: number;

    switch (type) {
      case types.celsius:
        celsius = temperature;
        fahrenheit = await this.convertCelsiusToFahrenheit(temperature);
        break;
      case types.fahrenheit:
        celsius = await this.convertCelsiusToFahrenheit(temperature);
        fahrenheit = temperature;
        break;
      default:
        return type satisfies never;
    }

    return new TemperatureDto({
      celsius,
      fahrenheit,
    });
  }

  async convertFahrenheitToCelsius(fahrenheit: number): Promise<number> {
    const celsiusTemp =
      (fahrenheit - 32) *
      (await this.temperatureUtilsDao.getTemperatureMultiplier());

    return parseFloat(celsiusTemp.toFixed(2));
  }

  async convertCelsiusToFahrenheit(celcius: number): Promise<number> {
    const fahrenheitTemp =
      celcius / (await this.temperatureUtilsDao.getTemperatureMultiplier()) +
      32;

    return parseFloat(fahrenheitTemp.toFixed(2));
  }
}
