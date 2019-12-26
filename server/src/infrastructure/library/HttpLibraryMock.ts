import { Injectable } from '@nestjs/common';
import { JsonDataEntity } from '../../domain/model/entity/JsonDataEntity';
import { JsonDataValue } from '../../domain/model/object/JsonDataValue';

@Injectable()
export class HttpLibrary {
  fetchAll(): JsonDataEntity {
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
