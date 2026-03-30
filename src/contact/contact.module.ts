import { Module } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';

@Module({
  imports: [],
  providers: [ContactService],
  controllers: [ContactController],
})
export class ContactModule {}

