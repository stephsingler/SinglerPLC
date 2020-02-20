import React from 'react';
import BioHeader from './BioHeader';

const AttorneyBio = props => {
    const { id } = props.match.params;
    const attorney = props.ourAttorneys[id];
    const renderBarAdmissions = () => {
        return attorney.barAdmissions.map(admission => <li>{admission}</li>);
    };
    const renderDistricts = () => {
        return attorney.districts.map(district => <p>{`--${district}`}</p>);
    };
    const renderEducation = () => {
        return attorney.education.map(edu => <li>{edu}</li>);
    };
    const renderMemberships = () => {
        return attorney.memberships.map(membership => <li>{membership}</li>);
    };
    return (
        <div>
            <BioHeader />
            <div className="bio-background">
                <div className="bio-header">
                    <div className="bio-header-white">
                        <div className="bio-header-blue">
                            <img src={attorney.avatar} alt=""/>
                            <div>
                                <h2>{attorney.name}</h2>
                                <h4>{attorney.title}</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bio-container">
                    <div className="bio">
                        <p>{attorney.bio}</p>
                    </div>
                    <div className="edu-info">
                        {attorney.barAdmissions.length > 0 &&
                            <div>
                                <h6>Bar Admissions</h6>
                                <ul>{renderBarAdmissions()}</ul>
                            </div>
                        }
                        {attorney.districts.length > 0 &&
                             <div>
                                 {renderDistricts()}
                             </div>
                        }
                        {attorney.education.length > 0 &&
                            <div>
                                <h6>Education</h6>
                                <ul>{renderEducation()}</ul>
                            </div>
                        }
                        {attorney.memberships.length > 0 &&
                            <div>
                                <h6>Memberships</h6>
                                <ul>{renderMemberships()}</ul>
                            </div>
                        }
                        <div className="contact">
                            <h6>{`Contact ${attorney.name}`}</h6>
                            <p>{`Phone: ${attorney.phone}`}</p>
                            <p>{`Fax: ${attorney.fax}`}</p>
                            <p>{`Email: ${attorney.email}`}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AttorneyBio;
