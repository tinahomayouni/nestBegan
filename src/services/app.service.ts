import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  convertFahrenheitToCelsius(fahrenheit: number): number {
    const celsiusTemp = ((fahrenheit - 32) * 5) / 9;
    return parseFloat(celsiusTemp.toFixed(2));
  }
}
