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

personajes.forEach((personaje)=>{
  personaje.addEventListener ("click", () =>{
    
    
 
    
    modalCentro.classList.add("active");
    contenido.innerHTML = "¡Has elegido a " + personaje.id +"!" +" ¡Buena eleccíón!";

   
  let random = Math.floor(Math.random() * 5);
 


  

  switch (personajes.indexOf(personaje)) {
    case 0:
      const margeAudio = document.getElementById("margeVoz");
    margeAudio.play();
    fetch('Preguntas.json')
    .then(response => response.json())
    .then(data => {
    document.getElementById('pregunta').innerHTML = data.preguntas[0].Marge[random].pregunta; 
    document.getElementById('respuesta1').innerHTML = data.preguntas[0].Marge[random].Opciones[0].texto;
    document.getElementById('respuesta2').innerHTML = data.preguntas[0].Marge[random].Opciones[1].texto;
    document.getElementById('respuesta3').innerHTML = data.preguntas[0].Marge[random].Opciones[2].texto;
    document.getElementById('Opcion1').value = data.preguntas[0].Marge[random].Opciones[0].result;
    document.getElementById('Opcion2').value = data.preguntas[0].Marge[random].Opciones[1].result;
    document.getElementById('Opcion3').value = data.preguntas[0].Marge[random].Opciones[2].result;
 

  })

      break;
    case 1:
    const homeroAudio = document.getElementById("HomeroVoz");
      homeroAudio.play();
      fetch('Preguntas.json')
      .then(response => response.json())
      .then(data => {
      document.getElementById('pregunta').innerHTML = data.preguntas[1].Homero[random].pregunta; 
      document.getElementById('respuesta1').innerHTML = data.preguntas[1].Homero[random].Opciones[0].texto;
      document.getElementById('respuesta2').innerHTML = data.preguntas[1].Homero[random].Opciones[1].texto;
      document.getElementById('respuesta3').innerHTML = data.preguntas[1].Homero[random].Opciones[2].texto;
      document.getElementById('Opcion1').value = data.preguntas[1].Homero[random].Opciones[0].result;
      document.getElementById('Opcion2').value = data.preguntas[1].Homero[random].Opciones[1].result;
      document.getElementById('Opcion3').value = data.preguntas[1].Homero[random].Opciones[2].result;
    
      })
      break;
    case 2:
      const lisaAudio = document.getElementById("lisaVoz");
      lisaAudio.play();
      fetch('Preguntas.json')
      .then(response => response.json())
      .then(data => {
      document.getElementById('pregunta').innerHTML = data.preguntas[2].Lisa[random].pregunta; 
      document.getElementById('respuesta1').innerHTML = data.preguntas[2].Lisa[random].Opciones[0].texto;
      document.getElementById('respuesta2').innerHTML = data.preguntas[2].Lisa[random].Opciones[1].texto;
      document.getElementById('respuesta3').innerHTML = data.preguntas[2].Lisa[random].Opciones[2].texto;
      document.getElementById('Opcion1').value = data.preguntas[2].Lisa[random].Opciones[0].result;
      document.getElementById('Opcion2').value = data.preguntas[2].Lisa[random].Opciones[1].result;
      document.getElementById('Opcion3').value = data.preguntas[2].Lisa[random].Opciones[2].result;
      
      })
      break;
    case 3:
      const BartAudio = document.getElementById("bartVoz");
    BartAudio.play();
    fetch('Preguntas.json')
    .then(response => response.json())
    .then(data => {
    document.getElementById('pregunta').innerHTML = data.preguntas[3].Bart[random].pregunta; 
    document.getElementById('respuesta1').innerHTML = data.preguntas[3].Bart[random].Opciones[0].texto;
    document.getElementById('respuesta2').innerHTML = data.preguntas[3].Bart[random].Opciones[1].texto;
    document.getElementById('respuesta3').innerHTML = data.preguntas[3].Bart[random].Opciones[2].texto;
    document.getElementById('Opcion1').value = data.preguntas[3].Bart[random].Opciones[0].result;
    document.getElementById('Opcion2').value = data.preguntas[3].Bart[random].Opciones[1].result;
    document.getElementById('Opcion3').value = data.preguntas[3].Bart[random].Opciones[2].result;
  
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
       

        if (score === 15) {
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
                              if(intentos<=0){  
                                contenido.innerHTML = "¡Perdiste , sos alto pete!"; 
                                intentos = 2 ; 
                                modalCentro.classList.remove("active");
                              }else{
                              contenido.innerHTML = "¡Sigue intentando, tu puedes!¡Te queda " + (intentos) + " intentos" ; 
                              intentos--;
                            }}
                            
  
  })

          
     
 


    
      const btnRedes = document.getElementById ("iconos");
      btnRedes.addEventListener('click', (enlace) => {
      const prontosAudio = document.getElementById("vuelvaProntos");
      confirm ('¿Deseas salir del sitio?') ? prontosAudio.play() :  enlace.preventDefault();
      });

    
  
      
       
      

      
    
  
  