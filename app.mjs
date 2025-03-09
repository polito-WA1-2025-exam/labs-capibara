"use strict";

const validSizes = ['R', 'M', 'L'];

const validIngredients = ["avocado", "ananas", "cashew nuts", "kale", "mango", "peppers", "corn", 
    "wakame", "tomatoes", "carrots", "salad"];
const validProteins = ['Tuna', 'Chicken', 'Salmon', 'Tofu']
const validBases = ['Rice', 'Black rice', 'Salad']

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



