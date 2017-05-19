import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyCQiptSnz7kihVrh7eum57b3uqVyroqslI",
    authDomain: "reacttodo-app-1e8cb.firebaseapp.com",
    databaseURL: "https://reacttodo-app-1e8cb.firebaseio.com",
    projectId: "reacttodo-app-1e8cb",
    storageBucket: "reacttodo-app-1e8cb.appspot.com",
    messagingSenderId: "622289827266"
  };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
