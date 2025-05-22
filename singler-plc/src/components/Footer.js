import React from 'react';
//components
import {FaFax, FaPhone} from "react-icons/lib/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div>
            <p><FaPhone size={15} style={{color: '#ffffff'}}/>&nbsp; (707) 823-8719</p>
            <p><FaFax size={15} style={{color: '#ffffff'}} />&nbsp; (707) 823-8737</p>
        </div>
      <p className="copy">Singler Professional Law Corp. &copy; 2025</p>
    </div>
  );
};
export default Footer;
