import React from 'react';
//import inventory from './inventory.ES6';
import Orders from "./Orders";
import ComposeSalad from './ComposeSalad';
import'./App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
    this.setState({order : [...this.state.order, order]});
  }

  get salads() {
    return this.state.salad;
  }

  componentDidMount() {
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
          /*ingredient => this.state.inventory.ingredient = Object.values(response).forEach(
            foundation => response[foundation]))
            */
        // let foundations = Object.keys(inventory).filter(
        //   name => inventory[name].foundation
        // )
        //)
      //.then(() => this.setState({ inventory }));
      

      //console.log("Foundations: " + foundations);
      //Object.values(this.state.protein).forEach(protein=>(salad.addProtein(protein)));

  render(){
    const composeSaladElem = (params) => <ComposeSalad {...params} inventory={this.state.inventory}/>;
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
