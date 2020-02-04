import { Module } from '@nestjs/common';
import { JsonApiController } from '../interfaces/api/json-api-controller/json-api.controller';
import { HttpLibrary } from '../infrastructure/library/HttpLibraryMock';
import { JsonDataRepository } from '../infrastructure/repository/JsonDataRepository';
import { JsonApiService } from '../application/json-api.service';
import { JsonDataFormatter } from '../domain/service/JsonDataFormatter';
import { MongoDbLibrary } from '../infrastructure/db/MongoDbLibrary';

@Module({
  controllers: [JsonApiController],
  providers: [
    JsonApiService,
    JsonDataRepository,
    JsonDataFormatter,
    HttpLibrary,
    MongoDbLibrary,
  ],
  exports: [JsonDataRepository, JsonDataFormatter],
})
export class JsonApiModule {}
