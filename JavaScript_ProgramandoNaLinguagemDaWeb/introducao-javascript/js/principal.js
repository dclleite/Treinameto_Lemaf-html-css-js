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

// Pegando evento de click do botão adicionar

var btnAdicionar = document.querySelector("#adicionar-paciente");

btnAdicionar.addEventListener("click", function(event){
   event.preventDefault();
    //pegando meu form do HTML
    var form = document.querySelector("#form-adiciona");
    
    //pegando os valores digitados nas inputs
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;
    
    //criando uma tr para mais um paciente
    var pacienteTr = document.createElement("tr");
    
    //criando as tds de mais um paciente
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    
    //adicionando os valores digitados nas tds
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    
    //adicionando as tds como filhos da tr, seguindo o formato padrão do html
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    
    //pegando tbody do html
    var tabela = document.querySelector("#tabela-pacientes");
    
    //colocando a tr como filho dentro da tbody
    tabela.appendChild(pacienteTr);
    

    
    
});
