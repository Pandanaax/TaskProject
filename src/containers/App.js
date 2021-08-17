import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './Home'
import { Login } from './Login'
import 'bootstrap/dist/css/bootstrap.min.css'

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
    }
    this.handleSuccess = this.handleSuccess.bind(this);

  }
  handleSuccess = (data) => {
    this.props.history.push("/")
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/login-register">
            <Login onLoginSuccess={this.handleSuccess} />
            </Route>
        </Switch>
      </Router>
    )
  }
}