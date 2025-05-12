import React from 'react';
import state from '../state';
import Header from "./Header";
import Footer from "./Footer";


const PracticeAreas = () => {
  const renderPracticeAreas = () => {
    return (
      state.practiceAreas.map((area) => {
        return (
          <div className="description" key={area.id}>
            <h5>{area.title}</h5>
            <p>{area.description}</p>
            <div className="testimonial">
                <p>{area.testimonial}</p>
            </div>
          </div>
        );
      })
    )
  };
  return (
      <section>
          <Header/>
          <div id="practice-areas">
              <div className="container-fluid">
                  <div className="row">
                      <div className="col-xs-12 col-md-4 mx-auto blue-box">
                          <h2><span>PRACTICE</span></h2>
                          <h2>AREAS</h2>
                          <h6>National in Scope with Personal Service</h6>
                          <img src="https://i.imgur.com/aUc3UzT.jpg" alt="" />
                      </div>
                      <div className="col-xs-12 col-md-8 mx-auto beige-box">
                          {renderPracticeAreas()}
                      </div>
                  </div>
              </div>
          </div>
          <Footer/>
      </section>
  );
};
export default PracticeAreas;
