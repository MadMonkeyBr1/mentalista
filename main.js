var numeroAleatorio = parseInt(Math.random() * 11);

function Chutar() {
  var elementResult = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);

  if (chute == numeroAleatorio) {
    elementResult.innerHTML = "Você acertou!";
  } else if (chute > 10 || chute < 0) {
    elementResult.innerHTML = "Precisa ser um número entre 0 e 10";
  } else {
    elementResult.innerHTML = "Errou";
  }
}
