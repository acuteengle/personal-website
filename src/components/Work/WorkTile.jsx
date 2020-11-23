import React from "react";

const WorkTile = (props) => {
  const { work, setModalDetails, setShowModal } = props;

  const handleClick = (event) => {
    setModalDetails(work);
    setShowModal(true);
  };

  return (
    <div className="work-image-container" id={work.id} onClick={handleClick}>
      <img src={work.url} alt="" className="work-image" />
    </div>
  );
};

export default WorkTile;
