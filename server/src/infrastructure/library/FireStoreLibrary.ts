import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { config } from 'firebase-functions';

@Injectable()
export class FireStoreLibrary {
  private readonly DB_CLIENT: admin.firestore.Firestore;

  constructor() {
    admin.initializeApp(config().firebase);
    this.DB_CLIENT = admin.firestore();
  }
}
