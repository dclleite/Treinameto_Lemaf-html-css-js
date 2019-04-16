var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    
    var paciente = pacientes[i];
    
    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    var tdImc = paciente.querySelector(".info-imc");

    var alturaEhValido = true;
    var pesoEhValido = true;
    
    
    
    if (peso <= 0 || peso > 600 ) {
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido!";
    }
    if (altura <= 0 || altura > 4) {
        alturaEhValido = false;
        tdImc.textContent = "Altura Inválida!";
    }
    if(alturaEhValido && pesoEhValido){
        tdImc.textContent = (peso / (altura * altura)).toFixed(2);
    }else{
        paciente.classList.add("paciente-invalido")
    }

}
