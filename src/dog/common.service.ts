import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class CommonService implements OnModuleInit {
  async onModuleInit(): Promise<void> {
    console.log('initialisation du service common et du module dog');
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1 * 1000);
    });
  }
}
