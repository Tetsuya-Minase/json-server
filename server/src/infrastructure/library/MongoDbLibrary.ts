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

  async getAll<T = any>(): Promise<T[]> {
    return await this.dbClient
      .collection('json')
      .find<T>()
      .toArray();
  }

  async getByKey<T = any>(key: string): Promise<T> {
    return await this.dbClient.collection('join').findOne<T>({ key });
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
