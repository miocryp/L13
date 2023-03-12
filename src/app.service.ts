import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello visitor number ' + (Math.random() * 1000).toFixed(0);
  }
}
