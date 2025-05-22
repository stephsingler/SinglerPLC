import React from 'react';
//components
import {FaEnvelope, FaPhone} from "react-icons/lib/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div>
            <p><FaPhone size={20} style={{color: '#ffffff'}}/>&nbsp; (707) 823-8719</p>
            <a href="mailto:info@singler-law.com"><FaEnvelope size={20} style={{color: '#ffffff'}} />&nbsp; info@singler-law.com</a>
        </div>
      <p className="copy">Singler Professional Law Corp. &copy; 2025</p>
    </div>
  );
};
export default Footer;
