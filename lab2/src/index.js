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
