import * as firebase from "firebase-admin";
const serviceAccount = require("./workshop-nodejs-connect-firebase.json");

const initFirebaseAppAndGetDB = () => {
  const app = firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
  });
  return firebase.firestore(app);
};

const db = initFirebaseAppAndGetDB();

export default db;
