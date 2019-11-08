import firebase from 'firebase';

var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyAuqXCgR7z4DgDmTOXWOyTJq_o0IO9NsLY",
  authDomain: "tomgamachebooks.firebaseapp.com",
  databaseURL: "https://tomgamachebooks.firebaseio.com",
  storageBucket: "tomgamachebooks.appspot.com",
  messagingSenderId: "233346595074"
};

var fire = firebase.initializeApp(config);
export default fire;
