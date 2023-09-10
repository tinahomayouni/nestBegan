import { Injectable } from '@nestjs/common';

@Injectable()
export class ConstNum {
  getConstNum(): number {
    return 5 / 9;
  }
}
