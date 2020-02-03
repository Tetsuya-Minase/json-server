import { connect, Db } from 'mongodb';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MongoDbLibrary {
  private dbClient: Db;

  constructor() {
    // TODO: URLのハードコードやめる
    connect('', { useUnifiedTopology: true })
      .then(res => {
        this.dbClient = res.db();
      })
      .catch(err => console.error('エラーだよ', err));
  }

  async get() {
    this.dbClient.collection('json')
      .find().forEach(item => console.log('item', item));
  }

  async registerOne() {
    // this.dbClient.collection('json').insertOne();
  }
}
