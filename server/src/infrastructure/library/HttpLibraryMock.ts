import { Injectable } from '@nestjs/common';

@Injectable()
export class HttpLibrary {
  fetchAll(): any {
    return {
      list: [
        {
          name: 'hogeName',
          data: {
            id: 1,
            hoge: 'hogehgoe',
          },
        },
        {
          name: 'hugaName',
          data: {
            id: 2,
            huga: 'hugahgua',
          },
        },
      ],
    };
  }
  register(): any {
    return 'ok';
  }
}
