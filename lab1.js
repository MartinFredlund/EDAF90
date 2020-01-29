'use strict';
const imported = require("./inventory.js");
//console.log(imported.inventory['Sallad']);

let foundations = Object.keys(imported.inventory).filter(i => imported.inventory[i].foundation === true);
console.log('Foundation: ' + foundations + '\n');

let proteins = Object.keys(imported.inventory).filter(i => imported.inventory[i].protein === true);
console.log('Proteins: ' + proteins + '\n');

let extras = Object.keys(imported.inventory).filter(i => imported.inventory[i].extra === true);
console.log('Extras: ' + extras + '\n');

let dressings = Object.keys(imported.inventory).filter(i => imported.inventory[i].dressing === true);
console.log('Dressings: ' + dressings + '\n');


class Salad {
    constructor() {
      this.foundations = [];
      this.proteins = [];
      this.extras = [];
      this.dressings = [];
      //this.ingredients = [];
    }

    addFoundation(foundation) {
        this.foundations.push(foundation); 
    }
    addProtein(protein) {
        this.proteins.push(protein); 
    }
    addExtra(extra) {
        this.extras.push(extra); 
    }
    addDressing(dressing) {
        this.dressings.push(dressing); 
    }

    removeFoundation(foundation) {
        for(let i = 0; i < foundations.length; i++) {
            if(protein === this.foundations[i]) {
                this.foundations.splice(this.foundations.indexOf(foundation), 1);
            }
        }
    }

    removeProtein(protein) {
        for(let i = 0; i < proteins.length; i++) {
            if(protein === this.proteins[i]) {
                this.proteins.splice(this.proteins.indexOf(protein), 1);
            }
        }
    }

    removeExtra(extra) {
        for(let i = 0; i < extras.length; i++) {
            if(extra === this.extras[i]) {
                this.extras.splice(this.extras.indexOf(extra), 1);
            }
        }
    }

    removeDressing(dressing) {
        for(let i = 0; i < dressings.length; i++) {
            if(protein === this.dressings[i]) {
                this.dressings.splice(this.dressings.indexOf(dressing), 1);
            }
        }
    }

    get price() {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        let newArray = this.extras.concat(this.dressings, this.proteins, this.foundations);
        let prices = newArray.map(i => imported.inventory[i].price);
       
        return prices.reduce(reducer);
    }
    
}

class ExtraGreenSalad extends Salad {
    get price() {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        let newArray = this.extras.concat(this.proteins, this.dressings);
        let newPrice = newArray.map((i => imported.inventory[i].price*0.5));
        let increaseSize = this.foundations.map((i => imported.inventory[i].price*1.3));
        let prices = newPrice.concat(increaseSize);
       
        return prices.reduce(reducer);
    }
}

class GourmetSalad extends Salad {
    addFoundation(foundation, amount) {
        //foundation.amount = amount;
        this.foundations.push(foundation); 
    }
    addProtein(protein, amount) {
        //protein.amount = amount;
        this.proteins.push(protein); 
    }
    addExtra(extra, amount) {
        //extra.amount = amount;
        this.extras.push(extra); 
    }
    addDressing(dressing, amount) {
        //dressing.amount = amount;
        this.dressings.push(dressing); 
    }

    /*
    get price() {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;

        let newArray = this.extras.concat(this.dressings, this.proteins, this.foundations);

        // kanske inte fungerar pga immutability på imported objets?
        let specialPrices = this.newArray.map((i => imported.inventory[i].price*(imported.inventory[i].amount))); 
       
        return prices.reduce(reducer);
    }
    */
}

let myCesarSalad = new Salad();
myCesarSalad.addFoundation(foundations[0]);
myCesarSalad.addProtein(proteins[0]);
myCesarSalad.addProtein(proteins[1]);
myCesarSalad.addDressing(dressings[0]);
myCesarSalad.addExtra(extras[0]);

let myGreenSalad = new ExtraGreenSalad();
myGreenSalad.addFoundation(foundations[0]);
myGreenSalad.addProtein(proteins[0]);
myGreenSalad.addProtein(proteins[1]);
myGreenSalad.addDressing(dressings[0]);
myGreenSalad.addExtra(extras[0]);

let myGourmetSalad = new GourmetSalad();
myGourmetSalad.addFoundation(foundations[0], 1.3);
myGourmetSalad.addProtein(proteins[0], 1.0);
myGourmetSalad.addProtein(proteins[1], 1.0);
myGourmetSalad.addDressing(dressings[0], 1.0);
myGourmetSalad.addExtra(extras[0], 1.0);

//myCesarSalad.removeFoundation(foundations[0]);
//myCesarSalad.removeProtein(proteins[1]);


console.log(myCesarSalad);
console.log('Price: ' + myCesarSalad.price + '\n\n');

console.log(myGreenSalad);
console.log('Price: ' + myGreenSalad.price + '\n\n');

console.log(myGourmetSalad);
//console.log('Price: ' + myGourmetSalad.price);





