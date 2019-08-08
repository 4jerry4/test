import React, {Component} from 'react';
//import css
import './App.css';
//importing addition from the newly made folder
import Addition from './Addition.js';
//importing a cool css library!!
import 'tachyons';

class App extends Component{
  render(){
    return(
      //importing css
        <div className="App">
      <h1> hi, this is our startup</h1>
      <p> members are 5 yet </p>
      <Addition> </Addition>
      </div>
      );
  }
}
export default App;
