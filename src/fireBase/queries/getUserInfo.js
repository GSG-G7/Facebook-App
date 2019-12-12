import firebase from '../config/config.js';

const getUserInfo = userId => {
  const db = firebase.firestore();
  return db
    .collection('users')
    .doc(userId)
    .get();
};

export default getUserInfo;
