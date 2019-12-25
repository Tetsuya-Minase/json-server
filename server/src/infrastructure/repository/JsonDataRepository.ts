import { Injectable } from '@nestjs/common';
import { HttpLibrary } from '../library/HttpLibraryMock';
import { JsonDataEntity } from '../../domain/model/JsonDataEntity';

@Injectable()
export class JsonDataRepository {
  constructor(private readonly httpLibrary: HttpLibrary) {
  }

  fetchJsonAll(): JsonDataEntity {
    return this.httpLibrary.fetchAll();
  }

  registerJson(): void {
    this.httpLibrary.register();
  }
}
