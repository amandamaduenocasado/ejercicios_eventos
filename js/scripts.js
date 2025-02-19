// ## EVENTOS

// - Crea un botón con la etiqueta <button> en tu página HTML y añade un evento de click que muestre en la consola el texto que tenga botón al hacer click.

const mainButton = document.getElementById('main-button');
mainButton.addEventListener('click', ()=>console.dir(mainButton.textContent));

// - Crea un h1 con el texto "Soy un título ", al ponerte con el ratón encima del h1, deberá cambiar al texto a "Quita de encima!!!" y al quitarte, deberá volver a poner "Soy un título"

const mainTitle = document.getElementById('main-title');
mainTitle.addEventListener('mouseenter', () => {
    mainTitle.textContent = 'Quita de encima!!!';
});

mainTitle.addEventListener('mouseleave', () => {
    mainTitle.textContent = 'Soy un título';
});

// - Crea un p con el texto "esperando entrada de teclado..." al pulsar cualquier tecla deberá poner "has pulsado la tecla tal" y al soltarla el <p> volverá a tener el texto "esperando entrada de teclado...". Como reto extra puedes intentar añadir si se ha usado una combinación de teclas con alt, shift o control

const mainParagraph = document.getElementById('paragraph');

document.addEventListener('keydown', (event)=>{
    mainParagraph.textContent= `has pulsado la tecla: ${event.key}`;
});

document.addEventListener('keyup', () => {
    mainParagraph.textContent = 'esperando entrada de teclado...';
});

// - Crea un array con 5 palabras. Añade un h2 a tu HTML y ponle un id. Añade dos botones con el texto previus y next respectívamente. Haz que los botones cambien el texto del h2 con las palabras del array, cuando llegues a la última volverás a la primera si pulsas next y cuando estés en la primera podrás volver a la última dandole a previous.

const array = ['conejo','salamanquesa','pollo','gallina','rata'];
let counter = 0;

const changeName = document.getElementById('words');
const previous = document.getElementById('previous');
const next = document.getElementById('next');

const nextAnimal = (array) =>{
    console.log(counter)
    counter++;
    if(counter===array.length){
        counter=0;
    }
    changeName.textContent=array[counter];
}
const previousAnimal = (array) =>{
    console.log(counter)
    if(counter=== 0){
        counter=array.length-1
    }else{
        counter--
    }
    changeName.textContent=array[counter];
}

next.addEventListener('click',()=>nextAnimal(array));
previous.addEventListener('click',()=>previousAnimal(array));