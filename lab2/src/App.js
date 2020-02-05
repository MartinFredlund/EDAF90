import React from 'react';
import'./App.css';
//import viewOrder from './ViewOrder';
import inventory from './inventory.ES6';
import ComposeSaladModal from './ComposeSaladModal';

class App extends React.Component {
  constructor(props){
  super(props);
  this.state = ({
    salad: []
  });
  this.updateSalad = this.updateSalad.bind(this);
}
  updateSalad(e){
    this.setState({salad : [...this.state.salad, e]})
    console.log(this.state);
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
    </div>
  );
}
}


export default App;
