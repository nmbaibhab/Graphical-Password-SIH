import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";

function App() {
  return (
    <Switch>
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/profile" component={Profile} />
      <Redirect from="*" to="/login" />
    </Switch>
  );
}

export default App;
