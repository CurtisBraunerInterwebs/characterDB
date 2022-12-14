// Import the functions you need from the SDKs you need
import { initializeApp} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import { getDatabase, ref, set, get, onValue, child, update, push} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-analytics.js";
import { getFirestore, collection, addDoc, getDocs  } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js"
//import * as functions from "https://www.gstatic.com/firebasejs/9.8.4/firebase-functions.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOyb4dGal_zFL3l2F2goDMWB8YHtftHIU",
  authDomain: "cb-character-db.firebaseapp.com",
  databaseURL: "https://cb-character-db-default-rtdb.firebaseio.com",
  projectId: "cb-character-db",
  storageBucket: "cb-character-db.appspot.com",
  messagingSenderId: "591041214038",
  appId: "1:591041214038:web:689db56717063a7e222df7",
  measurementId: "G-G3B631FPFE"
};

// Initialize Firebase
function init () {

    // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const db = getDatabase(app);
        const auth = getAuth(app);
        const analytics = getAnalytics(app);
        const fs = getFirestore(app);


        function login (email, password) {
            console.log('signing in ' + email);
            signInWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                // Signed in
              user = userCredential.user;
              console.log('signed in ' + user.email);
              signedIn ();
              console.log(user);
                })
              .catch((INVALID_PASSWORD) => {
                alert('Wrong Password, please try again');
                document.getElementById('password').value = "";
              })
              .catch((error) => {
                const errorCode = error.code;
                console.log(errorCode);
                const errorMessage = error.message;
                console.log(errorMessage);
            });
          }
    
          console.log('CHECK IT NOW');

        function register (email, password) {
            if (email == "signedIn@email.com") {
              logout();
            } else {
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              //signed in
              user = userCredential.user;
              console.log('new user ' + user.email);
              signedIn ();
            })
            .catch((EMAIL_EXISTS) => {
              login (email, password);
            })
            .catch((error) => {
              const errorCode = error.code;
              console.log(errorCode);
              const errorMessage = error.message;
              console.log(errorMessage);
            });
            if (email == "crbs1234@gmail.com") {
              admin(true);
            }
           }}
    
        function logout () {
            console.log('signing out');
            const email = user.email;
            signOut(auth)
            .then(() => {
              // Sign-out successful.
              console.log('signed out ' + email);
              signedOut ();
            }).catch((error) => {
              // An error happened.
              const errorCode = error.code;
              console.log(errorCode);
              const errorMessage = error.message;
              console.log(errorMessage);
            });
            admin(false);
          }

        function upload (name){
            set(ref(db, '/charcters'), {
                name:{
                    'name':'name',
                    'attr':{
                        'str':''
                    }
                }
            })
        }
        var characters = [];
        function listCharacters () {
          get(ref(db, '/characters')).then((snapshot) => {
            if (snapshot.exists()) {
              console.log(snapshot);
              let character;
              var charList = snapshot;
              for(let key in charList) {
                character = charList[key];
                
              }
            }
          })
        }
}