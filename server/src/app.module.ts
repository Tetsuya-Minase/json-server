import { Module } from '@nestjs/common';
import { JsonController } from './interfaces/json-controller/json.controller';
import { AppService } from './application/app.service';

@Module({
  imports: [],
  controllers: [JsonController],
  providers: [AppService]
})
export class AppModule {
}
