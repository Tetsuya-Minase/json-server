import { Injectable } from '@nestjs/common';
import { JsonDataEntity } from '../../domain/model/entity/JsonDataEntity';
import { JsonDataValue } from '../../domain/model/object/JsonDataValue';
import { MongoDbLibrary } from '../db/MongoDbLibrary';

@Injectable()
export class HttpLibrary {
  constructor(private readonly mongoDb: MongoDbLibrary) {}

  async fetchAll(): Promise<JsonDataEntity> {
    const list = await this.mongoDb.get();
    console.log('list: ', list);
    return {
      list,
    };
    // return {
    //   list: [
    //     {
    //       key: 'hogeName',
    //       data: [
    //         {
    //           id: 1,
    //           hoge: 'hogehgoe',
    //         },
    //       ],
    //     },
    //     {
    //       key: 'hugaName',
    //       data: [
    //         {
    //           id: 2,
    //           huga: 'hugahgua',
    //         },
    //       ],
    //     },
    //   ],
    // };
  }

  fetchByKey(key: string): JsonDataValue {
    return {
      key,
      data: [
        {
          id: 1,
          hoge: 'hogehgoe',
        },
      ],
    };
  }

  async register(jsonData: JsonDataValue) {
    const result = await this.mongoDb.registerOne(jsonData);
    console.log('result', result);
    return 'ok';
  }
}
