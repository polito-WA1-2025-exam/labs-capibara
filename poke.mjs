export const validSizes = ['R', 'M', 'L'];

export const validIngredients = ["Avocado", "Ananas", "Cashew_nuts", "Kale", "Mango", "Peppers", "Corn", 
    "Wakame", "Tomatoes", "Carrots", "Salad"];
export const validProteins = ['Tuna', 'Chicken', 'Salmon', 'Tofu']
export const validBases = ['Rice', 'Black_rice', 'Salad']
export const bowl_sizes = {
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


export function Bowl(size, base){
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
        let tot_ingredients = this.ingredients.length
        let max_ingredients = bowl_sizes[this.size].max_ingredients

        if (tot_ingredients > max_ingredients) {
            let extra_ingredients = tot_ingredients - max_ingredients
            this.price = this.price * (1 + .2 * extra_ingredients)
        }

    }

    
}

export function User(email){
    this.email = email 
}

export function Order(){
    this.bowls = [];
    this.discount = 0;
}