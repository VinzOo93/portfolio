import { initializeApp, cert } from 'firebase-admin/app';
import { getDatabase } from 'firebase-admin/database';

export const app = initializeApp({
  credential: cert(process.env.PWD + '/serviceAccountKey.json'),
  databaseURL: 'https://portfolio-vincent-orru-default-rtdb.europe-west1.firebasedatabase.app'
});

export const realtimeDatabase = getDatabase();
