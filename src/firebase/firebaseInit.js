import firebase from 'firebase/app';
// import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';
import 'firebase/database';


const firebaseConfig = {
    apiKey: "AIzaSyDF0lS1E-NAcSevI9NJ2OLhuLn9DEeJjE4",
    authDomain: "sy-portfolio-5214c.firebaseapp.com",
    projectId: "sy-portfolio-5214c",
    storageBucket: "sy-portfolio-5214c.appspot.com",
    messagingSenderId: "820608097468",
    appId: "1:820608097468:web:5273d2bb72faab1aa844b9"
};

// firebaseConfig 정보로 firebase 시작
export default firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const db = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const database  =  firebase.database()

export {db, storage, auth, database }


