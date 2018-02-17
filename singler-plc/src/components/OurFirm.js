import React from 'react';
//data
import ourFirm from '../data/our-firm';

const OurFirm = () => {
  const renderFirm = () => {
    return (
      ourFirm.map((section) => {
        return (
          <div className="section-firm" key={section.id}>
            <div className="section-title">
              <h4>
                {section.title}
              </h4>
            </div>
            <p>
              {section.description} <br /><br />
              {section.description2} <br /><br />
              {section.description3}
            </p>
          </div>
        );
      })
    );
  };
  return (
    <div id="our-firm">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-md-8 mx-auto about-us">
            {renderFirm()}
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurFirm;
