import React from "react";
import { Modal } from "react-bootstrap";

const WorkModal = (props) => {
  const { show, onHide, modalDetails } = props;

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <div className="work-modal-header">
          <div>
            <img src={modalDetails.url} alt="" />
          </div>
          <div>
            <Modal.Title>
              <h2 className="work-modal-title">{modalDetails.title}</h2>
            </Modal.Title>
            <p>
              {modalDetails.position} ({modalDetails.type})
            </p>
          </div>
        </div>
      </Modal.Header>
      <Modal.Body>
        <h4>Overview:</h4>
        <p>{modalDetails.description}</p>
        <h4>Key Highlights:</h4>
        <ul>
          {modalDetails.highlights &&
            modalDetails.highlights.map((highlight, index) => {
              return <li key={index}>{highlight}</li>;
            })}
        </ul>
        {modalDetails.link && (
          <>
            <h4>Link</h4>
            <p>
              <a href={modalDetails.link} target="_blank" rel="noopener noreferrer">{modalDetails.title}</a>
            </p>
          </>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default WorkModal;
