var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick",function(event){
    var alvoEvento = event.target; // Pegar p elemento que foi clilcado, e não o elemento em que o evento está atrelhado 
    var paiDoAlvo = alvoEvento.parentNode; // TR = Paciente + remover-paciente
    //event.target.parentNode.remove(); "Isso é a mesma coisa que a linha de baixo;"
    paiDoAlvo.classList.add("fadeOut");
    
    //setTimeout segura por um tempo especificado o precessamento da função
    setTimeout(function(){
        paiDoAlvo.remove();
    },500);
    
    
});

/*pacientes.forEach(function(paciente){
   paciente.addEventListener("dblclick",function(){
       // palavra reservada this, pega em quem o evento esta atrelado
       this.remove();
   });
});*/