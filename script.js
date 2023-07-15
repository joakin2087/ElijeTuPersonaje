let personajes = [];
personajes[0] = document.getElementById("Marge");
personajes[1] = document.getElementById("Homero");
personajes[2] = document.getElementById("Lisa");
personajes[3] = document.getElementById("Bart");

let score = 0;
intentos = 2;
const btnM = document.querySelector("#btn");
const modalCentro = document.querySelector("#modal");
const modalContent = document.querySelector(".modalContent");
const contenido = document.querySelector(".contenido");
let personajecount = 0;
let disable = false;
let fallingCount = 0; 


personajes.forEach((personaje)=>{
  personaje.addEventListener ("click", () =>{

   
    const btns = document.getElementById('btns');
    btns.style.visibility= "visible";
    personajecount++;
   
    
       
    while (personajecount ===5){
     disable = true; 
   
         if (disable === true|| score === 5 ){
          if(fallingCount === 4 ){
            contenido.innerHTML = "¡ GAME OVER, vuelve a a comenzar el juego!";
            btns.style.visibility= "hidden";
            intentos = 2 ; 
          }
          personaje.classList.add("disable");
          personaje.style.pointerEvents = "none";
          fallingCount++;
          contenido.innerHTML = "Elije otro personaje" ;
          disable = false;
          personajecount = 0;
      }
    
     
    }
    
   
 

    modalCentro.classList.add("active");
    contenido.innerHTML = "¡Has elegido a " + personaje.id +"!" +" ¡Buena eleccíón!";

  

  switch (personajes.indexOf(personaje)) {
    case 0:
      const margeAudio = document.getElementById("margeVoz");
    margeAudio.play();
    fetch('Preguntas.json')
    .then(response => response.json())
    .then(data => {
    document.getElementById('pregunta').innerHTML = data.preguntas[0].Marge[personajecount].pregunta; 
    document.getElementById('respuesta1').innerHTML = data.preguntas[0].Marge[personajecount].Opciones[0].texto;
    document.getElementById('respuesta2').innerHTML = data.preguntas[0].Marge[personajecount].Opciones[1].texto;
    document.getElementById('respuesta3').innerHTML = data.preguntas[0].Marge[personajecount].Opciones[2].texto;
    document.getElementById('Opcion1').value = data.preguntas[0].Marge[personajecount].Opciones[0].result;
    document.getElementById('Opcion2').value = data.preguntas[0].Marge[personajecount].Opciones[1].result;
    document.getElementById('Opcion3').value = data.preguntas[0].Marge[personajecount].Opciones[2].result;
   
  })  

      break;
    case 1:
    const homeroAudio = document.getElementById("HomeroVoz");
      homeroAudio.play();
      fetch('Preguntas.json')
      .then(response => response.json())
      .then(data => {
      document.getElementById('pregunta').innerHTML = data.preguntas[1].Homero[personajecount].pregunta; 
      document.getElementById('respuesta1').innerHTML = data.preguntas[1].Homero[personajecount].Opciones[0].texto;
      document.getElementById('respuesta2').innerHTML = data.preguntas[1].Homero[personajecount].Opciones[1].texto;
      document.getElementById('respuesta3').innerHTML = data.preguntas[1].Homero[personajecount].Opciones[2].texto;
      document.getElementById('Opcion1').value = data.preguntas[1].Homero[personajecount].Opciones[0].result;
      document.getElementById('Opcion2').value = data.preguntas[1].Homero[personajecount].Opciones[1].result;
      document.getElementById('Opcion3').value = data.preguntas[1].Homero[personajecount].Opciones[2].result;
    
      })
      break;
    case 2:
      const lisaAudio = document.getElementById("lisaVoz");
      lisaAudio.play();
      fetch('Preguntas.json')
      .then(response => response.json())
      .then(data => {
      document.getElementById('pregunta').innerHTML = data.preguntas[2].Lisa[personajecount].pregunta; 
      document.getElementById('respuesta1').innerHTML = data.preguntas[2].Lisa[personajecount].Opciones[0].texto;
      document.getElementById('respuesta2').innerHTML = data.preguntas[2].Lisa[personajecount].Opciones[1].texto;
      document.getElementById('respuesta3').innerHTML = data.preguntas[2].Lisa[personajecount].Opciones[2].texto;
      document.getElementById('Opcion1').value = data.preguntas[2].Lisa[personajecount].Opciones[0].result;
      document.getElementById('Opcion2').value = data.preguntas[2].Lisa[personajecount].Opciones[1].result;
      document.getElementById('Opcion3').value = data.preguntas[2].Lisa[personajecount].Opciones[2].result;
      
      })
      break;
    case 3:
      const BartAudio = document.getElementById("bartVoz");
    BartAudio.play();
    fetch('Preguntas.json')
    .then(response => response.json())
    .then(data => {
    document.getElementById('pregunta').innerHTML = data.preguntas[3].Bart[personajecount].pregunta; 
    document.getElementById('respuesta1').innerHTML = data.preguntas[3].Bart[personajecount].Opciones[0].texto;
    document.getElementById('respuesta2').innerHTML = data.preguntas[3].Bart[personajecount].Opciones[1].texto;
    document.getElementById('respuesta3').innerHTML = data.preguntas[3].Bart[personajecount].Opciones[2].texto;
    document.getElementById('Opcion1').value = data.preguntas[3].Bart[personajecount].Opciones[0].result;
    document.getElementById('Opcion2').value = data.preguntas[3].Bart[personajecount].Opciones[1].result;
    document.getElementById('Opcion3').value = data.preguntas[3].Bart[personajecount].Opciones[2].result;
  
    })
    break;
    default: 
    
    
  }

    btnM.addEventListener("click", (Cerrar) => {
    modalCentro.classList.remove("active");
      })
     
 })
})

  const form = document.getElementById('formulario');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
   const respuesta = document.querySelector('input[name="respuesta"]:checked').value;
   const puntaje = document.getElementById('puntaje');

    if (respuesta === 'true' ) {
     
        score++;
        puntaje.style.visibility = "visible";
        puntaje.innerHTML ="¡Felcitaciones, has acertado! sumas " + score + " punto(s)"; 
        modalCentro.classList.remove("active");
        console.log(score);
      

        if (score === 15 && intentos <= 0 ) {
          if(confirm("¡Felicitaciones has ganado!¿Deseas jugar de nuevo?")){
              score = 0;
              puntaje.style.visibility = "hidden";
              console.log(score);
            }else{
            score=0;
            puntaje.style.visibility = "hidden";
            console.log(score);
            }
                          }
             
                            }else{
                              if(intentos === 0 ){  
                                contenido.innerHTML = "¡ GAME OVER, vuelve a a comenzar el juego!";
                                btns.style.visibility= "hidden";
                                console.log(intentos);
                                intentos = 2 ; 
                              }else{
                                btns.style.visibility= "visible";
                                contenido.innerHTML = "¡ Sigue intentando,te quedan " + (intentos) + " intento(s) !" ; 
                                intentos--;
                            }}
                            
  
  })
          
     
 


    
      const btnRedes = document.getElementById ("iconos");
      btnRedes.addEventListener('click', (enlace) => {
      const prontosAudio = document.getElementById("vuelvaProntos");
      confirm ('¿Deseas salir del sitio?') ? prontosAudio.play() :  enlace.preventDefault();
      });

    
  
      
       
      

      
    
  
  