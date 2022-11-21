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

window.addEventListener('DOMContentLoaded', function () {
  init();
  
});

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
    
          //console.log('CHECK IT NOW');

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

          const pull = document.getElementById;
          const pullClass = document.getElementsByClassName;
          const iconClipboard = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16"> <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/> <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/> </svg>';
          const iconChecked = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-check" viewBox="0 0 16 16">  <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/> <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/> + <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/> </svg>`;
          const iconCheckedFull = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-check-fill" viewBox="0 0 16 16"> <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3Zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3Z"/> <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5v-1Zm6.854 7.354-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708Z"/> </svg>`;
       
          var testCharacter = {
            'name':'name',
            'race':'human',
            'classes':{
              'multi':false,
              'class1':'fighter',
              'subclass1':'Samurai',
              'level1':4,
            },
            'attr':{
              'strength':{
                'score': 10,
                'save':false,
              },
              'dexterity': {
                'score': 10,
                'save':false,
              },
              'constitution': {
                'score': 10,
                'save':false,
              },
              'intelligence': {
                'score': 10,
                'save':false,
              },
              'wisdom':{
                'score': 10,
                'save':false,
              },
              'charisma':{
                'score': 10,
                'save':false,
              },
            },
            'skills': {
              'acrobatics':{
                'pro':false,
                'expert':false,
                'attr':'strength'
              },
              'animal handling':{
                'pro':false,
                'expert':false,
                'attr':'wisdom'
              },
              'arcana':{
                'pro':false,
                'expert':false,
                'attr':'intelligence'
              },
              'athletics':{
                'pro':false,
                'expert':false,
                'attr':'strength'
              },
              'deception':{
                'pro':false,
                'expert':false,
                'attr':'charisma'
              },
              'history':{
                'pro':false,
                'expert':false,
                'attr':'intelligence'
              },
              'Insight':{
                'pro':false,
                'expert':false,
                'attr':'wisdom'
              },
              'Intimidation':{
                'pro':false,
                'expert':false,
                'attr':'charisma'
              },
              'Medicine':{
                'pro':false,
                'expert':false,
                'attr':'wisdom'
              },
              'Nature':{
                'pro':false,
                'expert':false,
                'attr':'intelligence'
              },
              'Perception':{
                'pro':false,
                'expert':false,
                'attr':'wisdom'
              },
              'Performance':{
                'pro':false,
                'expert':false,
                'attr':'charisma'
              },
              'Persuasion':{
                'pro':false,
                'expert':false,
                'attr':'charisma'
              },
              'Religion':{
                'pro':false,
                'expert':false,
                'attr':'intelligence'
              },
              'Sleight of hand':{
                'pro':false,
                'expert':false,
                'attr':'dexterity'
              },
              'Stealth':{
                'pro':false,
                'expert':false,
                'attr':'dexterity'
              },
              'Survival':{
                'pro':false,
                'expert':false,
                'attr':'wisdom'
              },
            },
            'ac':15,
            'speed':30,
            'background':'sailor',
            'alignment':'Chaotic Good',
            'experience':4000,
            'hitDice':[
              10
            ],
            'attacks':[
              {
                'name':'Longsword',
                'toHit':4,
                'dmg':{'bonus':2, 'dmgDice':'d8','dmgDiceNum':1},
                'notes':'nothing special about this'
              },
              {
                'name':'Handaxe',
                'toHit':4,
                'dmg':{'bonus':2, 'dmgDice':'d6','dmgDiceNum':2},
                'notes':'this a handaxe.  Like Gimli\'s'
              },
              {
                'name':'Longbow',
                'toHit':2,
                'dmg':{'bonus':1, 'dmgDice':'d8','dmgDiceNum':2},
                'notes':'Short/Long = 120/300'
              }
            ],
            'attackNotes':'Nothing to note here',
            'deathSaves':[1,2],
            'Other Proficiencies':{
              'langs':['Common','Elvish'],
              'instruments':[],
              'tools':['Brewer\'s', 'Carpenter\'s'],
              'other':['Land Vehicles']
            },
            'appearance':{
              'age':'20',
              'height':'6ft 2in',
              'weight':'220lbs',
              'eyes':'blue',
              'skin':'peachy',
              'hair':'Dirty Blonde with a Scrappy Beard'
            },'spellcasting':{'attr':'none','spellSV':'spellAtkBonus','spellsKNOW':['Nothing Yet']},

          }
          
          function tempCharacter() {
            let tempCha = gatherChaInfo();
            set(ref(db,'/characters/'),{
              'temporary':tempCha
            }
            );  
          }

        function setSkillDrop () {
          console.log('setting skill drops');
          var skillSelect = document.querySelectorAll('.skillProSelect');
          
          for (let i=0; i<skillSelect.length; i++) {
            //console.log(skillSelect[i]);
            document.getElementById(skillSelect[i].id).addEventListener("click", function() {
              console.log('setting DROPS with' + skillSelect[i].value);
              setDrop(skillSelect[i].name,skillSelect[i].value);
            });
          }
          console.log(skillSelect);
        }

        setSkillDrop();

        function setDrop(drop,set) {
          console.log(drop + set);
          var setIcon;
          var skillName = drop.slice(0,drop.length - 4);
          if (set == 'pro') {
            setIcon = iconChecked; }
          else if (set == 'exp') {
            setIcon = iconCheckedFull;}     
          else {
            setIcon = iconClipboard;}
          
          console.log(skillName);

          document.getElementById(drop).innerHTML = setIcon;
          
        }

        function tempUpload () {
          set(ref(db,'/character/'),{
            'temp':  testCharacter
          });
        }

        var skills = {
          acro: {
            pro:false,
            exp:false,
          },
          animal:{
            pro:false,
            exp:false,
          },
          arcana:{
            pro:false,
            exp:false,
          },
          athletics:{
            pro:false,
            exp:false,
          },
          deception:{
            pro:false,
            exp:false,
          },
          history:{
            pro:false,
            exp:false,
          },
          insight:{
            pro:false,
            exp:false,
          },
          intim:{
            pro:false,
            exp:false,
          },
          investigation:{
            pro:false,
            exp:false,
          },
          medicine:{
            pro:false,
            exp:false,
          },
          nature:{
            pro:false,
            exp:false,
          },
          percept:{
            pro:false,
            exp:false,
          },
          perf:{
            pro:false,
            exp:false,
          },
          pers:{
            pro:false,
            exp:false,
          },
          religion:{
            pro:false,
            exp:false,
          },
          sleight:{
            pro:false,
            exp:false,
          },
          stealth:{
            pro:false,
            exp:false,
          },
          surv:{
            pro:false,
            exp:false,
          },
        }

        var charName = document.getElementById('charName').value;

        function upload (){
          var attrS = document.getElementsByClassName('card-text attr-Num');
          var currCharacter = gatherChaInfo();
          console.log(attrS);
            update(ref(db, '/charcters/'), { currCharacter  });
        }

        document.getElementById('testUpload').addEventListener('click',gatherChaInfo('temp'));
        document.getElementById('uploadBtn').addEventListener('click',gatherChaInfo(charName));

        function gatherChaInfo(name) {
          if (name = 'test') {
          set(ref(db,'/character/'),{
            'temp':  testCharacter
          });
          } else if (name="") {
            alert('Please Enter the Characters Name');
            document.getElementById('charNameSection').style.background = "red";
          } else {
              var strNum = pull('strCardScore').value; var dexNum = pull('dexCardScore').value; var conNum = pull('conCardScore').value;
              var intNum = pull('intCardScore').value; var wisNum = pull('wisCardScore').value; var chaNum = pull('chaCardScore').value;
              var chaToUpload = {
                'name':pull('charName').value,
                'race':pull('charRace').value,
                'classes':{
                  'multi':false,
                  'class1':pull('charClass').value,
                  'subclass1':'non yet',
                  'level1':pull('charLevel').value, 
  
                },
                'attr':{
                  'strength':{
                    'score': strNum,
                    'save': pull('strSvPro').value,
                  },
                  'dexterity': {
                    'score': dexNum,
                    'save': pull('dexSvPro').value,
                  },
                  'constitution': {
                    'score': conNum,
                    'save': pull('conSvPro').value,
                  },
                  'intelligence': {
                    'score': intNum,
                    'save': pull('intSvPro').value,
                  },
                  'wisdom':{
                    'score': wisNum,
                    'save': pull('wisSvPro').value,
                  },
                  'charisma':{
                    'score': chaNum,
                    'save': pull('chaSvPro').value,
                  },
                },
                'skills': {
                  'acrobatics':{
                    'pro':skills.acro.pro,
                    'expert':skills.acro.exp,
                    'attr':'strength'
                  },
                  'animal handling':{
                    'pro':skills.animal.pro,
                    'expert':skills.animal.exp,
                    'attr':'wisdom'
                  },
                  'arcana':{
                    'pro':skills.arcana.pro,
                    'expert':skills.arcana.exp,
                    'attr':'intelligence'
                  },
                  'athletics':{
                    'pro':skills.athletics.pro,
                    'expert':skills.athletics.exp,
                    'attr':'strength'
                  },
                  'deception':{
                    'pro':skills.deception.pro,
                    'expert':skills.deception.exp,
                    'attr':'charisma'
                  },
                  'history':{
                    'pro':skills.history.pro,
                    'expert':skills.history.exp,
                    'attr':'intelligence'
                  },
                  'insight':{
                    'pro':skills.insight.pro,
                    'expert':skills.insight.exp,
                    'attr':'wisdom'
                  },
                  'intimidation':{
                    'pro':skills.intim.pro,
                    'expert':skills.intim.exp,
                    'attr':'charisma'
                  },
                  'investigation':{
                    'pro':skills.investigation.pro,
                    'expert':skills.investigation.exp,
                    'attr':'intelligence'
                  },
                  'medicine':{
                    'pro':skills.medicine.pro,
                    'expert':skills.medicine.exp,
                    'attr':'wisdom'
                  },
                  'nature':{
                    'pro':skills.nature.pro,
                    'expert':skills.nature.exp,
                    'attr':'intelligence'
                  },
                  'perception':{
                    'pro':skills.percept.pro,
                    'expert':skills.percept.exp,
                    'attr':'wisdom'
                  },
                  'Performance':{
                    'pro':skills.perf.pro,
                    'expert':skills.perf.exp,
                    'attr':'charisma'
                  },
                  'Persuasion':{
                    'pro':skills.pers.pro,
                    'expert':skills.pers.exp,
                    'attr':'charisma'
                  },
                  'Religion':{
                    'pro':skills.religion.pro,
                    'expert':skills.religion.exp,
                    'attr':'intelligence'
                  },
                  'Sleight of hand':{
                    'pro':skills.sleight.pro,
                    'expert':skills.sleight.exp,
                    'attr':'dexterity'
                  },
                  'Stealth':{
                    'pro':skills.stealth.pro,
                    'expert':skills.stealth.exp,
                    'attr':'dexterity'
                  },
                  'Survival':{
                    'pro':skills.surv.pro,
                    'expert':skills.surv.exp,
                    'attr':'wisdom'
                  },
                },
                // where I left off!!
                'ac':15,
                'speed':30,
                'background':charBackground.value,
                'alignment':'Chaotic Good',
                'experience':4000,
                'hitDice':[10],
                'attacks':[
                  {
                    'name':'Longsword',
                    'toHit':4,
                    'dmg':{'bonus':2, 'dmgDice':'d8','dmgDiceNum':1},
                    'notes':'nothing special about this'
                  },
                  {
                    'name':'Handaxe',
                    'toHit':4,
                    'dmg':{'bonus':2, 'dmgDice':'d6','dmgDiceNum':2},
                    'notes':'this a handaxe.  Like Gimli\'s'
                  },
                  {
                    'name':'Longbow',
                    'toHit':2,
                    'dmg':{'bonus':1, 'dmgDice':'d8','dmgDiceNum':2},
                    'notes':'Short/Long = 120/300'
                  }
                ],
                'attackNotes':'Nothing to note here',
                'deathSaves':[1,2],
                'Other Proficiencies':{
                  'langs':['Common','Elvish'],
                  'instruments':[],
                  'tools':['Brewer\'s', 'Carpenter\'s'],
                  'other':['Land Vehicles']
                },
                'appearance':{
                  'age':'20',
                  'height':'6ft 2in',
                  'weight':'220lbs',
                  'eyes':'blue',
                  'skin':'peachy',
                  'hair':'Dirty Blonde with a Scrappy Beard'
                },'spellcasting':{'attr':'none','spellSV':'spellAtkBonus','spellsKNOW':['Nothing Yet']},
            }}
        } 

        var characters = [];

        function loadChar (char) {
          get(ref(db, '/characters/'+char).then((snapshot) => {
            if (snapshot.exists()) {
              console.log(snapshot.val);
            }
          }));
        }


                

        function listCharacters() {
          var character;
          get(ref(db, '/character/')).then((snapshot) => {
            if (snapshot.exists()) {
              //console.log(Object.values(snapshot.val())); 
              var charList = Object.values(snapshot.val());
              for(let key in charList) {
                character = charList[key];
                characters[key] = character.name;
                //console.log(character);
              }
              console.log(characters[0]);
            } else {console.log('issue grabbing character data');}
          });
          
        }

        listCharacters();

        //loadChar(characters[0]);

        function clickToRoll (id) {
          var elem = document.getElementById(id);
        }

       //ICONS       
      //  document.querySelectorAll('.clipboard').innerHTML = iconClipboard;
      //  document.querySelectorAll('.checked').innerHTML = iconChecked;
      //  document.querySelectorAll('.checked-full').innerHTML = iconCheckedFull;
}