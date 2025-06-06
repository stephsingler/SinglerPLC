import React from 'react';
import state from '../state';
import Header from "./Header";
import { useState } from "react";
import {FaPlus} from "react-icons/lib/fa";


const PracticeAreas = () => {
  const [selected, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = (e, id) => {
      if (e.target) {
          setSelected(id === selected ? null : id);
      }
    };
  const renderPracticeAreas = () => {
    return (
      state.practiceAreas.map((area) => {
        return (
          <div className="description" key={area.id}>
              <div className="area" onClick={e => {
                  setSelected(area.id );
                  setIsOpen (!isOpen);
              }}>
                  <h5>{area.title}</h5>
                  <FaPlus/>
              </div>

              { selected === area.id && isOpen &&
                  <div className="practice-info">
                      <p>{area.description}</p>
                      {area.testimonial && (
                          <div className="testimonial">
                              <p>{area.testimonial}</p>
                          </div>
                      )}
                  </div>
              }
          </div>
        );
      })
    )
  };
  return (
      <section>
          <Header/>
          <div id="practice-areas">
              <div className="attorney-title">
                  <h2><span>PRACTICE</span></h2> &nbsp; &nbsp;
                  <h2>AREAS</h2>
              </div>
              <div>
                  <div>
                      <div className="beige-box">
                          {renderPracticeAreas()}
                      </div>
                  </div>
              </div>
          </div>
      </section>
  );
};
export default PracticeAreas;
