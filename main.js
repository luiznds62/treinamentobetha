function mostraModal(idModal) {
  var display = document.querySelector(`#${idModal}`).style.display;
  if (display === "none") {
    var display = (document.querySelector(`#${idModal}`).style.display =
      "block");
  }
}

function escondeModal(idModal) {
  document.querySelector(`#${idModal}`).style.display = "none";
}

function abreDivCronograma(){
  document.querySelector("#cronograma").style.display = 'block'
  document.querySelector("#pesquisa").style.display = 'none'
}

function abreDivPesquisa(){
  document.querySelector("#cronograma").style.display = 'none'
  document.querySelector("#pesquisa").style.display = 'block'
}