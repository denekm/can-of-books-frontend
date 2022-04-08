import React from 'react';
import Footer from './Footer';
import BestBooks from './BestBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Bestbooks.css';
import axios from 'axios';
import AddBook from './AddBook';
import Header from './Header';

//hi
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      show: false,
    };
  }

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
      console.log(response.data.message);

      this.handleGetBook();
    } catch (error) {
      console.error(error);
    }
  };

  showModal = () => {
    this.setState({ show: true });
  };

  onHide = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <BestBooks
                books={this.state.books}
                handleDeleteBook={this.handleDeleteBook}
                showModal={this.showModal}
              />
              <AddBook
                show={this.state.show}
                handleCreateBook={this.handleCreateBook}
                onHide={this.onHide}
              />
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
