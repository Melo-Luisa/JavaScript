var titulo = document.querySelector(".titulo");
titulo.textContent = ("Aparecida Nutricionista");
//selecionar todos da class
var pacientes = document.querySelectorAll(".paciente");

//calculos
for(var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];
    
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoValido = true;
    var alturaValida = true;

    //ou = ||
    if(peso < 0 || peso >= 850){
        console.log('Peso inválido');
        pesoValido = false;
        tdImc.textContent = "Peso Inválido";
        //puca com CSS]
        paciente.classList.add("paciente-invalido");

    }

    if(altura < 0 || altura >= 3.00){
        console.log('Altura inválida');
        alturaValida = false;
        tdImc.textContent.add("altura-invalida");
        paciente.classList.add("paciente-invalido");
    }

    if(alturaValida && pesoValido){
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}
function calculaIMC(peso,altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}





