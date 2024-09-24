const digitando = document.querySelector(".digitando");
const digitado = document.querySelector(".digitado");
const botaoReset = document.querySelector(".delete");
let clicouOp = false;

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
    tiraPonto();
    clicouOp = true;
    digitado.innerText += " " + digitando.innerText + " " + op;
  }
}

function teclado() {
  window.addEventListener("keyup", (e) => {
    if (!isNaN(+e.key)) {
      numero(+e.key);
    } else if (e.key == "Backspace") {
      apaga();
    } else if (e.key == "Enter") {
      console.log(digitando.innerText);
      calcula();
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

function calcula() {
  let expressao = digitado.innerText;
  if (!digitado.innerText.includes("=")) {
    tiraPonto();
    digitado.innerText += " " + digitando.innerText;
    expressao = digitado.innerText;
    digitando.innerText = eval(expressao);
    digitado.innerText += " =";
  } else {
  }
}

function tiraPonto() {
  const ultimoDig = digitando.innerText.length - 1;
  if (digitando.innerText[ultimoDig] == ".") {
    digitando.innerText = digitando.innerText.slice(0, ultimoDig);
  }
}

function virgula() {
  if (!digitando.innerText.includes(".")) {
    digitando.innerText += ".";
  }
}

function trocaSinal() {
  const ultimoDig = digitando.innerText.length;
  if (!digitando.innerText.includes("-")) {
    digitando.innerText = "-" + digitando.innerText;
  } else {
    console.log(digitando.innerText[0]);
    digitando.innerText = digitando.innerText.slice(1, ultimoDig);
    //digitando.innerText
  }
}
