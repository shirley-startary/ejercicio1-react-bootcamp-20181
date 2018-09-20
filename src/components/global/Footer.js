// Dependencia
import React from 'react';

// Assets
import './css/Footer.css';

const Footer = (props) => {
  console.log(props);
  return (
    <div className="Footer">
      <p>Footer - Hola {props.empresa}! </p>
    </div>
  );
}

export default Footer;
