import { Body, Controller, Get, HttpCode, Param, Put } from '@nestjs/common';
import { JsonApiService } from '../../../application/json-api.service';
import { HttpStatusCode } from '../../../domain/constants/HttpStatusCode';

@Controller('/api/v1/json')
export class JsonApiController {
  constructor(private readonly jsonApiService: JsonApiService) {
  }

  @Get()
  getJsonAll(): any {
    console.log('get all.');
    return this.jsonApiService.getJsonAll();
  }
  @Get(':id')
  getById(@Param('id') id: string) {
    console.log('get by id.');
    return id;
  }

  @Put(':id')
  @HttpCode(HttpStatusCode.NO_CONTENT)
  registerJsonData(@Param('id') id: string, @Body() body: any): void {
    console.log('put');
    this.jsonApiService.registerJsonData();
    return ;
  }
}
