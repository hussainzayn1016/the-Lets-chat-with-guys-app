
var firebaseConfig = {
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
document.getElementById("user_name").innerHTML="Welcome "+ user_name + " !";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room names="+Room_names);
row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+
"</div> <hr>";
document.getElementById("output").innerHTML+=row;


      //End code
      });});}
getData();

function addRoom() {
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });

      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}