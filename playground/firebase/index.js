import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCQiptSnz7kihVrh7eum57b3uqVyroqslI",
  authDomain: "reacttodo-app-1e8cb.firebaseapp.com",
  databaseURL: "https://reacttodo-app-1e8cb.firebaseio.com",
  projectId: "reacttodo-app-1e8cb",
  storageBucket: "reacttodo-app-1e8cb.appspot.com",
  messagingSenderId: "622289827266"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebase.database().ref().set({
  app: {
   appName: 'Todo App',
   versrion: '1.0'
  },
  user: {
    name: 'supun',
    age: 36
  },
  isMarried: true,
  emp: 'eBuilder'
});

firebaseRef.update({
  isMarried: false,
  'app/appName': 'React app',
  'user/name': 'Supun Gamage'
});

firebaseRef.child('app').update({
  appName: 'React Todo App',
});

firebaseRef.child('user').update({
  name: 'Supun'
});

firebaseRef.child('user/age').remove();
firebaseRef.update({
  isMarried : null
});

firebaseRef.child('app').once('value').then((snapshot) => {
  console.log('DB', snapshot.key, snapshot.val());
}, (e) => {
  console.log('Unable to get data');
});

//firebaseRef.on('value', (snapshot) => {
//  console.log('On val', snapshot.val());
//});

//firebaseRef.off();

var logData = (snapshot) => {
  console.log('On val', snapshot.val());
};

firebaseRef.on('value', logData);

firebaseRef.child('user').on('value', (snapshot) => {
  console.log('User Update', snapshot.key, snapshot.val());
});

firebaseRef.off('value', logData);

/*firebaseRef.update({
  emp: 'Home'
});*/

firebaseRef.child('user').update({
  name: 'Rangika'
});

firebaseRef.child('app').update({
  name: 'My App'
});

var noteRef = firebaseRef.child('notes');

noteRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val());
});

noteRef.on('child_removed', (snapshot) => {
  console.log('child_removed', snapshot.key, snapshot.val());
});

noteRef.on('child_changed', (snapshot) => {
  console.log('child_changed', snapshot.key, snapshot.val());
});

var newNoteRef = noteRef.push({
  text: 'walk the dog',
  status: true
});

console.log('newNoteRef', newNoteRef.key);

var todoRef = firebaseRef.child('todos');

todoRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val());
});

todoRef.on('child_removed', (snapshot) => {
  console.log('child_removed', snapshot.key, snapshot.val());
});

todoRef.on('child_changed', (snapshot) => {
  console.log('child_changed', snapshot.key, snapshot.val());
});

todoRef.push(
  {
    text: '1111',
    completed: false
  }
);

todoRef.push(
  {
    text: '2222',
    completed: false
  }
);
