import { Module } from '@nestjs/common';
import { JsonDataRepository } from '../infrastructure/repository/JsonDataRepository';
import { JsonApiController } from '../interfaces/api/json-api-controller/json-api.controller';
import { HttpLibrary } from '../infrastructure/library/HttpLibraryMock';

@Module({
  imports: [],
  controllers: [JsonApiController],
  providers: [
    {
      provide: 'IJsonDataRepository',
      useClass: JsonDataRepository,
    },
    HttpLibrary,
  ],
})
export class JsonApiModule {

}
