import React from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
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
          this.state.books.map(books =>
            <Carousel>
              <Carousel.Item>
                <Carousel.Caption>

                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <h3>{books.title}</h3>
                <p>{books.description}</p>
                <img
                  id='book-image'
                  className="d-block" style={{ width: '10rem' }}
                  src={books.url}
                  alt="Second slide"
                />
              </Carousel.Item>

            </Carousel>
          )

        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}




export default BestBooks;
