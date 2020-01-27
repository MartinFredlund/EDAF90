'use strict';
const imported = require("./inventory.js");
//console.log(imported.inventory['Sallad']);

let foundations = [];
for(let x in imported.inventory) {
    if(imported.inventory[x].foundation === true) {
        foundations.push(x);
    }
}
console.log('Foundations: ' + foundations.join(', ') + '\n');

let proteins = [];
for(let x in imported.inventory) {
    if(imported.inventory[x].protein === true) {
        proteins.push(x);
    }
}
console.log('Proteins: ' + proteins.join(', ') + '\n');

let extras = [];
for(let y in imported.inventory) {
    if(imported.inventory[y].extra === true) {
        extras.push(y);
    }
}
console.log('Extras: ' + extras.join(', ') + '\n');

let dressings = [];
for(let z in imported.inventory) {
    if(imported.inventory[z].dressing === true) {
        dressings.push(z);
    }
}
console.log('Dressings: ' + dressings.join(', '));

class Salad {
    constructor() {
      this.foundation;
      this.proteins = [];
      this.extras = [];
      this.dressing;
    }

    addFoundation(foundation) {
        this.foundation = foundation; 
    }
    addProtein(protein) {
        this.proteins.push(protein); 
    }
    addExtra(extra) {
        this.extras.push(extra); 
    }
    addDressing(dressing) {
        this.dressing = dressing; 
    }

    removeIngredient(ingredient) {
        console.log(ingredient);
        if(ingredient.foundation === true) {
            console.log(ingredient);
            this.foundation = null;
        }
        if(ingredient.protein === true) {

        }
    }
    
}

let newSalad = new Salad();
newSalad.addFoundation('Pasta');
newSalad.addProtein('Norsk fjordlax');
newSalad.addProtein('Kycklingfilé');
newSalad.addDressing('Caesardressing');


console.log(newSalad);

newSalad.removeIngredient('Pasta');

