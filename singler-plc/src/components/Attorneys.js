import React from 'react';
//UI
import { FaEnvelope, FaFax, FaPhone } from 'react-icons/lib/fa';
//React Router
import { Link } from 'react-router-dom';

const Attorneys = () => {
  return (
    <div id="our-attorneys">
      <div className="attorney-title">
        <h2><span>OUR</span></h2> &nbsp; &nbsp;
        <h2>ATTORNEYS</h2>
      </div>
      <div className="attorney-info">
        <div className="info">
          <img src={"https://i.imgur.com/EiYDEGC.jpg"} />
          <h4>Peter A. Singler</h4>
          <h6>Principal</h6>
          <hr />
          <p><FaPhone size={15} style={{color: '#0C0661'}}/>&nbsp; (707) 823-8719</p>
          <p><FaFax size={15} style={{color: '#0C0661'}} />&nbsp; (707) 823-8737</p>
          <p><FaEnvelope size={15} style={{color: '#0C0661'}} />&nbsp; pas@singler-law.com</p>
          <button><Link to="/Pete">View Bio</Link></button>
        </div>
        <div className="info">
          <img src={"https://i.imgur.com/aNVCbtL.jpg"} />
          <h4>Theo S. Arnold</h4>
          <h6>Associate</h6>
          <hr />
          <p><FaPhone size={15} style={{color: '#0C0661'}}/>&nbsp; (707) 823-8719</p>
          <p><FaFax size={15} style={{color: '#0C0661'}} />&nbsp; (707) 823-8737</p>
          <p><FaEnvelope size={15} style={{color: '#0C0661'}} />&nbsp; tsa@singler-law.com</p>
          <button><Link to="/Theo">View Bio</Link></button>
        </div>
        <div className="info">
          <img src={"https://i.imgur.com/FZ1Y8Ax.jpg?1"} />
          <h4>Nathan Verbiscar-Brown</h4>
          <h6>Associate</h6>
          <hr />
          <p><FaPhone size={15} style={{color: '#0C0661'}}/>&nbsp; (707) 823-8719</p>
          <p><FaFax size={15} style={{color: '#0C0661'}} />&nbsp; (707) 823-8737</p>
          <p><FaEnvelope size={15} style={{color: '#0C0661'}} />&nbsp; nvb@singler-law.com</p>
          <button><Link to="/Nathan">View Bio</Link></button>
        </div>
      </div>
    </div>
  );
};
export default Attorneys;
