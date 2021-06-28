const firebaseConfig = {
    apiKey: "AIzaSyD6dPtdnSg2Im_5CyAFuUKB-rR9tF8zfPw",
    authDomain: "rc4-ascension-2021.firebaseapp.com",
    databaseURL: "https://rc4-ascension-2021-default-rtdb.firebaseio.com",
    projectId: "rc4-ascension-2021",
    storageBucket: "rc4-ascension-2021.appspot.com",
    messagingSenderId: "463448717557",
    appId: "1:463448717557:web:5ca0eaf3ad5bc62a232dbc",
    measurementId: "G-YMNFSD28V4"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = firebase.firestore();