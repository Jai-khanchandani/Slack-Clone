import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAwNADNsqWAuAj0bW2dRDe6nOpuSoMEgws",
    authDomain: "slack-clone-e2fed.firebaseapp.com",
    projectId: "slack-clone-e2fed",
    storageBucket: "slack-clone-e2fed.appspot.com",
    messagingSenderId: "591433810150",
    appId: "1:591433810150:web:432ca39bdb51607396bb27"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider, db };
