import { IJsonDataRepository } from '../../domain/repository/IJsonDataRepository';
import { Injectable } from '@nestjs/common';
import { HttpLibrary } from '../library/HttpLibraryMock';

@Injectable()
export class JsonDataRepository implements IJsonDataRepository {
  constructor(private readonly httpLibrary: HttpLibrary) {
  }

  fetchJsonAll(): any {
    return this.httpLibrary.fetchAll();
  }

  registerJson(): void {
    this.httpLibrary.register();
  }
}
