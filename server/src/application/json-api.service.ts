import { Injectable } from '@nestjs/common';
import { JsonDataRepository } from '../infrastructure/repository/JsonDataRepository';
import { JsonDataResponse } from '../domain/model/response/JsonDataResponse';
import { JsonDataFormatter } from '../domain/service/JsonDataFormatter';
import { JsonDataValue } from '../domain/model/object/JsonDataValue';
import { ListRequestQuery } from '../domain/model/query/ListRequestQuery';

@Injectable()
export class JsonApiService {
  constructor(private readonly repository: JsonDataRepository,
              private readonly formatter: JsonDataFormatter) {
  }

  getJsonList(query: ListRequestQuery): JsonDataResponse {
    const response = this.repository.fetchJsonAll();
    return query.isAll
      ? this.formatter.toAllResponse(response)
      : this.formatter.toPagingResponse(query, response);
  }

  getJsonById(id: string): JsonDataValue {
    return this.repository.fetchJsonById(id);
  }

  registerJsonData(): void {
    this.repository.registerJson();
  }

}
