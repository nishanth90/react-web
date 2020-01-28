import React from 'react';
import {Component} from 'react';
import './App.css';
import Particles from 'react-particles-js';
const particleOpt = {
            particles:{
              number: {
                value: 150,
                debsity: {
                  enable: true,
                  value_area: 800
                }
              }
            }
}

class App extends Component{

render(){

  return (

    <div> 
      <h1 style={{color: 'white', textAlign: 'center', fontFamily:'Menlo'}} >EDGECODERS SOFTWARE LABS</h1>
      <Particles 
              params={particleOpt}
      />

    </div>

    );

}


}
export default App;
