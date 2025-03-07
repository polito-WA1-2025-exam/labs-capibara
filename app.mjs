"use strict";

const validIngredients = ["avocado", "ananas", "cashew nuts", "kale", "mango", "peppers", "corn", 
    "wakame", "tomatoes", "carrots", "salad"];
const validProteins = ['Tuna', 'Chicken', 'Salmon', 'Tofu']
const validBases = ['Rice', 'Black rice', 'Salad']

function Bowl(size, base){
    this.size = size;
    this.base = (base in validBases) && base;
    this.ingredients = [];
    this.proteins = [];
    this.price = undefined;

    this.addIngredient = (ingr) =>{
        // add check if(ingr in validIngredients)
        this.ingredients.push(ingr)

    }
}


function Order(){
    this.bowls = [];
    this.discount = 0;
}


let a = Bowl('R', 'Rice');



