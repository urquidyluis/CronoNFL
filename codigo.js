let cronoActivo = false;
//var etiquetaCrono = document.querySelector(".label_crono");
// var etiquetaHoraEstimado = document.querySelector(".label_estimado");
var etiquetaHoraActual = document.querySelector(".label_horaactual");
var valorHora = document.querySelector(".crono-hours");
var valorMinuto = document.querySelector(".crono-minutes");
var valorSegundo = document.querySelector(".crono-seconds");
//document.querySelector(".start-stop").addEventListener("onclick",clickCronometro());
var crono = "";
var _hours = 0;
var _minutes = 0;
var _seconds = 0;



let horaActual = new Date();

etiquetaHoraActual.innerHTML = horaActual.toLocaleTimeString().toString();

//etiquetaHoraEstimado.contentEditable =true;

function muestraReloj(){
	reloj = new Date();
	document.querySelector(".reloj").innerHTML = reloj.toLocaleTimeString();
    // var diferencia = (horaActual - dateInicio[i]);

    // var segundos = Math.floor((diferencia / (1000))%60);
    // var minutos = Math.floor((diferencia / (1000*60))%60);
    // var horas = Math.floor((diferencia /(1000*60*60)));

    // if (segundos < 10){segundos = '0'+segundos;}
    // if (minutos < 10){minutos = '0'+minutos;}
    // if (horas < 10){horas = '0'+horas;}

    // crono = horas+':'+minutos+':'+segundos;
    // document.getElementById("reloj").innerHTML = crono;
}

function clickCronometro(){
	if (cronoActivo == false){
		interval = setInterval(avanzaCronometro, 1000);
		cronoActivo = true;
	}else{
		clearInterval(interval);
		cronoActivo = false;
	}
}
function avanzaCronometro(){
	
	_seconds++;
    _minutes++;
    _minutes--;
    _hours++;
    _hours--;
    if (_seconds == 60){_seconds = 0; _minutes++;}
    if (_minutes == 60){_minutes = 0; _hours++;}
    if (_seconds < 10 ){_seconds = `0` + _seconds;}
    if (_minutes < 10 ){_minutes = `0` + _minutes;}
    if (_hours < 10 ){_hours = `0` + _hours;}
    valorHora.value = _hours;
    valorMinuto.value = _minutes;
    valorSegundo.value = _seconds;
    //crono =_hours+`:`+_minutes+`:`+_seconds;
    //etiquetaCrono = crono;
    
}
window.onload = function() {
    hora = setInterval(muestraReloj, 1000);
    
}
