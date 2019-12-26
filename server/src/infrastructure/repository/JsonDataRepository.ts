import { Injectable } from '@nestjs/common';
import { HttpLibrary } from '../library/HttpLibraryMock';
import { JsonDataEntity } from '../../domain/model/entity/JsonDataEntity';
import { JsonDataValue } from '../../domain/model/object/JsonDataValue';

@Injectable()
export class JsonDataRepository {
  constructor(private readonly httpLibrary: HttpLibrary) {
  }

  fetchJsonAll(): JsonDataEntity {
    return this.httpLibrary.fetchAll();
  }

  fetchJsonById(id: string): JsonDataValue {
    return this.httpLibrary.fetchById(id);
  }

  registerJson(): void {
    this.httpLibrary.register();
  }
}
