import { Injectable } from '@nestjs/common';
import { JsonDataRepository } from '../infrastructure/repository/JsonDataRepository';
import { JsonDataResponse } from '../domain/model/JsonDataResponse';
import { JsonDataFormatter } from '../domain/service/JsonDataFormatter';

@Injectable()
export class JsonApiService {
  constructor(private readonly repository: JsonDataRepository,
              private readonly formatter: JsonDataFormatter) {
  }

  getJsonList(start: number, result: number, isAll: boolean): JsonDataResponse {
    const response = this.repository.fetchJsonAll();
    return isAll
      ? this.formatter.toAllResponse(response)
      : this.formatter.toPagingResponse(start, result, response);
  }

  registerJsonData(): void {
    this.repository.registerJson();
  }

}
