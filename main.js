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
