import React from 'react';
import Footer from './Footer';
import BestBooks from './BestBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Bestbooks.css';
import axios from 'axios';
import AddBook from './AddBook';
import Header from './Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showAddBook: false,
    };
  }

  componentDidMount() {
    this.handleGetBook();
  }

  handleGetBook = async () => {
    let url = `${process.env.REACT_APP_SERVER}`;
    const response = await axios.get(url);
    this.setState({ books: response.data });
  };

  handleCreateBook = async (newBookInfo) => {
    let url = `${process.env.REACT_APP_SERVER}`;

    await axios.post(url, newBookInfo);

    this.handleGetBook();
  };

  handleDeleteBook = async (id) => {
    let url = `${process.env.REACT_APP_SERVER}/${id}`;
    try {
      await axios.delete(url);
      this.handleGetBook();
    } catch (error) {
      console.error(error);
    }
  };
  handleUpdateBook = async (bookToBeUpdated) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/${bookToBeUpdated._id}`;
      await axios.put(url, bookToBeUpdated);

      this.handleGetBook();
    } catch (error) {
      console.error(error);
    }
  };

  showAddBookModal = () => {
    this.setState({ showAddBook: true });
  };

  onHideAddBook = () => {
    this.setState({ showAddBook: false });
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
                showAddModal={this.showAddBookModal}
                handleUpdateBook={this.handleUpdateBook}
              />
              <AddBook
                show={this.state.showAddBook}
                handleCreateBook={this.handleCreateBook}
                onHide={this.onHideAddBook}
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
