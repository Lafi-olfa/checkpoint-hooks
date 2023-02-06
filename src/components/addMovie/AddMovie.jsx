import React from "react";
import { useState } from "react";
import {  Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const AddMovie = ({ add }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // state pour les inputs
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [date, setdate] = useState("");
  const [rating, setRating] = useState("");
  // function handelsubmit et change
  // handelchange pour detecter les modification sur le champ

  const handelSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      id: Math.random(),
      titre: title,
      url: url,
      rate: rating,
      date: date,
    };
if(title && url && rating && date )
   
   {
    add(newMovie);
    handleClose();
   }
   
    setTitle("");
    setRating("");
    setUrl("");
    setdate("");
  };
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Titre :</Form.Label>
              <Form.Control
                type="text"
                placeholder="Title"
                autoFocus
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              {/*  */}
              <Form.Label>Url :</Form.Label>
              <Form.Control
                type="text"
                value={url}
                placeholder="Post Url"
                autoFocus
                onChange={(e) => {
                  setUrl(e.target.value);
                }}
              />
              {/*  */}
              <Form.Label>Rating :</Form.Label>
              <Form.Control
                type="text"
                placeholder="rating"
                value={rating}
                autoFocus
                onChange={(e) => {
                  setRating(e.target.value);
                }}
              />{" "}
              <Form.Label>Date:</Form.Label>
              <Form.Control
                type="date"
                autoFocus
                value={date}
                onChange={(e) => {
                  setdate(e.target.value);
                }}
              />
            </Form.Group>
            <Button id="btnsave" variant="primary" onClick={handelSubmit}>
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddMovie;
