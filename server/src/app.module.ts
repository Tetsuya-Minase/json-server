import { Module } from '@nestjs/common';
import { AppController } from './interfaces/controller/app.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { JsonApiModule } from './modules/json-api.module';
import { JsonApiService } from './application/json-api.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'dist/json-server'),
    }),
    JsonApiModule,
    ConfigModule.forRoot({
      envFilePath: '../config/local.env',
    }),
  ],
  controllers: [AppController],
  providers: [JsonApiService],
})
export class AppModule {}
