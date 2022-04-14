import React from 'react';
import Footer from './Footer';
import BestBooks from './BestBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Bestbooks.css';
import axios from 'axios';
import AddBook from './AddBook';
import Header from './Header';
import LoginButton from './Login';
import LogoutButton from './Logout';
import About from './About';
import { withAuth0 } from '@auth0/auth0-react';
import Welcome from './Welcome';
import Profile from './Profile';

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
    if (this.props.auth0.isAuthenticated) {
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
        body: newBookInfo,
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
        url: `/books${id}`,
        params: { email: email },
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
        url: `/books${bookToBeUpdated._id}`,
        params: { email: bookToBeUpdated.email },
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

  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
                {!this.props.auth0.isAuthenticated ? (
                  <>
                    <Welcome />
                    <LoginButton />
                  </>
                ) : 
                (<>
              <Profile />
              <LogoutButton />
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
              </>
                )}
            </Route>
            <Route exact path="/about"></Route>
          </Switch>
          <About> </About>
          <Footer />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
