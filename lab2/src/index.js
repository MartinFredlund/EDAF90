import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import './index.css';
import App from './App'
//import * as serviceWorker from './serviceWorker'
import $ from "jquery"; // skip this if you do not use bootstrap modals
import Popper from "popper.js"; // skip this if you do not use bootstrap modals

ReactDOM.render(<App/>, document.getElementById('root'));

//serviceWorker.unregister();

/* import "./styles.css";
import inventory from "./inventory.ES6";
import ComposeSalad from "./ComposeSalad";
import ComposeSaladModal from "./ComposeSaladModal.js";

class App extends React.Component {
  constructor(props){
  super(props);
  this.state = {
    sallad: []
  };
}
render(){
  return (
    <div>
      <div className="jumbotron text-center">
        <h1 className="display-4">EDAF90 - Web Programming</h1>
        <p className="lead">
        </p>
        <hr className="my-4" />
        <p></p>
      </div>

      <ComposeSaladModal inventory={inventory} />
    </div>
  );
}
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
 */