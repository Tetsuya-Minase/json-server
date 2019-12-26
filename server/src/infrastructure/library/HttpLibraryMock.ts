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

  fetchById(id: string): JsonDataValue {
    return {
      key: id,
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
