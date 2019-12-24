import { Injectable } from '@nestjs/common';
import { HttpLibrary } from '../library/HttpLibraryMock';

@Injectable()
export class JsonDataRepository {
  constructor(private readonly httpLibrary: HttpLibrary) {
  }

  fetchJsonAll(): any {
    return this.httpLibrary.fetchAll();
  }

  registerJson(): void {
    this.httpLibrary.register();
  }
}
