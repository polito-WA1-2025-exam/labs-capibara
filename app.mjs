"use strict";



import * as dbF from "./dbFunctions";
import * as poke from "./poke.mjs"


let a = new poke.Bowl('L', 'Rice');

// Example of ingredients and proteins insertion
a.addIngredient('Avocado');
a.addIngredient('Ananas');
a.addIngredient('Ananas');
a.addIngredient('Avocado');
a.addIngredient('Ananas');
a.addIngredient('Avocado');
a.addIngredient('Avocado');
a.addIngredient('Ananas');
a.addIngredient('Ananas');
a.addIngredient('Avocado');
a.addIngredient('Ananas');
a.addIngredient('Avocado');

a.addProtein('Tuna');
a.addProtein('Chicken');
a.addProtein('Chicken');


console.log(a);
console.log("ingredients: " + a.ingredients);
console.log("proteins: " + a.proteins);

a.updatePrice();

// Example of invalid ingredient
a.addIngredient('banana');

// note: i and p are promises
let i = dbF.getIngredients().then((result) => {console.log("Ingredients: ", result); return result;});
let p = dbF.getProteins().then((result) => {console.log("Proteins: ", result); return result;});

dbF.insertBowl(a);

dbF.getBowls().then((result) => {
    // for each key inside the result object print all values
    console.log("Bowls: ");
    for (const item of result) {
        console.log(JSON.stringify(item)+"\n");
    }
});

dbF.getOrders().then((result) => console.log(result));

