import React from 'react';
import BioHeader from './BioHeader';

const PeteBio = () => {
  return (
    <div>
      <BioHeader />
      <div className="bio-background">
        <div className="bio-header">
          <div className="bio-header-white">
            <div className="bio-header-blue">
              <img src={"https://i.imgur.com/EiYDEGC.jpg"} alt=""/>
              <div>
                <h2>Peter A. Singler</h2>
                <h4>Principal</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="bio-header">
        </div>
        <div className="bio-container">
          <div className="bio">
            <p>
              Pete Singler represents businesses of all sizes, from sole proprietorships to publicly traded companies. His personal expertise is in transactional matters, including entity formation, financing, real estate, negotiation and franchising work. He is one of the few business lawyers in the country who represents exclusively franchisees with regard to franchise matters. An Officer and Director of a multi-unit franchisee, Pete has a truly unique perspective regarding the changing relationships and dynamics of franchising. He also sits on the American Franchisee Association's Board of Directors, giving him a wide perspective on issues facing franchisees across the nation. Pete recently negotiated a new system-wide franchise agreement for Culligan franchisees which is being heralded as "a model for other franchise systems." A licensed real estate broker, Pete offers clients expertise with regard to real estate acquisition, finance, and development. Pete also has extensive experience with "accessibility" and other ADA issues. He has been lecturing and advising franchisee associations and businesses on this subject since 1989.<br/><br/>
              Pete was the only lawyer invited by the United States House of Representatives to testify in support of federal franchise legislation in oversight hearings before the Subcommittee on Administrative and Commercial laws in June 1999. He is a member of the American Bar Association's Forum on Franchising, the AFA's Legal Symposium Steering Committee and is an AFA Affiliate Member. A graduate of the University of Pennsylvania Law School, Pete also received formal business education from the Wharton School.
            </p>
          </div>
          <div className="edu-info">
            <h6>Bar Admissions</h6>
            <ul>
              <li>State Bar of California</li>
              <li>9th Circuit Court of Appeals</li>
              <li>U.S. District Courts</li>
            </ul>
            <p>--Northern District of California</p>
            <p>--Eastern District of California</p>
            <p>--Southern District of California</p>
            <h6>Education</h6>
            <ul>
              <li>University of Pennsylvania Law School (JD - 1990)</li>
              <li>Pepperdine University (BA)</li>
            </ul>
            <h6>Memberships</h6>
            <ul>
              <li>American Bar Association (ABA) -- Forum on Franchising</li>
              <li>Sonoma County Bar Association</li>
            </ul>
            <div className="contact">
              <h6>Contact Pete</h6>
              <p>Phone: (707) 823-8719</p>
              <p>Fax: (707) 823-8737</p>
              <p>Email: pas@singler-law.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PeteBio;
