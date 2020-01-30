import React, {Component} from "react";
import MediaQuery from 'react-responsive'
import './index.css';
import BusinessIcon from '@material-ui/icons/Business';
import StayCurrentPortraitIcon from '@material-ui/icons/StayCurrentPortrait';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import WebIcon from '@material-ui/icons/Web';
import NaturePeopleIcon from '@material-ui/icons/NaturePeople';
import DataUsageIcon from '@material-ui/icons/DataUsage';

class MainDescription extends Component {
    render() {
    	const content = '\nStartUp Solutions\n Mobile App Development\n E-commerce App Development\n Web App Development\n Technical Consultations';
        return (
           <div>
           		<MediaQuery query='(min-device-width: 1224px)'>
           		<table style={{'margin':'0px 105px'}}>
           			<tr>
           				<td><BusinessIcon style={{ color: '#fcd303' , fontSize: 100, 'margin': '-200px 67px 0', 'width': '100px'}} /></td>
           				<td><StayCurrentPortraitIcon style={{ color: '#fcd303' , fontSize: 100, 'margin': '-90px 142px auto', 'width': '100px'}} /></td>
           				<td><ShoppingBasketIcon style={{ color: '#fcd303' , fontSize: 100, 'margin': '-97px 75px auto','width': '100px'}} /></td>
      				    <td><WebIcon style={{ color: '#fcd303' , fontSize: 100, 'margin': '-97px 45px auto','width': '100px'}} /></td>
         			</tr>
           			<tr>
           				<td><div className="rowC"><h5 style={{'margin': '1px 74px'}}>StartUps</h5></div></td>
           				<td><div className="rowC"><h5 style={{'margin': '20px 82px', 'width': '250px'}}>Mobile App Development</h5></div></td>
           				<td><div className="rowC"><h5 style={{'margin': '8px 62px', 'width': '250px'}}>E-commerce App Development</h5></div></td>
           				<td><div className="rowC"><h5 style={{'margin': '20px 7px', 'width': '250px'}}>Web App Development</h5></div></td>
           			</tr>
           			<tr>
           				<td></td>
           				<td><NaturePeopleIcon style={{ color: '#fcd303' , fontSize: 100, 'margin': '51px 131px auto','width': '100px'}} /></td>
           				<td><DataUsageIcon style={{ color: '#fcd303' , fontSize: 100, 'margin': '51px 77px auto','width': '100px'}} /></td>
           			</tr>
           			<tr>	
           					<td></td>
           					<td><div className="rowC"><h5 style={{'margin': '20px 76px', 'width': '250px'}}>Technical Consultations</h5></div></td>
           					<td><div className="rowC"><h5 style={{'margin': '20px 76px', 'width': '250px'}}>Data Science</h5></div></td>
           			</tr>
           		</table>
	  	        </MediaQuery>
  	        <MediaQuery query='(max-width: 1224px)'>
  	        		<table style={{'margin':'0 auto'}}>
  	        			<tr>
  	        				<td>
  	        					<BusinessIcon style={{ color: '#fcd303', fontSize: 80, 'margin':'-11px 32px'}} />
  	        				</td>  	        				
  	        			</tr>
  	        			<tr>
  	        				<td><div className="rowC"><h5 style={{'margin':'0 auto'}}>StartUps</h5></div></td>
  	        			</tr>
  	        		</table>
  	        </MediaQuery>
  	        </div>
        );
    }
};

export default MainDescription;