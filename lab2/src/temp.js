import inventory from './inventory.ES6';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ComposeSalad from './ComposeSalad';

function pp() {
   return (
     <div>
       <div className="jumbotron text-center">
         <h1>My Own Salad Bar</h1>
         <p>Here you can order custom made salads!</p> 
        </div>
       <div>
        <ComposeSalad inventory={inventory}/>
     </div>
   </div>
   );
}


export default App;
