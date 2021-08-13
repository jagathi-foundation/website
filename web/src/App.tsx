import React from 'react';
//Imports for the Router.
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom"
//Import for the page components.
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import VolunteerRedirect from './pages/VolunteerRedirect';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/volunteer" component={VolunteerRedirect} />
        <Redirect to="/"/>
      </Switch>
    </Router>
  );
}

export default App;
