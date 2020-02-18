//import inventory from "./inventory.ES6";

class Salad {
    static globalid = 1;
    constructor() {
      this.foundations = [];
      this.proteins = [];
      this.extras = [];
      this.dressings = [];
      this.price = 0;
      this.id = Salad.generateId();
    }
    static generateId(){
        return this.globalid++;
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

/*     removeFoundation(foundation) {
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
            if(dressing === this.dressings[i]) {
                this.dressings.splice(this.dressings.indexOf(dressing), 1);
            }
        }
    } */

    setPrice() {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        let newArray = this.extras.concat(this.dressings, this.proteins, this.foundations);
        let prices = newArray.map(i => this.state.inventory[i].price);
       
        this.price = prices.reduce(reducer);
    }
    
    toString() {
        return "Salad: " + this.id + 
        ": Foundation: " + this.foundations + 
        ", Proteins: " + this.proteins + 
        ", Extras: " + this.extras + 
        ", Dressing: " + this.dressings + 
        ", Price: " + this.price;
    }
}
export default Salad;