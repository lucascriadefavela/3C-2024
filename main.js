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
const tempoobjtivo1 = new Date("2023-10-05T00:00:00");


contadores[0].textContent = calculaTempo(tempoobjtivo1);

function calculaTempo(tempoobjtivo){
    let tempoAtual = new Date();
    let tempoFinal = tempoobjtivo - tempoAtual;
    let segundos = Math.floor(tempoFinal/1000);
    let minutos = Math.floor(segundos/60);
    let horas = Math.floor(minutos/60);
    let dias = Math.floor(horas/24);

    segundos %= 60;
    minuos %= 60;
    horas %= 24;

    return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos ";  
  }

