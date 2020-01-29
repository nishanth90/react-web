import React, {Component} from "react";

import './index.css';

class MainDescription extends Component {
    render() {
    	const content = 'StartUp Solutions\n Mobile App Development\n E-commerce App Development\n Web App Development\n Technical Consultations';
        return (
            <div className = "display-linebreak" style = {{'width': '450px', 'margin': '-301px 494px'}}>
            	{content}

            </div>
        );
    }
};

export default MainDescription;