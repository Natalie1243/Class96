// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDgLHxl2ELh6iLjJBlxMf6WWeHVS9pQxRE",
      authDomain: "classtest-2f8f4.firebaseapp.com",
      projectId: "classtest-2f8f4",
      storageBucket: "classtest-2f8f4.appspot.com",
      messagingSenderId: "976934265393",
      appId: "1:976934265393:web:2982d35c8ddc6605702b10"
    };
    
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML= "welcome " + user_name + "!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
        console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#" + Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = ""
}