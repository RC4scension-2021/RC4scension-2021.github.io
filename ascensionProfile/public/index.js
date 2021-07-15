const firebaseConfig = {
    apiKey: "AIzaSyAso7YCd0EA8g05ynWXaQjV_Yo9fevfKz4",
    authDomain: "ascension-profile.firebaseapp.com",
    // databaseURL: "https://rc4-ascension-2021-default-rtdb.firebaseio.com",
    projectId: "ascension-profile",
    storageBucket: "ascension-profile.appspot.com",
    messagingSenderId: "982755860772",
    appId: "1:982755860772:web:23327ae1275626f66c13b1",
    measurementId: "G-8J8EWKKDL5"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = firebase.firestore();