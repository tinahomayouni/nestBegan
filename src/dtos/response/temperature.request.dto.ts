export class TemperatureDto {
  fahrenheit: number;
  celsius: number;

  constructor(params: TemperatureDto) {
    Object.assign(this, params);
  }
}
