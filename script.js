const digitando = document.querySelector(".digitando");
const digitado = document.querySelector(".digitado");
const botaoReset = document.querySelector(".delete");
let clicouOp = true;

teclado();

function numero(num) {
  if (digitando.innerText == "0" || clicouOp) {
    digitando.innerText = num;
    clicouOp = false;
    botaoReset.innerText = "CE";
  } else {
    digitando.innerText += num;
  }
}

function operacao(op) {
  if (!clicouOp) {
    clicouOp = true;
    digitado.innerText += " " + digitando.innerText + " " + op;
  }
}

function teclado() {
  window.addEventListener("keyup", (e) => {
    console.log(e.key);
    if (!isNaN(+e.key)) {
      numero(+e.key);
    } else if (e.key == "Backspace") {
      apaga();
    }
  });
}

function apaga() {
  const ultimoDig = digitando.innerText.length - 1;
  if (digitando.innerText.length == 1) {
    digitando.innerText = "0";
  } else {
    digitando.innerText = digitando.innerText.slice(0, ultimoDig);
  }
}

function reset() {
  if (botaoReset.innerText == "CE") {
    digitando.innerText = "0";
    botaoReset.innerText = "C";
  } else {
    digitando.innerText = "0";
    digitado.innerText = "";
  }
}
