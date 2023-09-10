import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  convertFahrenheitToCelsius(fahrenheit: number, constNum: number): number {
    const celsiusTemp = (fahrenheit - 32) * constNum;
    return parseFloat(celsiusTemp.toFixed(2));
  }
}
