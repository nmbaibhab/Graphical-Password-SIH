import React from "react";
// import { Container } from "react-bootstrap";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <Switch>
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Redirect from="*" to="/login" />
    </Switch>
  );
}

export default App;
