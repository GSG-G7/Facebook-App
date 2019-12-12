import firebase from '../config/config.js';

const getAllPosts = userId => {
  const db = firebase.firestore();
  return db
    .collection('posts')
    .where('user_id', '==', userId)
    .get();
};

export default getAllPosts;
