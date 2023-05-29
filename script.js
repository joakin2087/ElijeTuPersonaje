let personajes = [];
personajes[0] = document.getElementById("Marge");
personajes[1] = document.getElementById("Homero");
personajes[2] = document.getElementById("Lisa");
personajes[3] = document.getElementById("Bart");

personajes.forEach((personaje)=>{
  personaje.addEventListener ("click", () =>{
         
    const btnM = document.querySelector("#btn");
    const modalCentro = document.querySelector("#modal");
    const modalContent = document.querySelector(".modalContent");
    const contenido = document.querySelector(".contenido");
    
    modalCentro.classList.add("active");
    contenido.innerHTML = "¡Has elegido a " + personaje.id +"!" +" ¡Buena eleccíón!";

  switch (personajes.indexOf(personaje)) {
    case 0:
      const margeAudio = document.getElementById("margeVoz");
    margeAudio.play();
      break;
    case 1:
    const homeroAudio = document.getElementById("HomeroVoz");
      homeroAudio.play();
      break;
    case 2:
      const lisaAudio = document.getElementById("lisaVoz");
      lisaAudio.play();
      break;
    case 3:
      const BartAudio = document.getElementById("bartVoz");
    BartAudio.play();
    break;
    default:
    console.log(personajes);
    
  }
    btnM.addEventListener("click", (Cerrar) => {
    modalCentro.classList.remove("active");
    });
    })
    })
      const btnRedes = document.getElementById ("iconos");
      btnRedes.addEventListener('click', (enlace) => {
      const prontosAudio = document.getElementById("vuelvaProntos")
      confirm ('¿Deseas salir del sitio?') ? prontosAudio.play() :  enlace.preventDefault();
      });
      
      
      
      fetch('Preguntas.json')
      .then(response => response.json())
      .then(data => {
        document.getElementById('pregunta').innerHTML = data.preguntas[0].Marge[1].pregunta; 
        document.getElementById('respuesta1').innerHTML = data.preguntas[0].Marge[1].Opciones[0];
        document.getElementById('respuesta2').innerHTML = data.preguntas[0].Marge[1].Opciones[1];
        document.getElementById('respuesta3').innerHTML = data.preguntas[0].Marge[1].Opciones[2];
      })
     
    
  