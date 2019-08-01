import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as api from "./api/courseApi";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as courseActions from "./redux/actions/courseActions";

// 2 ways to declare React components:
// 1. Class
// 2. Function <- Prefer this. It's simpler. Easier to use

function Courses(props) {
  // This runs after render
  useEffect(() => {
    props.actions.loadCourses();
  }, [props.actions]);

  async function deleteCourse(id) {
    // await api.deleteCourse(id);
    // const updatedCourses = courses.filter(course => course.id !== id);
    // setCourses(updatedCourses); // Updating state will cause React to re-render
  }

  function renderCourses() {
    if (props.courses.length === 0) return <p> No courses.</p>;

    return (
      <>
        {/* Exercise: Display delete button, title, and author in a table. */}
        <table className="table">
          <thead>
            <tr>
              <th />
              <th>Title</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
            {props.courses.map(course => (
              <tr key={course.id}>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteCourse(course.id)}
                  >
                    Delete
                  </button>{" "}
                </td>
                <td>{course.title}</td>
                <td>{course.author}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }

  return (
    <>
      <h1>Courses</h1>
      <Link to="/course">Add Course</Link>
      {renderCourses()}
    </>
  );
}

// Get the courses data from the redux store
function mapStateToProps(state) {
  return {
    courses: state.courses
  };
}

// Expose all the actions in courseActions to the component above on props.
// And bind those actions to dispatch for me.
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Courses);
