import React, { useState } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import $ from "jquery";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const Contact = (props) => {
  const [formResponse, setFormResponse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const fields = $("#contact_form").serializeArray();

    const formData = {
      "form-name": form.getAttribute("name"),
    };

    for (const f of fields) {
      formData[f.name] = f.value;
    }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(formData),
    })
      .then(() => {
        setFormResponse("Thanks! I'll get back to you very soon!");
      })
      .catch((error) => {
        setFormResponse(error);
      });
  };

  return (
    <Container className="section-container">
      <h2 className="section-title">Get in touch!</h2>
      <hr />
      <Row className="justify-content-center contact-container">
        <Col xs={12} md={4}>
          <div className="contact-subtext-container">
            <p>Have an exciting project where you need some help?</p>
            <p>I am open to contract work and would love to assist you!</p>
          </div>
        </Col>
        <Col xs={12} md={8}>
          <div className="contact-form">
            <form
              id="contact_form"
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="form-group">
                <label>
                  <b>Name *</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  placeholder="Your Name..."
                  required
                />
              </div>
              <div className="form-group">
                <label>
                  <b>Email address *</b>
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email Address..."
                  required
                />
              </div>
              <div className="form-group">
                <label>
                  <b>Message *</b>
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Your Message..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-outline-dark">
                <b>Submit</b>
              </button>
            </form>
            <p>{formResponse}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
