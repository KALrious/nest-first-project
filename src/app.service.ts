import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getCustomHello(): string {
    return 'Hello World from Jean !';
  }

  postMessage(name: string): string {
    return `Message posted by ${name} !`;
  }
}
