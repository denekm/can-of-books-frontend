import React from 'react';
import Footer from './Footer';
import BestBooks from './BestBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Bestbooks.css';
import axios from 'axios';
import AddBook from './AddBook';

//hi
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  /* TODO: Make a GET request to your API to fetch books for the logged in user  */
  componentDidMount() {
    this.handleGetBook();
  }

  handleGetBook = async () => {
    let url = `https://team-toxic-can-of-books.herokuapp.com/books`;
    const response = await axios.get(url);
    console.log(response.data);
    this.setState({ books: response.data });
  };

  handleCreateBook = async (newBookInfo) => {
    let url = `https://team-toxic-can-of-books.herokuapp.com/books`;

    await axios.post(url, newBookInfo);

    this.handleGetBook();
  };

  handleDeleteBook = async (id) => {
    let url = `https://team-toxic-can-of-books.herokuapp.com/books/${id}`;
    try {
      const response = await axios.delete(url);
      console.log(response.data);

      this.handleGetBook();
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/">
              {/* PLACEHOLDER: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
              <BestBooks
                books={this.state.books}
                handleDeleteBook={this.handleDeleteBook}
              />
              <AddBook handleCreateBook={this.handleCreateBook} />
            </Route>
            <Route exact path="/about"></Route>
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
