import React from 'react';
import BioHeader from './BioHeader';

const TheoBio = () => {
  return (
    <div>
      <BioHeader />
      <div className="bio-background">
        <div className="bio-header">
          <div className="bio-header-white">
            <div className="bio-header-blue">
              <img src={"https://i.imgur.com/aNVCbtL.jpg"} alt=""/>
              <div>
                <h2>Theo S. Arnold</h2>
                <h4>Associate</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="bio-container">
          <div className="bio">
            <p>
              Theo represents clients in business transactional and litigation matters, including entity formation, intellectual property protection, and franchisee/franchisor disputes. He also oversees the firm's corporate recordkeeping practice.<br/><br/>
              Based on the strength of his litigation work, Theo was appointed to the California appellate defense panel, where he represents indigent clients before appellate courts.<br/><br/>
              Theo received his J.D., cum laude, at the University of Michigan, where he was clinically trained in entrepreneurial business law and appellate litigation. At Michigan, Theo was an editor of the Michigan Journal of International Law, served as the school's ABA representative, and won a Certificate of Merit for his performance in Constitutionalism in South Africa. He received his B.A. in economics from the University of California, San Diego, where he was a National Merit Scholar.<br/><br/>
              Outside of his legal work, Theo is an experienced teacher, having taught logic at the University of Michigan and University of San Diego.
            </p>
          </div>
          <div className="edu-info">
            <h6>Bar Admissions</h6>
            <ul>
              <li>State Bar of California</li>
            </ul>
            <h6>Education</h6>
            <ul>
              <li>University of Michigan (JD, cum laude, 2011)</li>
              <li>University of California, San Diego (BA, economics, 2005)</li>
            </ul>
            <h6>Memberships</h6>
            <ul>
              <li>American Bar Association (ABA)</li>
              <li>Sonoma County Bar Association</li>
              <li>San Diego County Bar Association</li>
              <li>CLA Franchise Law Standing Committe</li>
            </ul>
            <div className="contact">
              <h6>Contact Theo</h6>
              <p>Phone: (707) 823-8719</p>
              <p>Fax: (707) 823-8737</p>
              <p>Email: tsa@singler-law.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TheoBio;
