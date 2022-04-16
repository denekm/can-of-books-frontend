import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './Bestbooks.css';
import Button from 'react-bootstrap/Button';
import UpdateBooks from './UpdateBooks';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import AddBook from './AddBook';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showUpdateBook: false,
      showAddBook: false,
      currentBook: null,
      books: [],
    };
  }

  componentDidMount() {
    this.handleGetBook();
  }

  handleGetBook = async () => {
    if (this.props.auth0.isAuthenticated) {
      console.log('making an API call');
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;

      // leave this console here in order to grab your token for backend testing in Thunder Client
      console.log('token: ', jwt);

      const config = {
        headers: { Authorization: `Bearer ${jwt}` },
        method: 'get',
        baseURL: process.env.REACT_APP_SERVER,
        url: '/books',
      };

      const booksResponse = await axios(config);

      console.log('Books from DB: ', booksResponse.data);

      this.setState({ books: booksResponse.data });
    }
  };

  handleCreateBook = async (newBookInfo) => {
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;

      // leave this console here in order to grab your token for backend testing in Thunder Client
      console.log('token: ', jwt);

      const config = {
        headers: { Authorization: `Bearer ${jwt}` },
        method: 'post',
        baseURL: process.env.REACT_APP_SERVER,
        url: '/books',
        data: newBookInfo,
      };

      const booksResponse = await axios(config);

      console.log('Books from DB: ', booksResponse.data);

      this.handleGetBook();
    }
  };

  handleDeleteBook = async (id, email) => {
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;

      // leave this console here in order to grab your token for backend testing in Thunder Client
      console.log('token: ', jwt);

      const config = {
        headers: { Authorization: `Bearer ${jwt}` },
        method: 'delete',
        baseURL: process.env.REACT_APP_SERVER,
        url: `/books/${id}`,
      };

      await axios(config);

      this.handleGetBook();
    }
  };

  handleUpdateBook = async (bookToBeUpdated) => {
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;

      // leave this console here in order to grab your token for backend testing in Thunder Client
      console.log('token: ', jwt);

      const config = {
        headers: { Authorization: `Bearer ${jwt}` },
        method: 'put',
        baseURL: process.env.REACT_APP_SERVER,
        url: `/books/${bookToBeUpdated._id}`,
        data: bookToBeUpdated,
      };

      await axios(config);

      this.handleGetBook();
    }
  };
  showAddBookModal = () => {
    this.setState({ showAddBook: true });
  };

  onHideAddBook = () => {
    this.setState({ showAddBook: false });
  };

  showUpdateBookModal = (book) => {
    this.setState({ currentBook: book });
    this.setState({ showUpdateBook: true });
  };

  onHideUpdateBook = () => {
    this.setState({ showUpdateBook: false });
  };

  render() {
    return (
      <div id="bestbooksdiv">
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        {/* JJ and Erich helped! */}
        {this.state.books.length ? (
          <>
            {this.state.currentBook && (
              <UpdateBooks
                book={this.state.currentBook}
                show={this.state.showUpdateBook}
                handleUpdateBook={this.handleUpdateBook}
                onHide={this.onHideUpdateBook}
              />
            )}
            <Container
              className="container"
              // style={{
              //   backgroundImage: `url(${backgroundImg})`,
              //   backgroundSize: 'cover',
              // }}
            >
              <Carousel className="carousel">
                {this.state.books.map((book) => (
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
                        onClick={() =>
                          this.handleDeleteBook(book._id, book.email)
                        }
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
            </Container>
          </>
        ) : (
          <h3>No Books Found :(</h3>
        )}
        <Button id="Add-button" onClick={() => this.showAddBookModal()}>
          Add a New Book!
        </Button>
        <AddBook
          show={this.state.showAddBook}
          handleCreateBook={this.handleCreateBook}
          onHide={this.onHideAddBook}
        />
      </div>
    );
  }
}

export default withAuth0(BestBooks);
