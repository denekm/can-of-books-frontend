import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './Bestbooks.css';
import backgroundImg from './library.jpg';
import Button from 'react-bootstrap/Button';
import UpdateBooks from './UpdateBooks';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showUpdateBook: false,
      currentBook: null,
    };
  }

  showUpdateBookModal = (book) => {
    this.setState({ currentBook: book });
    this.setState({ showUpdateBook: true });
  };

  onHideUpdateBook = () => {
    this.setState({ showUpdateBook: false });
  };

  render() {
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        {/* JJ and Erich helped! */}
        {this.props.books.length ? (
          <>
            {this.state.currentBook && (
              <UpdateBooks
                book={this.state.currentBook}
                show={this.state.showUpdateBook}
                handleUpdateBook={this.props.handleUpdateBook}
                onHide={this.onHideUpdateBook}
              />
            )}
            <Container
              className="container"
              style={{
                backgroundImage: `url(${backgroundImg})`,
                backgroundSize: 'cover',
              }}
            >
              <Carousel className="carousel">
                {this.props.books.map((book) => (
                  <Carousel.Item key={book._id}>
                    <h3 id="bookTitle">{book.title}</h3>
                    <img
                      id="book-image"
                      className="d-block"
                      src={book.url}
                      alt="Second slide"
                    />
                    <Carousel.Caption className="caption">
                      <p>{book.description}</p>
                      <Button
                        id="button"
                        onClick={() => this.props.handleDeleteBook(book._id,book.email)}
                      >
                        Delete this Book!
                      </Button>
                      <Button
                        id="button"
                        onClick={() => this.showUpdateBookModal(book)}
                      >
                        Update a Book!
                      </Button>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
              </Carousel>
              <Button id="button" onClick={() => this.props.showAddModal()}>
                Add a New Book!
              </Button>
            </Container>
          </>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    );
  }
}

export default BestBooks;
