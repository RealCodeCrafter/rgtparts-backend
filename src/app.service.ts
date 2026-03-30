import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getStatus() {
    return { success: true, message: 'RTG Backend API ishlayapti' };
  }
}
