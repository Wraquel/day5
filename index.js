let legumes = [];
let secos = [];
let frutas = [];
let bebidas = [];
let frozen = [];
let limpezaHigiene = [];

function getTitulo() {
  document.getElementById("mostrarTitulo").innerHTML =
    document.getElementById("nomedaLista").value;
  document.getElementById("nomedaLista").value = "";
}
function addLegumes() {
  document.getElementById("itemLegumes").innerHTML = "";
  legumes.push(document.getElementById("legumesInput").value);
  for (let i = 0; legumes.length > i; i++) {
    document.getElementById("itemLegumes").innerHTML +=
      "<li>" + legumes[i] + "</li>";
  }
  document.getElementById("legumesInput").value = "";
}
function addSecos() {
  document.getElementById("itemSecos").innerHTML = "";
  secos.push(document.getElementById("secosInput").value);
  for (let i = 0; secos.length > i; i++) {
    document.getElementById("itemSecos").innerHTML +=
      "<li>" + secos[i] + "</li>";
  }
  document.getElementById("secosInput").value = "";
}
function addFrutas() {
  document.getElementById("itemFrutas").innerHTML = "";
  frutas.push(document.getElementById("frutasInput").value);
  for (let i = 0; frutas.length > i; i++) {
    document.getElementById("itemFrutas").innerHTML +=
      "<li>" + frutas[i] + "</li>";
  }
  document.getElementById("frutasInput").value = "";
}
function addLaticinios() {
  document.getElementById("itemFrozen").innerHTML = "";
  frozen.push(document.getElementById("frozenInput").value);
  for (let i = 0; frozen.length > i; i++) {
    document.getElementById("itemFrozen").innerHTML +=
      "<li>" + frozen[i] + "</li>";
  }
  document.getElementById("frozenInput").value = "";
}
function addBebidas() {
  document.getElementById("itemBebidas").innerHTML = "";
  bebidas.push(document.getElementById("bebidasInput").value);
  for (let i = 0; bebidas.length > i; i++) {
    document.getElementById("itemBebidas").innerHTML +=
      "<li>" + bebidas[i] + "</li>";
  }
  document.getElementById("bebidasInput").value = "";
}
function addHigLimpeza() {
  document.getElementById("itemLimpezaHigiene").innerHTML = "";
  limpezaHigiene.push(document.getElementById("higieneInput").value);
  for (let i = 0; limpezaHigiene.length > i; i++) {
    document.getElementById("itemLimpezaHigiene").innerHTML +=
      "<li>" + limpezaHigiene[i] + "</li>";
  }
  document.getElementById("higieneInput").value = "";
}
