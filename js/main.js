import { lista_plancha_ternera as lista_pt } from '../constants/constants.js';
import {lista_plancha_cerdo as lista_pc} from '../constants/constants.js';
import {lista_plancha_ambos as lista_pa} from '../constants/constants.js';
import {lista_parrilla_cerdo as lista_pac} from '../constants/constants.js';
import {lista_parrilla_ternera as lista_pat} from '../constants/constants.js';
import {lista_parrilla_ambos as lista_paa} from '../constants/constants.js';
import {lista_picar as lista_pi} from '../constants/constants.js';

//variables
let numero_ninos=0;
let numero_adultos=0;
let selected_barbacoa="";
let button_tipo_carne="";
let selected_tiempo="";
let radio_picar="";

let total_carne=0;
let total_pan=0;
let total_vino=0;
let total_cerveza=0;
let total_agua=0;

let formato_peso=" grs.";
let formato_peso_pan=" grs.";

let lista_plancha_ternera="";
let lista_plancha_cerdo="";
let lista_plancha_ambos="";
let lista_parrilla_cerdo="";
let lista_parrilla_ternera="";
let lista_parrilla_ambos="";
let lista_picar="";

//funciones
const setValueChildren=()=>{
     numero_ninos = document.querySelector('#no_ninos').value; 
}
const setValueAdults=()=>{
  numero_adultos= document.querySelector('#no_adultos').value;
}
const setValueBbqType=(event)=>{
  event.preventDefault();
  selected_barbacoa=event.composedPath()[1].value;
  if(event.composedPath()[1].value=="Plancha"){
  changeStyleButtonsBbqType("plancha"); 
  }
  else{
    changeStyleButtonsBbqType("parrilla");
  }
}

const setValueMeatType=(event)=>{
  event.preventDefault();
  button_tipo_carne=event.composedPath()[1].value;
  if(event.composedPath()[1].value=="Cerdo Ibérico"){
    changeStyleButtonsMeatType("cerdo_iberico"); 
  }
  else if(event.composedPath()[1].value=="Ternera"){
    changeStyleButtonsMeatType("ternera");
  }
  else if(event.composedPath()[1].value=="Ambos"){
    changeStyleButtonsMeatType("ambos"); 
  }
}
const setValueBbqTimeType=(event)=>{
  event.preventDefault();  
  selected_tiempo=event.composedPath()[1].value;
  if(event.composedPath()[1].value=="Almuerzo"){
    changeStyleButtonsBbqTimeType("almuerzo"); 
  }
  else if(event.composedPath()[1].value=="Cena"){
    changeStyleButtonsBbqTimeType("cena");
  }
  else if(event.composedPath()[1].value=="Todo el día"){
    changeStyleButtonsBbqTimeType("todo"); 
  }
}

const changeStyleButtonsBbqType=(bbq_type)=>{
  if(bbq_type=="plancha"){
      document.querySelector('#'+bbq_type).classList.add('buttons_tipo_barbacoa_carne_click');
      document.querySelector('#parrilla').classList.remove('buttons_tipo_barbacoa_carne_click');
  }
  else{
    document.querySelector('#'+bbq_type).classList.add('buttons_tipo_barbacoa_carne_click');
    document.querySelector('#plancha').classList.remove('buttons_tipo_barbacoa_carne_click');
  }
}
const changeStyleButtonsMeatType=(meat_type)=>{
  if(meat_type=="cerdo_iberico"){
      document.querySelector('#'+meat_type).classList.add('buttons_tipo_barbacoa_carne_click');
      document.querySelector('#ternera').classList.remove('buttons_tipo_barbacoa_carne_click');
      document.querySelector('#ambos').classList.remove('buttons_tipo_barbacoa_carne_click');
  }
  else if(meat_type=="ternera"){
    document.querySelector('#'+meat_type).classList.add('buttons_tipo_barbacoa_carne_click');
    document.querySelector('#cerdo_iberico').classList.remove('buttons_tipo_barbacoa_carne_click');
    document.querySelector('#ambos').classList.remove('buttons_tipo_barbacoa_carne_click');
  }
  else{
    document.querySelector('#'+meat_type).classList.add('buttons_tipo_barbacoa_carne_click');
    document.querySelector('#cerdo_iberico').classList.remove('buttons_tipo_barbacoa_carne_click');
    document.querySelector('#ternera').classList.remove('buttons_tipo_barbacoa_carne_click');

  }

}
const changeStyleButtonsBbqTimeType=(bbq_time_type)=>{
  if(bbq_time_type=="almuerzo"){
      document.querySelector('#'+bbq_time_type).classList.add('buttons_tipo_barbacoa_carne_click');
      document.querySelector('#cena').classList.remove('buttons_tipo_barbacoa_carne_click');
      document.querySelector('#todo').classList.remove('buttons_tipo_barbacoa_carne_click');
  }
  else if(bbq_time_type=="cena"){
    document.querySelector('#'+bbq_time_type).classList.add('buttons_tipo_barbacoa_carne_click');
    document.querySelector('#almuerzo').classList.remove('buttons_tipo_barbacoa_carne_click');
    document.querySelector('#todo').classList.remove('buttons_tipo_barbacoa_carne_click');
  }
  else{
    document.querySelector('#'+bbq_time_type).classList.add('buttons_tipo_barbacoa_carne_click');
    document.querySelector('#almuerzo').classList.remove('buttons_tipo_barbacoa_carne_click');
    document.querySelector('#cena').classList.remove('buttons_tipo_barbacoa_carne_click');

  }

}
const calcular=(event)=>{ 

  event.preventDefault();

  lista_plancha_ternera="";
  lista_plancha_cerdo="";
  lista_plancha_ambos="";
  lista_parrilla_cerdo="";
  lista_parrilla_ternera="";
  lista_parrilla_ambos="";
  lista_picar="";

  const radios = document.querySelectorAll(('[name="picar"]'));
  for (var i = 0; i <  radios.length; i++) {
    if (radios[i].checked) {
      radio_picar=radios[i].value;
      break;
    }
  }
  
  if(radio_picar=="Si"){
    lista_picar=lista_pi;
  } 
  CalculateTotalMeatBreadBeverages();
  OrganizeListsBbqType();
  ShowGrKgMeasurement();

  //Mostrar los resultados
  document.querySelector('.show_results').style.display="block";
  document.querySelector('.show_results').innerHTML=(
  "<h2>Total de carne recomendada:</h2>"+total_carne+formato_peso+"<br/><h2>Lista de Compra:</h2>"+lista_plancha_ternera+lista_plancha_cerdo+lista_parrilla_cerdo+lista_parrilla_ternera+lista_plancha_ambos+lista_parrilla_ambos+"<h2>También tendrías que comprar:</h2>Carbón: "+total_carne+formato_peso+"<br/>Pan: "+total_pan+formato_peso_pan+"<br/><strong>Bebidas:</strong><br/>Vino: "+total_vino+" ud.<br/>Cerveza: "+total_cerveza+" ud.<br/>Agua: "+total_agua+" l.<br/>"+lista_picar
  );

         
}

const CalculateTotalMeatBreadBeverages=()=>{

    //Calcular total de carne, pan, carbon y bebidas      
      if(selected_tiempo=="Todo el día"){
      total_carne=((numero_ninos*250)+(numero_adultos*350))*1.5;
      }
      else{ 
      total_carne=(numero_ninos*250)+(numero_adultos*350);
      }
     
      total_pan=(numero_adultos*250)+(numero_ninos*150);      

      if(numero_adultos<=10){
      total_vino=1;
      }
      else if(numero_adultos>10){

      var a = Number(numero_adultos);
      var b =10;
      var cociente = Math.floor(a/b);

      var resto = a%b;
      if(resto==0){
      total_vino=cociente;
      }
      else{
      total_vino=cociente+1;
      }
      }

      total_cerveza=numero_adultos*2;

      total_agua=Number(numero_adultos)+Number(numero_ninos);
}
const OrganizeListsBbqType=()=>{
  //Conformar Listas de carnes segun el tipo de barbacoa

    if(selected_barbacoa=="Plancha"&&button_tipo_carne=="Ternera"){
      lista_plancha_ternera=lista_pt;
    }

    if(selected_barbacoa=="Plancha"&&button_tipo_carne=="Cerdo Ibérico"){
      lista_plancha_cerdo=lista_pc;
    }

    if(selected_barbacoa=="Parrilla"&&button_tipo_carne=="Cerdo Ibérico"){
      lista_parrilla_cerdo=lista_pac;
    }

    if(selected_barbacoa=="Parrilla"&&button_tipo_carne=="Ternera"){
      lista_parrilla_ternera=lista_pat;
    }

    if(selected_barbacoa=="Plancha"&&button_tipo_carne=="Ambos"){
      lista_plancha_ambos=lista_pa;
    }

    if(selected_barbacoa=="Parrilla"&&button_tipo_carne=="Ambos"){
      lista_parrilla_ambos=lista_paa;
    }
}
const ShowGrKgMeasurement=()=>{
    
  //Para mostrar la carne en grs o en kg

  if(total_carne>=1000){total_carne=total_carne/1000;formato_peso=" kg."}
  //Para mostrar el pan en grs o en kg

  if(total_pan>=1000){total_pan=total_pan/1000;formato_peso_pan=" kg."}
}

//eventos
document.querySelector('#no_ninos').addEventListener('change',setValueChildren);

document.querySelector('#no_adultos').addEventListener('change',setValueAdults);

document.querySelector('#plancha').addEventListener("click",setValueBbqType);

document.querySelector('#parrilla').addEventListener("click",setValueBbqType);

document.querySelector('#cerdo_iberico').addEventListener("click",setValueMeatType);

document.querySelector('#ternera').addEventListener("click", setValueMeatType);

document.querySelector('#ambos').addEventListener("click", setValueMeatType);

document.querySelector('#almuerzo').addEventListener("click", setValueBbqTimeType);

document.querySelector('#cena').addEventListener("click", setValueBbqTimeType);

document.querySelector('#todo').addEventListener("click", setValueBbqTimeType);

document.querySelector('#enviar').addEventListener("click", calcular, false);

