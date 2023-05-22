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
    const btnRedes = document.getElementById ("iconoPie");
    btnRedes.addEventListener ("click" , (alerta) =>{
      let confirmTexto = "¿Desea salir de la página?";
      if (confirm(confirmTexto) == true) {
       const apuAudio = document.getElementById("apu");
      apuAudio.play();
      }else{
        window.location.reload();
      } 

    });  
    

