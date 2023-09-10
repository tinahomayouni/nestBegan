import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './services/app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  describe('convertToCelsius', () => {
    it('should convert Fahrenheit to Celsius', () => {
      const fahrenheit = 98.6;
      const celsius = 37.0;

      jest
        .spyOn(appService, 'convertFahrenheitToCelsius')
        .mockReturnValue(celsius);

      expect(appController.convertToCelsius(fahrenheit)).toBe(
        `Celsius Temperature: <b>${celsius}</b>°C`,
      );
    });
  });
});
