import firebase from '../config/config.js';

const addComment = () => {
  const db = firebase.firestore();
  return db
    .collection('likes')
    .doc('user1@email.com')
    .collection('posts')
    .doc('FuuqaA4bN9vUodV19Mpe')
    .update({
      comments: firebase.firestore.FieldValue.arrayUnion({
        first: 'khalasdffed',
        last: 'whaleed',
      }),
    });
};

export default addComment;
