import React from 'react';
//UI
import { FaEnvelope, FaFax, FaPhone } from 'react-icons/lib/fa';
//React Router
import { Link } from 'react-router-dom';

const Attorneys = props => {
  const renderAttorneys = () => {
    return props.ourAttorneys.map((attorney) => {
      return (
        <div className="info">
          <img src={attorney.avatar} />
          <h4>{attorney.name}</h4>
          <h6>{attorney.title}</h6>
          <hr />
          <p><FaPhone size={15} style={{color: '#0C0661'}}/>&nbsp; {attorney.phone}</p>
          <p><FaFax size={15} style={{color: '#0C0661'}} />&nbsp; {attorney.fax}</p>
          <p><FaEnvelope size={15} style={{color: '#0C0661'}} />&nbsp; {attorney.email}</p>
          <button><Link to={attorney.link}>View Bio</Link></button>
        </div>
      );
    })
  }
  return (
    <div id="our-attorneys">
      <div className="attorney-title">
        <h2><span>OUR</span></h2> &nbsp; &nbsp;
        <h2>ATTORNEYS</h2>
      </div>
      <div className="attorney-info">
        {renderAttorneys()}
      </div>
    </div>
  );
};
export default Attorneys;
