import React from 'react';
import BioHeader from './BioHeader';

const NathanBio = () => {
  return (
    <div>
      <BioHeader />
      <div className="bio-background">
        <div className="bio-header">
          <div className="bio-header-white">
            <div className="bio-header-blue">
              <img src={"https://i.imgur.com/FZ1Y8Ax.jpg?1"} alt=""/>
              <div>
                <h2>Nathan Verbiscar-Brown</h2>
                <h4>Associate</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="bio-container">
          <div className="bio">
            <p>
              Nathn Verbiscar-Brown represents clients in complex commercial litigation and business transactional matters. His past work includes: breach of contract action by singer/songwriter against music manager, resulting in $5 million jury verdict for plantiff; class action against nationwide retailer, resulting in $7.3 million settlement; breach of contract action by approximately 20 franchisees against franchisor, resulting in confidential settlement; and defending $30 million fraudulent transfer claim by the Government of the Republic of China, resulting in confidential settlement. Other matters include: breach of contract and tort actions by purchasers of small and medium sized businesses against sellers, and excessive force claims against law enforcement.<br/><br/>
              Mr. Veribiscar-Brown received his Juris Doctorate from the University of California, Los Angeles, where he also received a Bachelor of Arts with Honos in Global Studies (Globalization), graduating cum laude. Prior to law school, Mr. Verbiscar-Brown worked in the film and television industry.<br/><br/>
              An active outdoorsman, Mr. Verbiscar-Brown enjoys swimming, bicycling, skiing, camping, and hiking with his dogs. He is an Eagle Scout and a native son of Sonoma County, California.
            </p>
          </div>
          <div className="edu-info">
            <h6>Bar Admissions</h6>
            <h6>Education</h6>
            <h6>Memberships</h6>
            <div className="contact">
              <h6>Contact Nathan</h6>
              <p>Phone: (707) 823-8719</p>
              <p>Fax: (707) 823-8737</p>
              <p>Email: nvb@singler-law.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NathanBio;
