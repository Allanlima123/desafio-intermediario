const prev = document.querySelector('.voltar');
const next = document.querySelector('.avancar');
let slides =  document.querySelectorAll('.carousel');

let index = 0;

const totalSlides = slides.length - 1;

const addNewSlide = () => slides[index].classList.add("ativa");


const novoSlider = () =>{
    slides[index].classList.remove("ativa");

    index === totalSlides ? index = 0 : index++;

    addNewSlide();
}

const sliderAnterior = () =>{
    slides[index].classList.remove("ativa");

    index === 0 ? index = totalSlides : index--;

    addNewSlide();
}

prev.addEventListener("click",sliderAnterior)
next.addEventListener("click",novoSlider);











