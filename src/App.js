import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar'
import Profile from './Components/Profile/Profile'
import Resume from './Components/Resume/Resume'
import {
  Router,
  Switch,
  Route,
} from "react-router-dom";
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Alon', age: 28}
    ]
  }

  switchName = () => {
    this.setState({
      persons: [
        { name: 'Maor', age: 28 },
      { name: 'Alex', age: 29}
      ] })
  }
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" component={Profile} exact />
            <Route path="/resume" component={Resume} exact />
            <Profile />
            {/* <h1>Hello i am building my portofolio</h1>
            <button onClick={this.switchName}>Switch Name</button>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My hobies are: soccer</Person> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
