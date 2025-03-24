"use strict";



import * as dbF from "./dbFunctions";
import * as poke from "./poke.mjs"


let a = new poke.Bowl('R', 'Rice');

// Example of ingredients and proteins insertion
a.addIngredient('avocado');
a.addIngredient('ananas');


a.addProtein('Tuna');
a.addProtein('Chicken');
a.addProtein('Chicken');

console.log(a);
console.log("ingredients: " + a.ingredients);
console.log("proteins: " + a.proteins);

// Example of invalid ingredient
a.addIngredient('banana');

// note: i and p are promises
let i = dbF.getIngredients().then((result) => {console.log("Ingredients: ", result); return result;});
let p = dbF.getProteins().then((result) => {console.log("Proteins: ", result); return result;});

dbF.insertBowl(a);

let b = dbF.getBowls().then((result) => {
    // for each key inside the result object print all values
    console.log("Bowls: ");
    for (const item of result) {
        console.log(item);
    }
});

dbF.getOrders().then((result) => console.log(result));

