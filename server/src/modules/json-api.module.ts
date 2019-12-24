import { Module } from '@nestjs/common';
import { JsonApiController } from '../interfaces/api/json-api-controller/json-api.controller';
import { HttpLibrary } from '../infrastructure/library/HttpLibraryMock';
import { JsonDataRepository } from '../infrastructure/repository/JsonDataRepository';
import { JsonApiService } from '../application/json-api.service';

@Module({
  controllers: [JsonApiController],
  providers: [
    JsonApiService,
    JsonDataRepository,
    HttpLibrary
  ],
  exports: [JsonDataRepository]
})
export class JsonApiModule {
}
