// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDBlRW2Qx0nxJqi4JYJDAZ4ugc3AIN7fss",
      authDomain: "kwitter-71a0a.firebaseapp.com",
      projectId: "kwitter-71a0a",
      storageBucket: "kwitter-71a0a.appspot.com",
      messagingSenderId: "637867753367",
      appId: "1:637867753367:web:579631b474873edf6b4ed2"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
