import { Body, Controller, Post, ServiceUnavailableException } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  async submit(@Body() createContactDto: CreateContactDto) {
    try {
      await this.contactService.sendEmail(createContactDto);
      return {
        success: true,
        message: 'Xabar muvaffaqiyatli yuborildi!',
      };
    } catch (error: any) {
      throw new ServiceUnavailableException(
        `Email yuborilmadi: ${error?.message || "Noma'lum xato"}`,
      );
    }
  }
}

