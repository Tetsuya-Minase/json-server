import { Body, Controller, Get, HttpCode, Param, Put } from '@nestjs/common';
import { JsonApiService } from '../../../application/json-api.service';
import { HttpStatusCode } from '../../../domain/constants/HttpStatusCode';
import { JsonDataResponse } from '../../../domain/model/response/JsonDataResponse';
import { JsonDataValue } from '../../../domain/model/object/JsonDataValue';
import { ListRequestQueryBuilder } from '../../../domain/model/query/ListRequestQueryBuilder';

/**
 * JsonApiController for web app.
 */
@Controller('/api/v1/json')
export class JsonApiController {
  constructor(private readonly service: JsonApiService) {}

  /**
   * getAll Json List.
   * @param start start index.
   * @param result result count.
   * @param istAll getAll all data.
   */
  @Get()
  @HttpCode(HttpStatusCode.OK)
  async getJsonList(
    @Param('start') start: number,
    @Param('result') result: number,
    @Param('isAll') istAll: boolean,
  ): Promise<JsonDataResponse> {
    const requestQuery = new ListRequestQueryBuilder()
      .setStart(start)
      .setResult(result)
      .setIsAll(istAll)
      .build();
    return await this.service.getJsonList(requestQuery);
  }

  /**
   * getAll Json Data by key.
   * @param key json key.
   */
  @Get(':key')
  @HttpCode(HttpStatusCode.OK)
  getById(@Param('key') key: string): JsonDataValue {
    return this.service.getJsonByKey(key);
  }

  @Put(':id')
  @HttpCode(HttpStatusCode.NO_CONTENT)
  async registerJsonData(
    @Param('id') id: string,
    @Body() body: JsonDataValue,
  ): Promise<void> {
    await this.service.registerJsonData(body);
  }
}
