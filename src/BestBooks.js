import React from 'react';
import axios from 'axios';
import { Carousel, Container } from 'react-bootstrap';
import './Bestbooks.css';
import backgroundImg from './library.jpg';
import Button from 'react-bootstrap/Button';

class BestBooks extends React.Component {

  delete = () => {
    this.props.handleDeleteBook(this.props.books._id)

  }


  render() {
    /* TODO: render user's books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        {/* JJ and Erich helped! */}
        {this.props.books.length ? (
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
                  </Carousel.Caption>
                  <Button onClick={this.delete} >Delete this Book!</Button>
                </Carousel.Item>
              ))}
            </Carousel>
      
          </Container>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    );
  }
}

export default BestBooks;
