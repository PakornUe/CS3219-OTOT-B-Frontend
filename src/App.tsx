import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {MainPage} from 'pages/main'
import {LoginPage} from 'pages/login'

export default function App(): JSX.Element {
    return (
        <Router>
        <Switch>
          <Route path="/main">
            <MainPage />
          </Route>
          <Route path="/">
            <LoginPage />
          </Route>
        </Switch>
      </Router>
    )
}