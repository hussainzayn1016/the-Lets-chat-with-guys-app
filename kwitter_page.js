const firebaseConfig = {
      apiKey: "AIzaSyCxGzsmn7i2YVbOcEGgKssqHOpjs9oCV6g",
      authDomain: "kwitter-22566.firebaseapp.com",
      databaseURL: "https://kwitter-22566-default-rtdb.firebaseio.com",
      projectId: "kwitter-22566",
      storageBucket: "kwitter-22566.appspot.com",
      messagingSenderId: "696965249118",
      appId: "1:696965249118:web:af8d0fd4435ce211931ccf"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("username");
room_name=localStorage.getItem("room_name");
 
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send() {
     msg=document.getElementById("msg").value;
     firebase.database().ref("room_name").push({
      message:msg,
      like:0,
      name:user_name

     });
     document.getElementById("msg").value="";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}