import { Injectable } from '@nestjs/common';
import { JsonDataRepository } from '../infrastructure/repository/JsonDataRepository';
import { JsonDataResponse } from '../domain/model/response/JsonDataResponse';
import { JsonDataFormatter } from '../domain/service/JsonDataFormatter';
import { JsonDataValue } from '../domain/model/object/JsonDataValue';
import { ListRequestQuery } from '../domain/model/query/ListRequestQuery';

/**
 * Json Api Service.
 */
@Injectable()
export class JsonApiService {
  constructor(
    private readonly repository: JsonDataRepository,
    private readonly formatter: JsonDataFormatter,
  ) {}

  /**
   * get Json data list.
   * @param query search condition.
   * @return {@link JsonDataResponse}
   */
  async getJsonList(query: ListRequestQuery): Promise<JsonDataResponse> {
    const response = await this.repository.fetchJsonAll();
    return query.isAll
      ? this.formatter.toAllResponse(response)
      : this.formatter.toPagingResponse(query, response);
  }

  /**
   * get Json data by key.
   * @param key
   */
  getJsonByKey(key: string): JsonDataValue {
    return this.repository.fetchJsonByKey(key);
  }

  /**
   * Register Json Data.
   */
  async registerJsonData(jsonData: JsonDataValue): Promise<void> {
    await this.repository.registerJson(jsonData);
  }
}
