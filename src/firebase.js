import firebase from 'firebase'

// const firebase = () => {
  const config = {
    apiKey: "AIzaSyDPJUuTIi_3qOJEoEKf6YyZPRHel4W6a1o",
    authDomain: "goat-233219.firebaseapp.com",
    databaseURL: "https://goat-233219.firebaseio.com",
    projectId: "goat-233219",
    storageBucket: "goat-233219.appspot.com",
    messagingSenderId: "24985852170"
  }
  firebase.initializeApp(config)
// }

export default firebase