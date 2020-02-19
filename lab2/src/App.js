import React from 'react';
//import inventory from './inventory.ES6';
import Orders from "./Orders";
import ComposeSalad from './ComposeSalad';
import'./App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Salad from './Salad';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = ({
      order: [],
      inventory: {}
    });
    this.updateSalad = this.updateSalad.bind(this);
    //this.fetchInventory = this.fetchInventory.bind(this);
  }
  
  updateSalad(order){
    this.setState({order : [...this.state.order, order]}, () =>
      {window.localStorage.setItem('salads', JSON.stringify(this.state.order))}
    );
    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(order)
    };
    fetch('http://localhost:8080/orders/', options);
  }

  get salads() {
    return this.state.salad;
  }

  componentDidMount() {//let salads = JSON.parse(Object.setPrototypeOf(window.localStorage.getItem('salads')));
    let salads = JSON.parse(window.localStorage.getItem('salads'));
    console.log(salads);
    if(salads != null) {
      // Gör om Javascript object till salad object
      let orders = [];
      Object.values(salads).forEach(element => {
        let s = new Salad();
        s.addFoundation(element.foundations);
        s.addDressing(element.dressings);
        Object.values(element.proteins).forEach(protein=>(
          s.addProtein(protein)));
        Object.values(element.extras).forEach(extra =>(
          s.addExtra(extra)));
        s.setPrice(element.price);
        
        orders.push(s);
      });
      this.setState({ order: orders });
    }

    let inventory = {};
   
    let baseURL = 'http://localhost:8080/';

    let typeURLS = ['foundations', 'proteins', 'extras', 'dressings'];

    Promise.all(typeURLS.map(typeURL =>{ 
      return fetch(baseURL + typeURL)
        .then(response => response.json())
        .then(ingredients =>{
         return Promise.all(ingredients.map(ingredient =>{
           return fetch(baseURL + typeURL + '/' + ingredient)
             .then(response => response.json())
             .then(contents => inventory[ingredient] = contents)
        }))
      })
    }))
      .then(() => this.setState({inventory}));
      console.log(inventory);

    }

  render(){
    const composeSaladElem = (params) => <ComposeSalad {...params} inventory={this.state.inventory} updateSalad={this.updateSalad} />;
    const OrderElem = (params) => <Orders {...params} order={this.state.order}/>;
    
    return (
      <div>
        <div className="jumbotron text-center">
          <h1 className="display-4">EDAF90 - Web Programming</h1>
          <p className="lead">
          </p>
          <hr className="my-4" />
          <p></p>
        </div>
        
        <Router>
          <div>
            <ul className="nav nav-pills">
              <li className="nav-item">
                <Link className="nav-link" to='/compose-salad'>Komponera din egen sallad</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/orders'>Order</Link>
              </li>
            </ul>
            <Route path='/compose-salad' render={composeSaladElem}/>
            <Route path='/orders' render={OrderElem}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
