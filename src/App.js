import React from 'react';
import {Component} from 'react';
import './App.css';
import Particles from 'react-particles-js';
import GoogleFonts from './GoogleFonts';
import { FaCloudversify } from 'react-icons/fa';


const particleOpt = {
            particles:{
              number: {
                value: 150,
                density: {
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
      <GoogleFonts />
      <h1 type="text" style={{color: '#F9E915', textAlign: 'center', fontFamily:'Bebas Neue', fontSize:'81px'}} >EDGECODERS  SOFTWARE  LABS</h1>

      
      <Particles 
              params={particleOpt}
      />
      <FaCloudversify />
    </div>

    );

}


}
export default App;
