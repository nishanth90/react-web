import GoogleFontLoader from 'react-google-font-loader';
import React from 'react';


function GoogleFonts(){
return (
    <GoogleFontLoader
      fonts={[
        {
          font: 'Bowlby One SC',
          weights: [400, '400i'],
        },
        {
          font: 'Bebas Neue'
        },
      ]}
      subsets={['cyrillic-ext', 'greek']}
    />
);
}
export default GoogleFonts;