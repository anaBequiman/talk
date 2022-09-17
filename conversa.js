const firebaseConfig = {
    apiKey: "AIzaSyBox1We378uZDYfh8LZNxeQLkV6Ro7CvNM",
    authDomain: "talk-997f7.firebaseapp.com",
    databaseURL: "https://talk-997f7-default-rtdb.firebaseio.com",
    projectId: "talk-997f7",
    storageBucket: "talk-997f7.appspot.com",
    messagingSenderId: "781676367890",
    appId: "1:781676367890:web:3c84440e2008fa13fb08cb"
  };
// Initializing Frebase
firebase.initializeApp(firebaseConfig);
nomeDoUsuario = localStorage.getItem("nomeDoUsuario");
document.getElementById("nomeSalvo").innerHTML = "Bem vindo(a) " + nomeDoUsuario + "!";
function addSala(){
  var novaSala = document.getElementById("nomeSala").value;
  firebase.database().ref("/").child(novaSala).update({
      sala : "salaCriada"
  });
  localStorage.setItem("nomeDaSala", novaSala);
  window.location = "sala.html";
}
function getData() {firebase.database().ref("/").on('value',
  function(snapshot) {snapshot.forEach(function(childSnapshot) {childKey =
  childSnapshot.key;
  roomNames = childKey;
  //Início do código
    console.log(roomNames);
    divJs = "<div class='roomName'id="+roomNames+"  onclick='entrarSala(this.id)'>"+roomNames+"</div> <hr>"
    document.getElementById("nomeSalas").innerHTML += divJs;
  //Fim do código
});});}
  getData();
function entrarSala(name){
  console.log(name);
  localStorage.setItem("nomeDaSalaFeita",name)
  window.location = "sala.html";
} 