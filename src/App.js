import React, { Suspense } from "react";
import Home from "./Home";
// import Courses from "./Courses";
import ManageCourse from "./ManageCourse";
import PageNotFound from "./PageNotFound";
import { Route, Switch } from "react-router-dom";
import UserContext from "./UserContext";
import Nav from "./Nav";

// Lazy load the courses page. Place the courses page in a separate javascript bundle.
// Don't load this component until we ask for it.
const Courses = React.lazy(() => import("./Courses"));

class App extends React.Component {
  state = {
    user: {
      id: 1,
      name: "Cory",
      role: "admin"
    }
  };

  // Use arrow so that the this keyword inherits the this context of the enclosing scope.
  // Use arrow so that the this keyword works right. (like Java, C#, PHP)
  logout = () => {
    this.setState({ user: null });
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          user: this.state.user,
          logout: this.logout
        }}
      >
        <Suspense fallback={<p>Loading component...</p>}>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/courses" component={Courses} />
            <Route path="/course" component={ManageCourse} />
            <Route component={PageNotFound} />
          </Switch>
        </Suspense>
      </UserContext.Provider>
    );
  }
}

export default App;
