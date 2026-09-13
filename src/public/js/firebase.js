let firebaseConfig = {
    apiKey: "AIzaSyC2fUZINWps2wXdm-Gkn_FI-xsR6630Kps",
    authDomain: "blog-site-8563d.firebaseapp.com",
    projectId: "blog-site-8563d",
    storageBucket: "blog-site-8563d.appspot.com",
    messagingSenderId: "401678124963",
    appId: "1:401678124963:web:08a444858b4f1dffc2bc16"
  };

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();