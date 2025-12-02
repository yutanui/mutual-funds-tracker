import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealth(): { message: string; timestamp: string } {
    return {
      message: 'Mutual Funds Tracker API is running',
      timestamp: new Date().toISOString(),
    };
  }
}
