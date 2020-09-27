import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const WorkTile = (props) => {
  const { workDetails, setModalDetails, setShowModal } = props;

  const handleClick = (event) => {
    setModalDetails(workDetails);
    setShowModal(true);
  };

  return (
    <div className="work-image-container" onClick={handleClick}>
      <img className="work-image" src={workDetails.url} alt="" />
    </div>
  );
};

export default WorkTile;
