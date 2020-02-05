import { Injectable } from '@nestjs/common';
import { JsonDataEntity } from '../../domain/model/entity/JsonDataEntity';
import { JsonDataValue } from '../../domain/model/object/JsonDataValue';
import { MongoDbLibrary } from '../library/MongoDbLibrary';

/**
 * Json Data Repository
 */
@Injectable()
export class JsonDataRepository {
  constructor(private readonly dbLibrary: MongoDbLibrary) {}

  /**
   * fetch json list.
   * @return {@link JsonDataValue}
   */
  async fetchJsonAll(): Promise<JsonDataEntity[]> {
    return await this.dbLibrary.getAll<JsonDataEntity>();
  }

  /**
   * fetch Json data by key.
   * @param key json key
   * @return {@link JsonDataValue}
   */
  async fetchJsonByKey(key: string): Promise<JsonDataEntity> {
    return this.dbLibrary.getByKey<JsonDataEntity>(key);
  }

  /**
   * register Json Data.
   */
  async registerJson(jsonData: JsonDataValue): Promise<void> {
    await this.dbLibrary.registerOne(jsonData);
  }
}
