// src/hello/hello.controller.ts
import { Controller, Get } from '@nestjs/common';

@Controller()
export class HelloController {
  @Get()
  getHello() {
    return 'Hello, this is my first NestJS!';
  }
}
