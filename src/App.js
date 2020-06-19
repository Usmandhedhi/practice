import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dinner from './Dinner.js';

function App() {
  return (
    <div className="App">
     <Dinner dishName="Chicken Karahi" sweetDish="Gajar Ka Halwa"/>
     <hr/>
     <Dinner dishName="Biryani" sweetDish="Gulab Jamun"/>
     <hr/>
     <Dinner dishName="BBQ" sweetDish="Icecream"/>
     
       </div>
  ); 
}

export default App;
