
const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
 
for(let i=0;i <botoes.length;i++){
    botoes[i].onclick = function(){

      for(let j=0;j<botoes.length;j++){
          botoes[j].classList.remove("ativo");
          textos[j].classList.remove("ativo");
         
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");

      }
}

const contadores = document.querySelectorAll(".contador");
const tempoobjtivo1 = new Date("2024-10-05T00:00:00");
const tempoobjtivo2 = new Date("2024-12-05T00:00:00");
const tempoobjtivo3 = new Date("2024-12-30T00:00:00");
const tempoobjtivo4 = new Date("2025-02-01T00:00:00");

const tempos = [tempoobjtivo1,tempoobjtivo2,tempoobjtivo3,tempoobjtivo4];


contadores[0].textContent = calculaTempo(tempos[0]);

function calculaTempo(tempoobjtivo){
  let tempoAtual = new Date();
  let tempoFinal = tempoobjtivo - tempoAtual;
  let segundos = Math.floor(tempoFinal/1000);
  let minutos = Math.floor(segundos/60);
  let horas = Math.floor(minutos/60);
  let dias = Math.floor(horas/24);
  
  segundos %= 60;
  minutos %= 60;
  horas %= 24;

  
if (tempoFinal > 0){
  return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos ";  
}else{
    return "prazo finalizado";
}

}

function atualizaCronometro(){
  for ( let i=0; i<contadores.length;i++){
    contadores[i].textContent = (calculaTempo[i]);
  }
}

function atualizaCronometro(){
  atualizaCronometro();
  setInterval(atualizaCronometro,1000);
}
começaCronometro();
