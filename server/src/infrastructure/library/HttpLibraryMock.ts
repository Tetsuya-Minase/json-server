import { Injectable } from '@nestjs/common';
import { JsonDataEntity } from '../../domain/model/entity/JsonDataEntity';
import { JsonDataValue } from '../../domain/model/object/JsonDataValue';
import { MongoDbLibrary } from '../db/MongoDbLibrary';

@Injectable()
export class HttpLibrary {
  constructor(private readonly mongoDb: MongoDbLibrary) {
  }

  fetchAll(): JsonDataEntity {
    this.mongoDb.get();
    return {
      list: [
        {
          key: 'hogeName',
          data: [
            {
              id: 1,
              hoge: 'hogehgoe'
            }
          ]
        },
        {
          key: 'hugaName',
          data: [
            {
              id: 2,
              huga: 'hugahgua'
            }
          ]
        }
      ]
    };
  }

  fetchBykey(key: string): JsonDataValue {
    return {
      key,
      data: [
        {
          id: 1,
          hoge: 'hogehgoe'
        }
      ]
    };
  }

  register(): any {
    return 'ok';
  }
}
