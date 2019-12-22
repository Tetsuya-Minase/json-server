import { Test, TestingModule } from '@nestjs/testing';
import { JsonController } from './json.controller';
import { AppService } from '../../application/app.service';

describe('AppController', () => {
  let appController: JsonController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [JsonController],
      providers: [AppService],
    }).compile();

    appController = app.get<JsonController>(JsonController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
