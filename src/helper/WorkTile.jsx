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
    <div
      className="work-image-container"
      id={workDetails.id}
      onClick={handleClick}
    >
      <img src={workDetails.url} alt="" className="work-image" />
    </div>
  );
};

export default WorkTile;
