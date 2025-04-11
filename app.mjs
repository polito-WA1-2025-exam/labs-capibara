"use strict";



import * as dbF from "./dbFunctions";
import * as poke from "./poke.mjs"


let a = new poke.Bowl('L', 'Rice');
let b = new poke.Bowl('R', 'Rice');

// Example of ingredients and proteins insertion
/*
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

b.addIngredient('Ananas');
b.addIngredient('Avocado');
b.addIngredient('Ananas');
b.addIngredient('Avocado');

b.addProtein('Chicken');
b.addProtein('Chicken');

console.log(a);
console.log("ingredients: " + a.ingredients);
console.log("proteins: " + a.proteins);

a.updatePrice();
*/
// Example of invalid ingredient
a.addIngredient('banana');

// note: i and p are promises
let i = dbF.getIngredients().then((result) => {console.log("Ingredients: ", result); return result;});
let p = dbF.getProteins().then((result) => {console.log("Proteins: ", result); return result;});

//dbF.insertBowl(a);
//dbF.insertBowl(b);

/** Some debug prints */

// dbF.getOrders().then((result) => console.log(result));

// dbF.getBowlById(6).then(result => console.log(JSON.stringify(result)))
// dbF.getOrderById(3).then(result => console.log(JSON.stringify(result)))
//let ord = new poke.Order("sus")
//ord.addBowlToOrder(a);
//ord.addBowlToOrder(b);
//dbF.insertOrder(ord, 1113);

//dbF.getBowlsBySize("R").then((result ) => console.log("lol:", JSON.stringify(result)))
