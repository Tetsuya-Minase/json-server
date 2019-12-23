import { Injectable } from '@nestjs/common';

@Injectable()
export class JsonApiService {
  getHello(): string {
    return 'Hello World!';
  }
}
