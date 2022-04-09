import React from 'react';
import Footer from './Footer';
import BestBooks from './BestBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Bestbooks.css';
import axios from 'axios';
import AddBook from './AddBook';
import Header from './Header';
import UpdateBooks from './UpdateBooks';


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
    let url = `${process.env.REACT_APP_SERVER}`;
    const response = await axios.get(url);
    console.log(response.data);
    this.setState({ books: response.data });
  };

  handleCreateBook = async (newBookInfo) => {
    let url = `${process.env.REACT_APP_SERVER}`;

    await axios.post(url, newBookInfo);

    this.handleGetBook();
  };

  handleDeleteBook = async (id) => {
    let url = `${process.env.REACT_APP_SERVER}${id}`;
    try {
      const response = await axios.delete(url);
      console.log(response.data.message);

      this.handleGetBook();
    } catch (error) {
      console.error(error);
    }
  };
  handleUpdateBook = async (bookToBeUpdated) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}${bookToBeUpdated._id}`;
      axios.put(url, bookToBeUpdated);


      this.handleGetBook();
    } catch (error) {
      console.error(error);
    }
  }

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
                handleUpdateBook={this.handleUpdateBook}
              />
              <AddBook
                show={this.state.show}
                handleCreateBook={this.handleCreateBook}
                onHide={this.onHide}
              />
              <UpdateBooks
                show={this.state.show}
                handleUpdateBook={this.handleUpdateBook}
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
