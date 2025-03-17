"use strict";



import * as dbF from "./dbFunctions";

const validSizes = ['R', 'M', 'L'];

const validIngredients = ["avocado", "ananas", "cashew nuts", "kale", "mango", "peppers", "corn", 
    "wakame", "tomatoes", "carrots", "salad"];
const validProteins = ['Tuna', 'Chicken', 'Salmon', 'Tofu']
const validBases = ['Rice', 'Black rice', 'Salad']
const bowl_sizes = {
    'R' : {
        'base_price' : 9
        , 'max_ingredients' : 4
        , 'protein_num': 1
    }
    , 'M' : {
        'base_price' : 11
        , 'max_ingredients' : 4
        , 'protein_num': 2
    }
    , 'L' : {
        'base_price' : 14
        , 'max_ingredients' : 6
        , 'protein_num': 3
    }
}


function Bowl(size, base){
    this.size = size;
    this.base = base;
    this.ingredients = [];
    this.proteins = [];
    this.price = undefined;
    

    // check if the size is valid
    if(!this.size || !(validSizes.includes(size))){
        console.log("Invalid size: " + size);
        this.size = undefined;
    }

    // check if the base is valid
    if(!this.base || !(validBases.includes(base))){
        console.log("Invalid base: " + base);
        this.base = undefined;
    }

    this.price = bowl_sizes[this.size].base_price


    this.addIngredient = (ingr) =>{
        // check if the ingredient is valid
        // if it is, add it to the ingredients
        if(validIngredients.includes(ingr))
            this.ingredients.push(ingr);
        else
            console.log("Invalid ingredient: " + ingr);

    }

    this.addProtein = (protein) =>{
        // check if the protein is valid 
        // if it is, add it to the proteins array
        if(validProteins.includes(protein))
            this.proteins.push(protein);
        else
            console.log("Invalid protein: " + protein);

    }

    this.updatePrice = () => {
        tot_ingredients = this.ingredients.length
        max_ingredients = bowl_sizes[this.size].max_ingredients

        if (tot_ingredients > max_ingredients) {
            extra_ingredients = tot_ingredients - max_ingredients
            this.price = this.price * (1 + .2 * extra_ingredients)
        }

    }

    
}


function Order(){
    this.bowls = [];
    this.discount = 0;
}

let a = new Bowl('R', 'Rice');

// Example of ingredients and proteins insertion
a.addIngredient('avocado');
a.addIngredient('ananas');
a.addProtein('Tuna');
a.addProtein('Chicken');

console.log(a);
console.log("ingredients: " + a.ingredients);
console.log("proteins: " + a.proteins);

// Example of invalid ingredient
a.addIngredient('banana');

let i = dbF.getIngredients().then((result) => {console.log("Ingredients: ", result); return result;});
let p = dbF.getProteins().then((result) => {console.log("Proteins: ", result); return result;});

let b = dbF.getBowls().then((result) => {
    // for each key inside the result object print all values
    console.log("Bowls: ");
    for (const key in result) {
        console.log(key + ":");
        for (const innerKey in result[key]) {
            console.log("  " + innerKey + ": " + result[key][innerKey]);
        }
    }
});