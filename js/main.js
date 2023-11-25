//-----------------  GRANJA   -------------------------

alert ("Bienvenidos a la GRANJA-Simulador")
const pato = "PATO";
const vaca = "VACA";
const conejo = "CONEJO";

let animales = (prompt ("Ingrese un animal para alimentar").toUpperCase()) ;

let comida = 30;

while ((animales === pato|| animales===vaca || animales===conejo || animales!= pato) && comida>0 ) {

    function comidas (){
        return Math.floor(Math.random()*30);
    }
    let patoCome = comidas();
    let vacaCome = comidas();
    let conejoCome = comidas();

    function p (a){
        return animales===a
    }

    if (p(pato)) { 
        console.log("has seleccionado " + animales + " para alimentar")
        comida -= patoCome;
        console.log("pato ha comido " + patoCome + " nos queda " + comida + "  porciones de comida para darle.")
        if(comida<patoCome){
            console.log("la porcion es " +  patoCome + " solamente nos queda " + comida + " No es sufciente")
            break
        }
        }
    if (p(vaca)) { 
        console.log("has seleccionado " + animales + " para alimentar")
        comida -= vacaCome;
        console.log("VACA ha comido " + vacaCome + " nos queda " + comida + "  porciones de comida para darle.")
        if(comida<vacaCome){
            console.log("la porcion es " +  vacaCome + " solamente nos queda " + comida + " No es sufciente")
            break
        }
        }
    if (p(conejo)) { 
        console.log("has seleccionado " + animales + " para alimentar")
        comida -= conejoCome;
        console.log("CONEJO ha comido " + conejoCome + " nos queda " + comida + "  porciones de comida para darle.")
        if(comida<conejoCome){
            console.log("la porcion es " +  conejoCome + " solamente nos queda " + comida + " No es sufciente")
            break
        }
        }
    else{
        alert("No se encuentra ese animal ! Unicamente esta PATO, VACA Y CONEJO");
        break;
        }
    }



