# day5

Hello!

This project I coded as fifty challenge of #7daysofcode promoted by Alura.

Check the demo here: https://elegant-cocada-43446d.netlify.app/

In case you want to copy and paste into your console to see the logic of this code using just warnings and alerts, here is the javascript code:

let legumes = []; let leguminosas =[]; let frutas = []; let doces = []; let laticínios = []; 
let firstAsk = prompt ("Você deseja adicionar algo na lista do supermercado? Digite sim, se quiser!");  
while (firstAsk == "sim") { 
let secondAsk = prompt ("Qual comida você deseja adicionar?"); 
let thirdAsk = prompt ("Qual a categoria? (1)Legumes (2)Leguminosas (3)Frutas (4)Doces (5)Laticínios"); 
if (thirdAsk == 1){
legumes.push(secondAsk)}; 
if (thirdAsk == 2){
leguminosas.push(secondAsk)}; 
if (thirdAsk == 3){frutas.push(secondAsk)}; 
if (thirdAsk == 4){doces.push(secondAsk)}; 
if (thirdAsk == 5){laticínios.push(secondAsk)}; 
firstAsk = prompt ("Você deseja adicionar algo na lista do supermercado? Digite sim, se quiser!");} 
console.table (legumes); 
console.table(leguminosas);
console.table(frutas);
console.table(doces);
console.table(laticínios);

Languages: CSS3, HTML5, Javascript.
