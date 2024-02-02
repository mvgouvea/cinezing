function logar(){

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if(email == "suporte@cinezing.com.br" && password == "admin"){
        window.location.replace("home.html")
    
    }else{
        alert("Credenciais incorretas")
    }
}


function cadastro(){
    var nome = document.getElementById('nome').value;
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;

    if(nome != "" && email != "" && password != ""){
        alert("Parabéns você faz parte da melhor comunidade de filmes e séries!!")
        window.location.replace("home.html")
    }else{
        alert("Campo em branco favor preencher")
    }

}
