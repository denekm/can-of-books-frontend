import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './Bestbooks.css';
import backgroundImg from './library.jpg';
import Button from 'react-bootstrap/Button';
import UpdateBooksForm from './UpdateBooks';

class BestBooks extends React.Component {
  render() {
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        {/* JJ and Erich helped! */}
        {this.props.books.length ? (
          <>
            <Container
              className="container"
              style={{
                backgroundImage: `url(${backgroundImg})`,
                backgroundSize: 'cover',
              }}
            >
              <Carousel className="carousel">
                {this.props.books.map((books) => (
                  <Carousel.Item key={books._id}>
                    <h3 id="bookTitle">{books.title}</h3>
                    <img
                      id="book-image"
                      className="d-block"
                      src={books.url}
                      alt="Second slide"
                    />
                    <Carousel.Caption className="caption">
                      <p>{books.description}</p>
                      <Button
                        id="button"
                        onClick={() => this.props.handleDeleteBook(books._id)}
                      >
                        Delete this Book!
                      </Button>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
              
              </Carousel>
              <Button id="button" onClick={() => this.props.showModal()}>
                Add a New Book!
              </Button>
              <Button id="button" onClick={() => this.props.showModal()}>
                Update a Book!
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
