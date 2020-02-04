import { connect, Db } from 'mongodb';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JsonDataValue } from '../../domain/model/object/JsonDataValue';

@Injectable()
export class MongoDbLibrary {
  private dbClient: Db;

  constructor(private readonly configService: ConfigService) {
    connect(
      this.configService.get<string>('URL'),
      { useUnifiedTopology: true },
    )
      .then(res => {
        this.dbClient = res.db();
      })
      .catch(err => console.error('エラーだよ', err));
  }

  async get(): Promise<any[]> {
    return await this.dbClient
      .collection('json')
      .find()
      .toArray();
  }

  async registerOne(data: JsonDataValue): Promise<void> {
    const registered = await this.dbClient
      .collection('json')
      .findOne({ key: data.key });
    // 登録済みならupdate
    if (registered) {
      await this.dbClient
        .collection('json')
        .updateOne({ key: data.key }, { $set: { data } });
    } else {
      const registerData = { ...data };
      await this.dbClient.collection('json').insertOne(registerData);
    }
  }
}
