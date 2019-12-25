import { Injectable } from '@nestjs/common';
import { JsonDataEntity } from '../../domain/model/JsonDataEntity';

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

  register(): any {
    return 'ok';
  }
}
