import React from 'react';
import Header from './Header';

const Resources = props => {
  const renderFranchise = () => {
    return props.franchises.map((franchise) => {
      return (
        <div key={franchise.id}>
          <li><a href={franchise.link}>{franchise.title}</a></li>
          <p>{franchise.description}</p>
        </div>
      );
    })
  };
  const renderGovernment = () => {
    return props.governments.map((government) => {
      return (
        <div key={government.id}>
          <li><a href={government.link}>{government.title}</a></li>
          <p>{government.description}</p>
        </div>
      );
    })
  };
  const renderLegal = () => {
    return props.legal.map((legal) => {
      return (
        <div key={legal.id}>
          <li><a href={legal.link}>{legal.title}</a></li>
          <p>{legal.description}</p>
        </div>
      );
    })
  };
  // const renderRecords = () => {
  //   return props.records.map((record) => {
  //     return (
  //       <li key={record.id}><a href={record.link}>{record.name}</a></li>
  //     );
  //   })
  // }
  return (
    <div className="links">
      <Header />
      <h2>Important Information from other Sources</h2>
      <div className="link-info">
        <div>
          <h4>Franchisee and Business Associations</h4>
          <ul>{renderFranchise()}</ul>
        </div>
        <div>
          <h4>Government Resources</h4>
          <ul>{renderGovernment()}</ul>
          <h4>Legal Resources</h4>
          <ul>{renderLegal()}</ul>
          {/*<h6>View Our Lawyer's CA Bar Records</h6>*/}
          {/*<ul>{renderRecords()}</ul>*/}
        </div>
      </div>
    </div>
  );
};
export default Resources;
