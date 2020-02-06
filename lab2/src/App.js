import React from 'react';
import'./App.css';
//import viewOrder from './ViewOrder';
import inventory from './inventory.ES6';
import ComposeSaladModal from './ComposeSaladModal';
import Orders from "./Orders";
import Salad from './Salad';


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
  //const ComposeSaladModales = (params) => <ComposeSaladModal {...params} inventory={inventory} updateSalad={this.updateSalad}/>
 // const viewOrderElem = (params) => <viewOrder {...params} order={this.state.order}/>
  return (
    <div>
      <div className="jumbotron text-center">
        <h1 className="display-4">EDAF90 - Web Programming</h1>
        <p className="lead">
        </p>
        <hr className="my-4" />
        <p></p>
      </div>

      <ComposeSaladModal inventory={inventory} updateSalad={this.updateSalad} />
      <Orders order = {this.state.order} />
    </div>

  );
}
}


export default App;
