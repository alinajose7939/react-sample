import React from "react";
import "./NoResultsComponent.css"
import 'font-awesome/css/font-awesome.min.css';

const NoResults = () => {
  return (
    <div className="no-results-div">
      <div className="input-icon icon-no_result icon-no_result-div"></div>
      <div className="no-results-message">No Results Found</div>
    </div>
  );
};

export default NoResults;
