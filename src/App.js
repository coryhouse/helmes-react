import React from "react";
import Home from "./Home";
import Courses from "./Courses";
import { Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        Nav
        <Route path="/" component={Home} />
        <Route path="/courses" component={Courses} />
      </>
    );
  }
}

export default App;
