import { Controller, Get } from '@nestjs/common';
import { AppService } from '../../application/app.service';

@Controller()
export class JsonController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
