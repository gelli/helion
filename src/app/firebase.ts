import 'firebase/database';

import * as firebase from 'firebase/app';

firebase.initializeApp({
  databaseURL: "https://hacker-news.firebaseio.com",
});

const database = firebase.database();
const api = database.ref("/v0");

export { firebase, database, api };
