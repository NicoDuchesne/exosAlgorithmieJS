"use strict";

/**                 Tableau
 * 
 * Declare un tableau vide names 
 * Ajouter "Vincent", "Paul", et "Arthur" dans le tableau via la methode push
 * 
 * Pour chaque element du tableau
 * 
 * Ajouter a la fin "va a la peche"
 * Afficher chaque element 
 * 
 */

let names=[];
names.push("Vincent","Paul","Arthur");

names.forEach(name => {
    name += " va à la pêche ";
    console.log(name);
})


