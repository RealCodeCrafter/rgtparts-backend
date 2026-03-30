import { Body, Controller, Post } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  async submit(@Body() createContactDto: CreateContactDto) {
    this.contactService.sendEmailAsync(createContactDto).catch((error) => {
      // eslint-disable-next-line no-console
      console.error('Background email yuborishda xato:', error);
    });

    return {
      success: true,
      message: 'Xabar qabul qilindi va yuborilmoqda!',
    };
  }
}

