import React from 'react';
import inventory from './inventory.ES6';
import Orders from "./Orders";
import ComposeSalad from './ComposeSalad';
import'./App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = ({
      order: []
    });
    this.updateSalad = this.updateSalad.bind(this);
  }
  updateSalad(order){
    console.log(this.state.order); 
    this.setState({order : [...this.state.order, order]});
    console.log(this.state.order); 
  }

  get salads() {
    return this.state.salad;
  }

  render(){
    const composeSaladElem = (params) => <ComposeSalad {...params} inventory={inventory}updateSalad={this.updateSalad} />;
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
                <Link className="nav-link" to='/ComposeSalad'>Komponera din egen sallad</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/Orders'>Order</Link>
              </li>
            </ul>
            <Route path='/ComposeSalad' render={composeSaladElem}/>
            <Route path='/Orders' render={OrderElem}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
