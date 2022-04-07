import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class CreateBook extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault();
    const newBook = {
      title: event.target.formTitle.value,
      description: event.target.formDescription.value
    };
    this.props.handleCreateBook(newBook);
  }

  render() {
    return (
<Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Add a new book</Modal.Title>
  </Modal.Header>

  <Modal.Body>
  <Form onSubmit={this.handleSubmit} >
        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="title" placeholder="Enter the name of your book" />
        </Form.Group>
        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control type="description" placeholder="Enter a description of your book " />
        </Form.Group>
       
      </Form>
  </Modal.Body>

  <Modal.Footer>
  <Button type="submit">Add Book</Button>
  </Modal.Footer>
</Modal.Dialog>


    )
  }
}

export default CreateBook;