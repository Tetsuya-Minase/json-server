import { connect, Db } from 'mongodb';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

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

  async get() {
    this.dbClient
      .collection('json')
      .find()
      .forEach(item => console.log('item', item));
  }

  async registerOne() {
    // this.dbClient.collection('json').insertOne();
  }
}
