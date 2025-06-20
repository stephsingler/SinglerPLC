import React from 'react';
import state from '../state';
import { useState } from 'react';
import {FaChevronDown, FaChevronUp} from 'react-icons/lib/fa';
import Header from "./Header";

const Attorneys = () => {
    const [selected, setSelected] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    // const toggle = (e, id) => {
    //     if (e.target) {
    //         setSelected(id === selected ? null : id);
    //     }
    // };
  const renderAttorneys = () => {
    return state.ourAttorneys.map((attorney) => {
      return (
        <div className="info" key={attorney.id}>
          <img src={attorney.avatar} alt="Attorney picture" />
            <div>
                <h5>{attorney.name}</h5>
                <p><strong>{attorney.position}</strong></p>
                {attorney.admissions && (
                    <p><strong>Admissions:</strong>&nbsp;{attorney.admissions}</p>
                )}
                {attorney.education && (
                    <p><strong>Education:</strong>&nbsp;{attorney.education}</p>
                )}
                {attorney.practiceAreas && (
                    <p><strong>Practice Areas:</strong>&nbsp;{attorney.practiceAreas}</p>
                )}
                {attorney.significantAwards && (
                    <p><strong>Awards:</strong>&nbsp;{attorney.significantAwards}</p>
                )}
                {attorney.languages && (
                    <p><strong>Languages:</strong>&nbsp;{attorney.languages}</p>
                )}
                <div className="view-bio" onClick={e => {
                    setSelected(attorney.id );
                    setIsOpen (!isOpen);
                }}>
                    <p>View Bio</p>
                    {isOpen ? <FaChevronUp/> : <FaChevronDown/>}
                </div>

                { selected === attorney.id && isOpen &&
                <div className="attorney-bio">
                    <p>{attorney.bio}</p>
                </div>
                }
            </div>
        </div>
      );
    })
  };
  return (
      <section>
          <Header/>
          <div id="our-attorneys">
              <div className="attorney-title">
                  <h2><span>OUR</span></h2> &nbsp; &nbsp;
                  <h2>TEAM</h2>
              </div>
              <div className="attorney-info">
                  {renderAttorneys()}
              </div>
          </div>
      </section>
  );
};
export default Attorneys;
