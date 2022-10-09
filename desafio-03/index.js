const BotaoDeEnvio = document.getElementById('btnEnviar');

const formularioDeCadastro = (e) =>{
    e.preventDefault();
    let nomeUsuario = document.querySelector("#nome");
    let emailUsuario = document.getElementById("email");
    let numeroUsuario = document.getElementById("telefone");
    let texto = document.querySelector("#texto");
    let aviso = document.querySelectorAll(".aviso");

    aviso.forEach(aviso =>{
        aviso.innerHTML = "campo obrigatório";
        aviso.style.color = "#f00";
    })
    
    if(nomeUsuario.value === ""){
        nomeUsuario.classList.add("active");
    }else{
        aviso[0].innerHTML = "";
        nomeUsuario.classList.remove("active");
        nomeUsuario.classList.add("ativarVerde");
    }

    if(emailUsuario.value.indexOf("@") === -1 || emailUsuario.value === ("")){
        emailUsuario.classList.add("active");
    }else{
        aviso[1].innerHTML = "";
        emailUsuario.classList.remove("active");
        emailUsuario.classList.add("ativarVerde");
    }

    if(isNaN(numeroUsuario.value) || numeroUsuario.value === "" || numeroUsuario.value.length <= 3){
        numeroUsuario.classList.add("active");
    }else{
        aviso[2].innerHTML = "";
        numeroUsuario.classList.remove("active");
        numeroUsuario.classList.add("ativarVerde");
    }

    if(texto.value === ""){
        texto.classList.add("active");
    }else{
        aviso[3].innerHTML = "";
        texto.classList.remove("active");
        texto.classList.add("ativarVerde");
    }
};

BotaoDeEnvio.addEventListener('click', formularioDeCadastro);
