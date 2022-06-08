//Para la página de Calculadora de barbacoa
//INICIO SCRIPT

let numero_ninos=0;
let numero_adultos=0;
let selected_barbacoa="";
let button_tipo_carne="";
let selected_tiempo="";
let radio_picar="";

document.getElementById('no_ninos').addEventListener('change',
  function(){
   numero_ninos = document.getElementById('no_ninos').value;
  });

document.getElementById('no_adultos').addEventListener('change',
  function(){
   numero_adultos= document.getElementById('no_adultos').value;
  });
document.getElementById('plancha').addEventListener("click", 
function(event){   
event.preventDefault();
selected_barbacoa=document.getElementById('plancha').value;
document.getElementById('plancha').style.backgroundColor = "#484d2f";
document.getElementById('plancha').style.borderColor = "#D1D0CF";
document.getElementById('parrilla').style.backgroundColor = "#9baa66";
document.getElementById('parrilla').style.borderColor = "#D1D0CF";

});
document.getElementById('parrilla').addEventListener("click", 
function(event){   
event.preventDefault();
selected_barbacoa=document.getElementById('parrilla').value;
document.getElementById('parrilla').style.backgroundColor = "#484d2f";
document.getElementById('parrilla').style.borderColor = "#D1D0CF";
document.getElementById('plancha').style.backgroundColor = "#9baa66";
document.getElementById('plancha').style.borderColor = "#D1D0CF";

});

document.getElementById('cerdo_iberico').addEventListener("click", 
function(event){   
event.preventDefault();
button_tipo_carne=document.getElementById('cerdo_iberico').value;
document.getElementById('cerdo_iberico').style.backgroundColor = "#484d2f";
document.getElementById('cerdo_iberico').style.borderColor = "#D1D0CF";
document.getElementById('ternera').style.backgroundColor = "#9baa66";
document.getElementById('ternera').style.borderColor = "#D1D0CF";
document.getElementById('ambos').style.backgroundColor = "#9baa66";
document.getElementById('ambos').style.borderColor = "#D1D0CF";
});

document.getElementById('ternera').addEventListener("click", 
function(event){   
event.preventDefault();
button_tipo_carne=document.getElementById('ternera').value;
document.getElementById('ternera').style.backgroundColor = "#484d2f";
document.getElementById('ternera').style.borderColor = "#D1D0CF";
document.getElementById('cerdo_iberico').style.backgroundColor = "#9baa66";
document.getElementById('cerdo_iberico').style.borderColor = "#D1D0CF";
document.getElementById('ambos').style.backgroundColor = "#9baa66";
document.getElementById('ambos').style.borderColor = "#D1D0CF";
});

document.getElementById('ambos').addEventListener("click", 
function(event){   
event.preventDefault();
button_tipo_carne=document.getElementById('ambos').value;
document.getElementById('ambos').style.backgroundColor = "#484d2f";
document.getElementById('ambos').style.borderColor = "#D1D0CF";
document.getElementById('ternera').style.backgroundColor = "#9baa66";
document.getElementById('ternera').style.borderColor = "#D1D0CF";
document.getElementById('cerdo_iberico').style.backgroundColor = "#9baa66";
document.getElementById('cerdo_iberico').style.borderColor = "#D1D0CF";
});

document.getElementById('almuerzo').addEventListener("click", 
function(event){   
event.preventDefault();
selected_tiempo=document.getElementById('almuerzo').value;
document.getElementById('almuerzo').style.backgroundColor = "#484d2f";
document.getElementById('almuerzo').style.borderColor = "#D1D0CF";
document.getElementById('cena').style.backgroundColor = "#9baa66";
document.getElementById('cena').style.borderColor = "#D1D0CF";
document.getElementById('todo').style.backgroundColor = "#9baa66";
document.getElementById('todo').style.borderColor = "#D1D0CF";
});
document.getElementById('cena').addEventListener("click", 
function(event){   
event.preventDefault();
selected_tiempo=document.getElementById('cena').value;
document.getElementById('cena').style.backgroundColor = "#484d2f";
document.getElementById('cena').style.borderColor = "#D1D0CF";
document.getElementById('almuerzo').style.backgroundColor = "#9baa66";
document.getElementById('almuerzo').style.borderColor = "#D1D0CF";
document.getElementById('todo').style.backgroundColor = "#9baa66";
document.getElementById('todo').style.borderColor = "#D1D0CF";
});
document.getElementById('todo').addEventListener("click", 
function(event){   
event.preventDefault();
selected_tiempo=document.getElementById('todo').value;
document.getElementById('todo').style.backgroundColor = "#484d2f";
document.getElementById('todo').style.borderColor = "#D1D0CF";
document.getElementById('almuerzo').style.backgroundColor = "#9baa66";
document.getElementById('almuerzo').style.borderColor = "#D1D0CF";
document.getElementById('cena').style.backgroundColor = "#9baa66";
document.getElementById('cena').style.borderColor = "#D1D0CF";
});

function guardar(){   

const radios = document.getElementsByName('picar');
for (var i = 0; i <  radios.length; i++) {
  if (radios[i].checked) {
    radio_picar=radios[i].value;
    break;
  }
} 


//Calcular total de carne, pan, carbon y bebidas
let total_carne=0;
if(selected_tiempo=="Todo el día"){
total_carne=((numero_ninos*250)+(numero_adultos*350))*1.5;
}
else{ 
total_carne=(numero_ninos*250)+(numero_adultos*350);
}

let total_pan=0;
total_pan=(numero_adultos*250)+(numero_ninos*150);

let total_vino=0;

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

let total_cerveza=numero_adultos*2;

let total_agua=Number(numero_adultos)+Number(numero_ninos);


//Conformar Listas de carnes segun el tipo de barbacoa
let lista_plancha_ternera="";
if(selected_barbacoa=="Plancha"&&button_tipo_carne=="Ternera"){
lista_plancha_ternera=`<h3>Carne de Ternera:</h3><p><a style="color:white;" target='_blank' href='https://carnicaselalcazar.es/es/elaborados-de-retinto/22-hamburguesa-de-retinto.html'>Hamburguesas de retinto</a></p><p><a style="color:white;" target='_blank' href='https://carnicaselalcazar.es/es/ternera-retinta/24-filete-ternera-retinta.html'>Filete de añojo retinto</a></p><p><a style="color:white;" target='_blank' href='https://carnicaselalcazar.es/es/ternera-retinta/25-churrasco-ternera-retinta.html'>Churrasco</a></p><p><a style="color:white;" target='_blank' href=''>Filete de aguja</a></p>`
}
let lista_plancha_cerdo="";
if(selected_barbacoa=="Plancha"&&button_tipo_carne=="Cerdo Ibérico"){
lista_plancha_cerdo=`<h3>Carne de Cerdo:</h3><p><a style="color:white;" target='_blank' href='https://carnicaselalcazar.es/es/cerdo-iberico/9-secreto-iberico.html'>Secreto</a></p><p><a style="color:white;" target='_blank' href='https://carnicaselalcazar.es/es/cerdo-iberico/10-207-presa-iberica.html#/70-peso-0650_kg'>Presa de bellota ibérico</a></p><p><a style="color:white;" target='_blank' href='https://carnicaselalcazar.es/es/cerdo-iberico/12-132-abanico-iberico.html#/78-presentacio'>Abanico ibérico</a></p><p><a style="color:white;" target='_blank' href='https://carnicaselalcazar.es/es/cerdo-iberico/13-pluma-iberica.html'>Pluma ibérica</a></p><p><a style="color:white;" target='_blank' href='https://carnicaselalcazar.es/es/cerdo-iberico/34-plumilla-iberica.html'>Plumilla ibérica</a></p>`
}
let lista_parrilla_cerdo="";
if(selected_barbacoa=="Parrilla"&&button_tipo_carne=="Cerdo Ibérico"){
lista_parrilla_cerdo=`<h3>Carne de Cerdo:</h3><p><a style="color:white;" target='_blank' href='https://carnicaselalcazar.es/es/cerdo-iberico/9-secreto-iberico.html'>Secreto de cerdo ibérico</a></p><p><a style="color:white;" target='_blank'  href='https://carnicaselalcazar.es/es/cerdo-iberico/10-207-presa-iberica.html#/70-peso-0650_kg'>Presa de bellota ibérico</a></p><p><a style="color:white;" target='_blank' href='https://carnicaselalcazar.es/es/cerdo-iberico/12-132-abanico-iberico.html#/78-presentacio'>Abanico ibérico</a></p><p><a style="color:white;" target='_blank' href='https://carnicaselalcazar.es/es/cerdo-iberico/13-pluma-iberica.html'>Pluma ibérica</a></p><p><a style="color:white;" target='_blank' href='https://carnicaselalcazar.es/es/cerdo-iberico/34-plumilla-iberica.html'>Plumilla ibérica</a></p><p><a style="color:white;" target='_blank' href='https://carnicaselalcazar.es/es/otros-elaborados/39-longaniza-blanca-fresca.html'>Longaniza blanca</a></p><p><a style="color:white;" target='_blank' href=''>Panceta</a></p><p><a style="color:white;" target='_blank' href=''>Churrasco</a></p><p><a style="color:white;" target='_blank' href=''>Costillas</a></p>`
}
let lista_parrilla_ternera="";
if(selected_barbacoa=="Parrilla"&&button_tipo_carne=="Ternera"){
lista_parrilla_ternera=`<h3>Carne de Ternera:</h3><p><a style="color:white;" target='_blank' href='https://carnicaselalcazar.es/es/ternera-retinta/1-84-chuleton-de-ternera-retinta.html#/63-peso-0675_kg'>Chuletón de añojo retinto</a></p><p><a style="color:white;" target='_blank' href='https://carnicaselalcazar.es/es/ternera-retinta/7-44-entrecot-de-vaca-retinta.html#/67-peso-055_kg'>Entrecot de vaca retinta</a></p><p><a  style="color:white;" target='_blank' href=''>Filete de aguja</a></p><p><a style="color:white;" target='_blank' href='https://carnicaselalcazar.es/es/ternera-retinta/25-churrasco-ternera-retinta.html'>Churrasco de añojo retinto</a></p><p><a style="color:white;" target='_blank' href='https://carnicaselalcazar.es/es/elaborados-de-retinto/22-hamburguesa-de-retinto.html'>Hamburguesas de retinto</a></p><p><a  style="color:white;" target='_blank' href='https://carnicaselalcazar.es/es/elaborados-de-retinto/42-longaniza-de-retinto.html'>Longaniza retinto</a></p>`
}
let lista_plancha_ambos="";
if(selected_barbacoa=="Plancha"&&button_tipo_carne=="Ambos"){
lista_plancha_ambos=`<h3>De Ternera:</h3><p><a style="color:white;" target='_blank' href='https://carnicaselalcazar.es/es/elaborados-de-retinto/22-hamburguesa-de-retinto.html'>Hamburguesas de retinto</a></p><p><a style="color:white;" target='_blank' href='https://carnicaselalcazar.es/es/ternera-retinta/24-filete-ternera-retinta.html'>Filete de añojo retinto</a></p><p><a style="color:white;" target='_blank' href='https://carnicaselalcazar.es/es/ternera-retinta/25-churrasco-ternera-retinta.html'>Churrasco</a></p><p><a style="color:white;" target='_blank' href=''>Filete de aguja</a></p><h3>De Cerdo:</h3><p><a style="color:white;" target='_blank' href='https://carnicaselalcazar.es/es/cerdo-iberico/9-secreto-iberico.html'>Secreto</a></p><p><a style="color:white;" target='_blank' href='https://carnicaselalcazar.es/es/cerdo-iberico/10-207-presa-iberica.html#/70-peso-0650_kg'>Presa de bellota ibérico</a></p><p><a style="color:white;" target='_blank' href='https://carnicaselalcazar.es/es/cerdo-iberico/12-132-abanico-iberico.html#/78-presentacio'>Abanico ibérico</a></p><p><a  style="color:white;" target='_blank' href='https://carnicaselalcazar.es/es/cerdo-iberico/13-pluma-iberica.html'>Pluma ibérica</a></p><p><a style="color:white;" target='_blank' href='https://carnicaselalcazar.es/es/cerdo-iberico/34-plumilla-iberica.html'>Plumilla ibérica</a></p>`
}
let lista_parrilla_ambos="";
if(selected_barbacoa=="Parrilla"&&button_tipo_carne=="Ambos"){
lista_parrilla_ambos=`<h3>De Ternera:</h3><p><a style="color:white;" target='_blank' href='https://carnicaselalcazar.es/es/ternera-retinta/1-84-chuleton-de-ternera-retinta.html#/63-peso-0675_kg'>Chuletón de añojo retinto</a></p><p><a style="color:white;" target='_blank' href='https://carnicaselalcazar.es/es/ternera-retinta/7-44-entrecot-de-vaca-retinta.html#/67-peso-055_kg'>Entrecot de vaca retinta</a></p><p><a style="color:white;" target='_blank' href=''>Filete de aguja</a></p><p><a style="color:white;" target='_blank' href='https://carnicaselalcazar.es/es/ternera-retinta/25-churrasco-ternera-retinta.html'>Churrasco de añojo retinto</a></p><p><a style="color:white;" target='_blank' href='https://carnicaselalcazar.es/es/elaborados-de-retinto/22-hamburguesa-de-retinto.html'>Hamburguesas de retinto</a></p><p><a style="color:white;" target='_blank' href='https://carnicaselalcazar.es/es/elaborados-de-retinto/42-longaniza-de-retinto.html'>Longaniza retinto</a></p><h3>De Cerdo:<h3><a style="color:white;" target='_blank' href='https://carnicaselalcazar.es/es/cerdo-iberico/9-secreto-iberico.html'>Secreto de cerdo ibérico</a></p><p><a style="color:white;" target='_blank' href='https://carnicaselalcazar.es/es/cerdo-iberico/10-207-presa-iberica.html#/70-peso-0650_kg'>Presa de bellota ibérico</a></p><p><a style="color:white;" target='_blank' href='https://carnicaselalcazar.es/es/cerdo-iberico/12-132-abanico-iberico.html#/78-presentacio'>Abanico ibérico</a></p><p><a style="color:white;" target='_blank' href='https://carnicaselalcazar.es/es/cerdo-iberico/13-pluma-iberica.html'>Pluma ibérica</a></p><p><a style="color:white;" target='_blank' href='https://carnicaselalcazar.es/es/cerdo-iberico/34-plumilla-iberica.html'>Plumilla ibérica</a></p><p><a style="color:white;" target='_blank' href='https://carnicaselalcazar.es/es/otros-elaborados/39-longaniza-blanca-fresca.html'>Longaniza blanca</a></p><p><a style="color:white;" target='_blank' href=''>Panceta</a></p><p><a style="color:white;" target='_blank' href=''>Churrasco</a></p><p><a style="color:white;" target='_blank' href=''>Costillas</a></p>`
}

let lista_picar="";
if(radio_picar=="Si"){
lista_picar=`<h2>Para picar sugerimos:</h2><p><a style="color:white;" target='_blank' href='https://carnicaselalcazar.es/es/otros-elaborados/43-criollo.html'>Chorizo criollo</a></p><p><a style="color:white;" target='_blank' href='https://carnicaselalcazar.es/es/15-conservas'>Conservas</a></p><p><a style="color:white;" target='_blank' href='https://carnicaselalcazar.es/es/7-quesos'>Quesos</a></p><p><a style="color:white;" target='_blank' href='https://carnicaselalcazar.es/es/5-jamones-y-embutidos'>Loncheados</a></p><p><a style="color:white;" target='_blank' href=''>Chorizo rojo barbacoa</a></p><p><a style="color:white;" target='_blank' href=''>Chicharrones</a></p>`
}

//Para mostrar la carne en grs o en kg
let formato_peso=" grs.";
if(total_carne>=1000){total_carne=total_carne/1000;formato_peso=" kg."}
//Para mostrar el pan en grs o en kg
let formato_peso_pan=" grs.";
if(total_pan>=1000){total_pan=total_pan/1000;formato_peso_pan=" kg."}

//Para mostrar los resultados(estilos)

document.getElementById('mostrar_resultados').style.color= "white";
document.getElementById('mostrar_resultados').style.backgroundColor = "#9baa66";
document.getElementById('mostrar_resultados').style.borderStyle = "solid";
document.getElementById('mostrar_resultados').style.borderWidth = "1px";
document.getElementById('mostrar_resultados').style.borderColor = "#D1D0CF";
document.getElementById('mostrar_resultados').style.width = "500px";
document.getElementById('mostrar_resultados').style.padding = "20px";


//Mostrar los resultados
document.getElementById('mostrar_resultados').innerHTML=(
"<h2>Total de carne recomendada:</h2>"+total_carne+formato_peso+"<br/><h2>Lista de Compra:</h2>"+lista_plancha_ternera+lista_plancha_cerdo+lista_parrilla_cerdo+lista_parrilla_ternera+lista_plancha_ambos+lista_parrilla_ambos+"<h2>También tendrías que comprar:</h2>Carbón: "+total_carne+formato_peso+"<br/>Pan: "+total_pan+formato_peso_pan+"<br/><strong>Bebidas:</strong><br/>Vino: "+total_vino+" ud.<br/>Cerveza: "+total_cerveza+" ud.<br/>Agua: "+total_agua+" l.<br/>"+lista_picar
);

         
}
document.getElementById('enviar').addEventListener("click", guardar, false);

//FIN SCRIPT