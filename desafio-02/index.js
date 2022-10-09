const perguntas = document.querySelectorAll(".pergunta");
const imagemSeta = document.querySelectorAll('#fechado');
const respostas = document.querySelectorAll('.resposta');
const acoordeon = document.querySelectorAll(".accordeon");

acoordeon.forEach((pergunta,index) =>{
    pergunta.addEventListener('click', () =>{
        if(verificaSeExisteElemento(index)) return;
        scrollThroughImagesAnswers()

        const referenciaSeta = imagemSeta[index];
        const referenciaResposta = respostas[index];

        addFunctions(referenciaSeta, referenciaResposta);
    });
});

const verificaSeExisteElemento = index =>{
    const existeClassInElement = respostas[index]
        .classList.contains("aberto");

    if(existeClassInElement){
        scrollThroughImagesAnswers()
        return true
    }
}

const scrollThroughImagesAnswers= () =>{
    respostas.forEach(resposta =>{
        resposta.classList.remove("aberto");
    });

    imagemSeta.forEach(seta =>{
        seta.src = './src/imagem/seta.png'
        seta.classList.remove("rotacionar");
    })
}

const addFunctions = (referenciaSeta, referenciaResposta) =>{
    referenciaSeta.src = './src/imagem/seta-colorida.png'
    referenciaSeta.classList.add("rotacionar");
    referenciaResposta.classList.add("aberto");
}

