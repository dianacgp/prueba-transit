import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const prodConfig = {
  apiKey: "AIzaSyBspMd3OQ1Djwuv-WgHPwYWD8fIS9Dnh-Q",
  authDomain: "blog-4f94e.firebaseapp.com",
  databaseURL: "https://blog-4f94e.firebaseio.com",
  projectId: "blog-4f94e",
  storageBucket: "blog-4f94e.appspot.com",
  messagingSenderId: "15903074939"
};

const devConfig = {
  apiKey: "AIzaSyBspMd3OQ1Djwuv-WgHPwYWD8fIS9Dnh-Q",
  authDomain: "blog-4f94e.firebaseapp.com",
  databaseURL: "https://blog-4f94e.firebaseio.com",
  projectId: "blog-4f94e",
  storageBucket: "blog-4f94e.appspot.com",
  messagingSenderId: "15903074939"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
