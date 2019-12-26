import { Injectable } from '@nestjs/common';
import { HttpLibrary } from '../library/HttpLibraryMock';
import { JsonDataEntity } from '../../domain/model/entity/JsonDataEntity';
import { JsonDataValue } from '../../domain/model/object/JsonDataValue';

/**
 * Json Data Repository
 */
@Injectable()
export class JsonDataRepository {
  constructor(private readonly httpLibrary: HttpLibrary) {
  }

  /**
   * fetch json list.
   * @return {@link JsonDataValue}
   */
  fetchJsonAll(): JsonDataEntity {
    return this.httpLibrary.fetchAll();
  }

  /**
   * fetch Json data by key.
   * @param key json key
   * @return {@link JsonDataValue}
   */
  fetchJsonByKey(key: string): JsonDataValue {
    return this.httpLibrary.fetchBykey(key);
  }

  registerJson(): void {
    this.httpLibrary.register();
  }
}
