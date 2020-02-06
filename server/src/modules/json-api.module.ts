import { Module } from '@nestjs/common';
import { JsonController } from '../interfaces/api/json-controller/JsonController';
import { JsonDataRepository } from '../infrastructure/repository/JsonDataRepository';
import { JsonApiService } from '../application/json-api.service';
import { JsonDataFormatter } from '../domain/service/JsonDataFormatter';
import { MongoDbLibrary } from '../infrastructure/library/MongoDbLibrary';

@Module({
  controllers: [JsonController],
  providers: [
    JsonApiService,
    JsonDataRepository,
    JsonDataFormatter,
    MongoDbLibrary,
  ],
  exports: [JsonDataRepository, JsonDataFormatter],
})
export class JsonApiModule {}
