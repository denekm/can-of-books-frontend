import React from 'react';
import Footer from './Footer';
import BestBooks from './BestBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Bestbooks.css';
import axios from 'axios';
import AddBook from "./AddBook";

//hi
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  /* TODO: Make a GET request to your API to fetch books for the logged in user  */
  async componentDidMount() {
    this.handleGetBook();
  }

  handleGetBook = async () => {
    let url = `https://team-toxic-can-of-books.herokuapp.com/books`;
    const response = await axios.get(url);
    console.log(response.data);
    this.setState({ books: response.data });
  }

  handleCreateBook = async (newBookInfo) => {
    let url = `https://team-toxic-can-of-books.herokuapp.com/books`;
    // we are sending the new cat data in the response.body
    await axios.post(url, newBookInfo);


    // alternatively...
    this.handleGetBook();
  }

  handleDeleteBook = async (id) => {
    let url = `https://team-toxic-can-of-books.herokuapp.com/books/${id}`;
    try {
      const response = await axios.delete(url);
      console.log(response.data);

      // alternatively...
      this.handleGetBook();
    } catch (error) {
      console.error(error);
    }
  }



  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/">
              {/* PLACEHOLDER: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
              <BestBooks books={this.state.books} handleDeleteBook={this.handleDeleteBook} />
              <AddBook handleCreatBook={this.handleCreateBook} />
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
