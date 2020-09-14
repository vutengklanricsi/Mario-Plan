import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyD7q5AiDhRREuuJKbnvhI_o2W8dpNmjNeg",
    authDomain: "marioplan-e13d9.firebaseapp.com",
    databaseURL: "https://marioplan-e13d9.firebaseio.com",
    projectId: "marioplan-e13d9",
    storageBucket: "marioplan-e13d9.appspot.com",
    messagingSenderId: "415854586983",
    appId: "1:415854586983:web:336fa9004d20377b38f8c2",
    measurementId: "G-Q41LG34PK4"
  };

firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({timestampsInSnapshots: true})

export default firebase;

// Inicializálja a firestore-t és és hozzáadjuk a settings-et aminek átadunk egy objektumot egy propertyt adunk át neki amit timestampsinSnapshots.
// Ez egy update a firebase library-ben ami megváltoztatja, hogy működik a firebase time stamps-el