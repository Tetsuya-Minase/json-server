import { Body, Controller, Get, HttpCode, Param, Put } from '@nestjs/common';
import { JsonApiService } from '../../../application/json-api.service';
import { HttpStatusCode } from '../../../domain/constants/HttpStatusCode';

@Controller('/v1/json')
export class JsonApiController {
  constructor(private readonly jsonApiService: JsonApiService) {
  }

  @Get()
  getJsonAll(): any {
    return this.jsonApiService.getJsonAll();
  }
  @Get(':id')
  getById(@Param('id') id: string) {
    return id;
  }

  @Put(':id')
  @HttpCode(HttpStatusCode.NO_CONTENT)
  registerJsonData(@Param('id') id: string, @Body() body: any): void {
    return ;
  }
}
