 
 var firebaseConfig = {
      apiKey: "AIzaSyCvTKG0ciZsmRwHLY0PuZIOiq3r3sRz-T8",
      authDomain: "kwitter-7ac44.firebaseapp.com",
      databaseURL: "https://kwitter-7ac44.firebaseio.com",
      projectId: "kwitter-7ac44",
      storageBucket: "kwitter-7ac44.appspot.com",
      messagingSenderId: "1681758027",
      appId: "1:1681758027:web:cc810803e4ae617dc83ace"
    };
 
    firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
