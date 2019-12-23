import { Test, TestingModule } from '@nestjs/testing';
import { JsonApiController } from './json-api.controller';
import { JsonApiService } from '../../../application/json-api.service';

describe('AppController', () => {
  let appController: JsonApiController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [JsonApiController],
      providers: [JsonApiService],
    }).compile();

    appController = app.get<JsonApiController>(JsonApiController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
