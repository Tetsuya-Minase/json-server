import { Injectable } from '@nestjs/common';
import { IJsonDataRepository } from '../domain/repository/IJsonDataRepository';

@Injectable()
export class JsonApiService {
  constructor(private readonly jsonDataRepository: IJsonDataRepository) {
  }

  getJsonAll(): any[] {
    this.jsonDataRepository.fetchJsonAll();
    return ['Hello World!'];
  }

  registerJsonData(): void {
    this.jsonDataRepository.registerJson();
  }

}
