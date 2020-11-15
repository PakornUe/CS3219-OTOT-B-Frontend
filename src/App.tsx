import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage } from 'pages/home'
import { LoginPage } from 'pages/login'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route path="/Home">
          <HomePage />
        </Route>
        <Route path="/">
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  )
}