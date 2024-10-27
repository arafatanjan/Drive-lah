import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = ({handleSectionClick}) => {
  const section={  name: 'Device', completed: true }
    return (
      <div className="Footer-container">
        <div className="next-button-container">
        <button onClick={() =>  handleSectionClick(section)} className="next-button">Next</button>
       {/* <Link to={"/devicemanagement"}> <button className="next-button">Next</button></Link> */}
      </div>
      </div>
    );
};

export default Footer;