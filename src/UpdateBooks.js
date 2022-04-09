import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


class UpdateBooks extends React.Componenet {
  handleSubmit = (event) => {
    event.preventDefault();
    const updateBook = {
      title: this.props.book?.title,
      url: this.props.book?.url,
      description: this.pops.book?.description
    };
    this.props.handleUpdateBook(updateBook);
    this.props.onHide();
  };

  handleTitleChange = event => this.setState({ title: event.target.value });
  handleUrlChange = event => this.setState({ url: event.target.value });
  handleDescriptionChange = event => this.setState({ description: event.target.value });

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
                <Form.Control 
                type="title" 
                placeholder="Book name" 
                value={this.state.title} 
                onChange={this.handleTitleChange} />
              </Form.Group>
              <Form.Group controlId="formImage">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter URL"
                  onChange={this.handleUrlChange}>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="description"
                  placeholder="Enter a description of your book "
                  onChange={this.handleDescriptionChange}/>
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
    )
  }
}


export default UpdateBooks;