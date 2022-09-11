function adicionarUser(){
    nomeDoUser = document.getElementById("nomeUsuario").value;
    localStorage.setItem("nomeDoUsuario", nomeDoUser);
    window.location = "conversa.html";
}