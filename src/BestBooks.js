import React from 'react';
import axios from 'axios';
import { Carousel, Container } from 'react-bootstrap';
import './Bestbooks.css';
import backgroundImg from './library.jpg';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  /* TODO: Make a GET request to your API to fetch books for the logged in user  */
  async componentDidMount() {
    let url = `https://team-toxic-can-of-books.herokuapp.com/books`;
    const response = await axios.get(url);
    console.log(response.data);
    this.setState({ books: response.data });
  }
  render() {
    /* TODO: render user's books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <Container
            className="container"
            style={{
              backgroundImage: `url(${backgroundImg})`,
              backgroundSize: 'cover',
            }}
          >
            <Carousel className="carousel">
              {this.state.books.map((books) => (
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
