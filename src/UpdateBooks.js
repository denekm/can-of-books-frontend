import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class UpdateBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: this.props.book?._id,
      url: this.props.book?.url,
      description: this.props.book?.description,
      title: this.props.book?.title,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const updateBook = {
      _id: this.state._id,
      title: this.state.title,
      url: this.state.url,
      description: this.state.description,
    };

    this.props.handleUpdateBook(updateBook);
    this.props.onHide();
  };

  handleTitleChange = (event) => this.setState({ title: event.target.value });
  handleUrlChange = (event) => this.setState({ url: event.target.value });
  handleDescriptionChange = (event) =>
    this.setState({ description: event.target.value });

  render() {
    return (
      <Modal className="modalBackground" show={this.props.show}>
        {this.props.book ? (
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Update book</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formTitle">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="title"
                    placeholder="Book name"
                    value={this.state.title}
                    onChange={this.handleTitleChange}
                  />
                </Form.Group>
                <Form.Group controlId="formImage">
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter URL"
                    value={this.state.url}
                    onChange={this.handleUrlChange}
                  ></Form.Control>
                </Form.Group>
                <Form.Group controlId="formDescription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="description"
                    placeholder="Enter a description of your book "
                    value={this.state.description}
                    onChange={this.handleDescriptionChange}
                  />
                </Form.Group>
                <Button id="button" type="submit">
                  Save
                </Button>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button id="button" onClick={() => this.props.onHide()}>
                Close
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        ) : (
          ''
        )}
      </Modal>
    );
  }
}

export default UpdateBooks;
