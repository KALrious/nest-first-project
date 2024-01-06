import { Injectable, OnApplicationShutdown } from '@nestjs/common';

@Injectable()
export class CommonService implements OnApplicationShutdown {
  onApplicationShutdown(signal?: string) {
    console.log('application shut down', signal);
  }
}
