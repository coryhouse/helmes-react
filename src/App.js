import React from "react";
import Home from "./Home";
import Courses from "./Courses";
import PageNotFound from "./PageNotFound";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        Nav
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
