import { Injectable } from '@nestjs/common';
import { JsonDataRepository } from '../infrastructure/repository/JsonDataRepository';

@Injectable()
export class JsonApiService {
  constructor(private readonly jsonDataRepository: JsonDataRepository) {
  }

  getJsonAll(): any[] {
    this.jsonDataRepository.fetchJsonAll();
    return ['Hello World!'];
  }

  registerJsonData(): void {
    this.jsonDataRepository.registerJson();
  }

}
