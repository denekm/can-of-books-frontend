import React from 'react';
import Footer from './Footer';
import BestBooks from './BestBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Bestbooks.css';
import Header from './Header';
import LoginButton from './Login';
import LogoutButton from './Logout';
import { withAuth0 } from '@auth0/auth0-react';
import Welcome from './Welcome';
import Profile from './Profile';
import About from './About';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showAddBook: false,
    };
  }

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
              ) : (
                <>
                  <Profile />
                  <LogoutButton />
                  <BestBooks />
                </>
              )}
            </Route>
            <Route exact path="/About">
              <About />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
