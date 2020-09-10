import React from 'react';
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import ContactState from "./context/contact/ContactState";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
// import AuthState from "./context/auth/AuthState";
// Unable to use <AuthState></AuthState> for now

const App = () => {
  return (
    <ContactState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/register" component={Register}/>
              <Route exact path="/login" component={Login}/>
            </Switch>
          </div>
        </div>
      </Router>
    </ContactState>
  );
};

export default App;
