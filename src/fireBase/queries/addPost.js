import firebase from '../config/config.js';

const addPost = data => {
  const db = firebase.firestore();
  return db.collection('posts').add(data);
};

export default addPost;
