import { Controller, Get } from '@nestjs/common';
import { JsonApiService } from '../../../application/json-api.service';

@Controller('/v1/json')
export class JsonApiController {
  constructor(private readonly appService: JsonApiService) {
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
