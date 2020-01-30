import React, {Component} from "react";
import Title from "react-titles/Title4";
import MediaQuery from 'react-responsive';


class ReactTitle extends Component {
    render() {
        return (
        	<div>
        	<MediaQuery query='(min-device-width: 1224px)'>
            	<Title size="600" text1="SOFTWARE LABS" text2="EDGECODERS" open={true} />
            </MediaQuery>
            <MediaQuery query='(max-width: 1224px)'>
            	<Title margin="0 auto" size="300" text1="SOFTWARE LABS" text2="EDGECODERS" open={true} />
            </MediaQuery>
            </div>
        );
    }
};

export default ReactTitle;