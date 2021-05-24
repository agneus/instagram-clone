import firebase from 'firebase'

 const firebaseConfig = {
    apiKey: "AIzaSyDF2_M8Pg7SvhZ5pV8ac22QTpubEI7LV6k",
    authDomain: "instagram-clone23.firebaseapp.com",
    projectId: "instagram-clone23",
    storageBucket: "instagram-clone23.appspot.com",
    messagingSenderId: "404334927736",
    appId: "1:404334927736:web:495cf2f25d03df7883b28d",
    measurementId: "G-1WFXPZLFT0"
  };

 const firebaseApp = firebase.initializeApp(firebaseConfig);

 const db= firebaseApp.firestore();
 const auth= firebase.auth();
 const storage = firebase.storage();

 export {db,auth,storage};