import React from 'react';
import {Component} from 'react';
import './App.css';
import Particles from 'react-particles-js';
import GoogleFonts from './GoogleFonts';
import { FaCloudversify } from 'react-icons/fa';
import ReactTitle from './TitleAnimation';


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

const titleStyle= {
  display: 'flex',
  alignItems: 'center'
}

class App extends Component{

render(){

  return (
    <section>
      <div style = {{'width': '450px', 'margin': '0 auto'}} > 
        <GoogleFonts />
        <ReactTitle  />
        
        <Particles 
                params={particleOpt}
        />
      </div>
    </section>
    );

}


}
export default App;
