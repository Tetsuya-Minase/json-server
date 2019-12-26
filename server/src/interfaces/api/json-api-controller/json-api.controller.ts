import { Body, Controller, Get, HttpCode, Param, Put } from '@nestjs/common';
import { JsonApiService } from '../../../application/json-api.service';
import { HttpStatusCode } from '../../../domain/constants/HttpStatusCode';
import { JsonDataResponse } from '../../../domain/model/response/JsonDataResponse';
import { JsonDataValue } from '../../../domain/model/object/JsonDataValue';
import { ListRequestQueryBuilder } from '../../../domain/model/query/ListRequestQueryBuilder';

@Controller('/api/v1/json')
export class JsonApiController {
  constructor(private readonly service: JsonApiService) {
  }

  @Get()
  getJsonList(@Param('start') start: number, @Param('result') result: number, @Param('isAll') istAll: boolean): JsonDataResponse {
    const requestQuery = new ListRequestQueryBuilder()
      .setStart(start)
      .setResult(result)
      .setIsAll(istAll)
      .build();
    return this.service.getJsonList(requestQuery);
  }

  @Get(':id')
  getById(@Param('id') id: string): JsonDataValue {
    return this.service.getJsonById(id);
  }

  @Put(':id')
  @HttpCode(HttpStatusCode.NO_CONTENT)
  registerJsonData(@Param('id') id: string, @Body() body: JsonDataValue): void {
    console.log('put');
    this.service.registerJsonData();
    return;
  }
}
