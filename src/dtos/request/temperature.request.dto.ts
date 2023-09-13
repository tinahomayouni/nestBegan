import { IsEnum, IsNumberString } from 'class-validator';
import { types } from 'src/services/app.service';

export class TemperatureRequestParams {
  @IsEnum(types)
  type: types;

  @IsNumberString()
  temperature: number;
}
