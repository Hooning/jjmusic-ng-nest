import { Injectable } from '@nestjs/common';
import { Message } from '@jjmusic-ng-nest/shared/data-access/models';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to Nest.js world!' };
  }
}
