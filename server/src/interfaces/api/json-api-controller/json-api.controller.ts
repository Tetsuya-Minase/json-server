import { Body, Controller, Get, HttpCode, Param, Put } from '@nestjs/common';
import { JsonApiService } from '../../../application/json-api.service';
import { HttpStatusCode } from '../../../domain/constants/HttpStatusCode';
import { JsonDataResponse } from '../../../domain/model/JsonDataResponse';
import { JsonDataValue } from '../../../domain/model/object/JsonDataValue';

@Controller('/api/v1/json')
export class JsonApiController {
  constructor(private readonly jsonApiService: JsonApiService) {
  }

  @Get()
  getJsonList(@Param('start') start: number, @Param('result') result: number, @Param('isAll') istAll: boolean): JsonDataResponse {
    const startIndex = start || 1;
    const resultCount = result || 10;
    return this.jsonApiService.getJsonList(startIndex, resultCount, istAll);
  }

  @Get(':id')
  getById(@Param('id') id: string): JsonDataValue {
    console.log('get by id.');
    return undefined;
  }

  @Put(':id')
  @HttpCode(HttpStatusCode.NO_CONTENT)
  registerJsonData(@Param('id') id: string, @Body() body: JsonDataValue): void {
    console.log('put');
    this.jsonApiService.registerJsonData();
    return;
  }
}
