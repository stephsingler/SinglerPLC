import React from 'react';
//UI
import { FaFax, FaPhone } from 'react-icons/lib/fa';
const Contact = () => {
  return (
    <div id="contact">
      <div className="cta">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 mx-auto">
              <div className="cta-inner text-center rounded">
                <div className="mb-0">
                  <h4>Singler PLC</h4>
                  <p>127 S. Main Street</p>
                  <p>Sebastopol, CA 95472</p>
                  <p><FaPhone size={15} style={{color: '#0C0661'}}/>&nbsp; (707) 823-8719</p>
                  <p><FaFax size={15} style={{color: '#0C0661'}} />&nbsp; (707) 823-8737</p><br/>
                  <h6>Franchise and
                    Distribution Law
                    Experts
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
