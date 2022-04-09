import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class CreateBook extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const newBook = {
      title: event.target.formTitle.value,
      description: event.target.formDescription.value,
      url: event.target.formImage.value,
    };
    console.log(newBook);
    this.props.handleCreateBook(newBook);
    this.props.onHide();
  };

  render() {
    return (
      <Modal className="modalBackground" show={this.props.show}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Add a new book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control type="title" placeholder="Book name" />
              </Form.Group>
              <Form.Group controlId="formImage">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter URL"
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="description"
                  placeholder="Enter a description of your book "
                />
              </Form.Group>
              <Button id="button" type="submit">
                Add Book
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button id="button" onClick={() => this.props.onHide()}>
              Close
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    );
  }
}

export default CreateBook;
