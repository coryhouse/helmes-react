import React from "react";
import Home from "./Home";
import Courses from "./Courses";
import PageNotFound from "./PageNotFound";
import { Route, Switch, NavLink } from "react-router-dom";

class App extends React.Component {
  render() {
    const activeStyle = { color: "orange" };
    return (
      <>
        <nav>
          <NavLink activeStyle={activeStyle} to="/" exact>
            Home
          </NavLink>{" "}
          |{" "}
          <NavLink activeStyle={activeStyle} to="/courses">
            Courses
          </NavLink>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/courses" component={Courses} />
          <Route component={PageNotFound} />
        </Switch>
      </>
    );
  }
}

export default App;
