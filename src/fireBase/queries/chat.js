import firebase from '../config/config.js';

const chat = () => {
  const db = firebase.database();
  return db
    .collection('likes')
    .doc('user1@email.com')
    .collection('posts')
    .add({});
};

export default chat;
