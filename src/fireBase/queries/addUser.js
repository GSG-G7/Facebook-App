import firebase from '../config/config.js';

const addUser = data => {
  const {firstName, lastName, email, password} = data;
  const db = firebase.firestore();
  return db.collection('users').add({
    first_name: firstName,
    last_name: lastName,
    email,
    password,
  });
};

export default addUser;
