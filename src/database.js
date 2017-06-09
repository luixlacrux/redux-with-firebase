import firebase from 'firebase'

const config = {
    apiKey: 'AIzaSyB_QFpuABcabFKay1HE1m4KsZKtvYQkKaY',
    authDomain: 'redux-with-firebase.firebaseapp.com',
    databaseURL: 'https://redux-with-firebase.firebaseio.com',
    projectId: 'redux-with-firebase',
    storageBucket: 'redux-with-firebase.appspot.com',
    messagingSenderId: '625605599481',
}

firebase.initializeApp(config)
const database = firebase.database()

export default database
