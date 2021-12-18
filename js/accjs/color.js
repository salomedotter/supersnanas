//Identify the element and print it to the console
//il faut qu'il en prenne 1, var du svg pour 1 coeur, l'autre c le svg global
// var theSVG = document.querySelector("#Layer_1");
// console.log(theSVG);
//Identify the hearts->3 hearts
// var allHearts = document.querySelectorAll("#alls");
// console.log(allHearts);

//OBJ:Toucher un <3 à la fois puis toucher tous 1 par 1. -->Si on les écrits tous dans html il vont tous s'afficher direct ? 

//get l'élément dans la console pour pouvoir le cacher, une fois sélectionner on peut set un attribu, par exemple que visibility soit hidden. check the SYNTAX
var thelayer1 = document.querySelector("#Layer_1");
console.log("clelayer1");
// thelayer1.style.visibility="hidden";
let etat = true;
//Identify the circles
var thehearts = {
    outer: document.querySelector("#Layer_1"),
    outer_1: document.querySelector("#Layer_2"),
    outer_2: document.querySelector("#Layer_3"),
    outer_3: document.querySelector("#Layer_4"),
    outer_4: document.querySelector("#Layer_5"),
    outer_5: document.querySelector("#Layer_6"),
    outer_6: document.querySelector("#Layer_7"),
    outer_7: document.querySelector("#Layer_8"),
    outer_8: document.querySelector("#Layer_9"),
    outer_9: document.querySelector("#Layer_10"),
    outer_10: document.querySelector("#Layer_11"),
    medium: document.querySelector("#Layer_12"),
    medium_1: document.querySelector("#Layer_13"),
    medium_2: document.querySelector("#Layer_14"),
    medium_3: document.querySelector("#Layer_15"),
    medium_4: document.querySelector("#Layer_16"),
    medium_5: document.querySelector("#Layer_17"),
    medium_6: document.querySelector("#Layer_18"),
    medium_7: document.querySelector("#Layer_19"),
    medium_8: document.querySelector("#Layer_20"),
    medium_9: document.querySelector("#Layer_21"),
    medium_10: document.querySelector("#Layer_22"),
    medium_11: document.querySelector("#Layer_23"),
    medium_12: document.querySelector("#Layer_24"),
    inner: document.querySelector("#Layer_25"),
    inner_1: document.querySelector("#Layer_26"),
    inner_2: document.querySelector("#Layer_27"),
    inner_3: document.querySelector("#Layer_28"),
    inner_4: document.querySelector("#Layer_29"),
    inner_5: document.querySelector("#Layer_30"),
    inner_6: document.querySelector("#Layer_31"),
    inner_7: document.querySelector("#Layer_32"),
    inner_8: document.querySelector("#Layer_33"),
    inner_9: document.querySelector("#Layer_34"),
    lecentre: document.querySelector("#Layer_35")
}
//EX VAR SCORE
window.onload = function() {
    
}

$(document).ready(function() {
    console.log("ready!");
    

});

//Add event listeners to the circles
thehearts.outer.addEventListener("click", function () {
    updateScore("Bulle");
});



thehearts.outer_1.addEventListener("click", function () {
    updateScore("Belle");
});

thehearts.outer_2.addEventListener("click", function () {
    updateScore("Rebelle");
});



