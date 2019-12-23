import { Module } from '@nestjs/common';
import { JsonApiController } from './interfaces/api/json-api-controller/json-api.controller';
import { JsonApiService } from './application/json-api.service';
import { AppController } from './interfaces/controller/app.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'dist/json-server'),
    }),
  ],
  controllers: [JsonApiController, AppController],
  providers: [JsonApiService],
})
export class AppModule {
}
