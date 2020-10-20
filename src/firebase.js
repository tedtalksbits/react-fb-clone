import firebase from "firebase";
// initial tthe app


const firebaseConfig = {
    apiKey: "AIzaSyBT09TjqV-8PebpCcjbT2fdVWLK_DQ0tOE",
    authDomain: "facebook-clone-f0991.firebaseapp.com",
    databaseURL: "https://facebook-clone-f0991.firebaseio.com",
    projectId: "facebook-clone-f0991",
    storageBucket: "facebook-clone-f0991.appspot.com",
    messagingSenderId: "792925296492",
    appId: "1:792925296492:web:31af0cb6ec99e80fce8549",
    measurementId: "G-WP2H5N2RXW"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export {auth, provider};
  export default db;
