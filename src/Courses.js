import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as api from "./api/courseApi";

// 2 ways to declare React components:
// 1. Class
// 2. Function <- Prefer this. It's simpler. Easier to use

function Courses() {
  // Declare state using the useState hook.
  const [courses, setCourses] = useState([]);

  // This runs after render
  useEffect(() => {
    api.getCourses().then(courses => setCourses(courses));
  }, []);

  async function deleteCourse(id) {
    await api.deleteCourse(id);
    const updatedCourses = courses.filter(course => course.id !== id);
    setCourses(updatedCourses); // Updating state will cause React to re-render
  }

  function renderCourses() {
    if (courses.length === 0) return <p> No courses.</p>;

    return (
      <>
        {/* Exercise: Display delete button, title, and author in a table. */}
        <table>
          <thead>
            <tr>
              <th />
              <th>Title</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
            {courses.map(course => (
              <tr key={course.id}>
                <td>
                  <button onClick={() => deleteCourse(course.id)}>
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

export default Courses;
