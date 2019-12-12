import firebase from '../config/config.js';

const singIn = (email, password) => {
  const db = firebase.firestore();
  return db
    .collection('users')
    .where('email', '==', email)
    .where('password', '==', password)
    .get();
};

export default singIn;
