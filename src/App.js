import React, { useState, useRef, useEffect } from "react";
import * as api from "./api/courseApi";

// 2 ways to declare React components:
// 1. Class
// 2. Function <- Prefer this. It's simpler. Easier to use

const newCourse = { id: null, title: "", author: "" };

function App() {
  const titleEl = useRef(null);

  // Declare state using the useState hook.
  const [courses, setCourses] = useState([]);

  // This will hold the course that we're adding in state
  const [course, setCourse] = useState(newCourse);

  // This runs after render
  useEffect(() => {
    api.getCourses().then(courses => setCourses(courses));
  }, []);

  async function deleteCourse(id) {
    await api.deleteCourse(id);
    const updatedCourses = courses.filter(course => course.id !== id);
    setCourses(updatedCourses); // Updating state will cause React to re-render
  }

  function addCourse(event) {
    event.preventDefault(); // stop browser from posting back
    // Use object spread to create a new array of courses
    // Add the new course entered on the form to the new courses array
    api.addCourse(course).then(savedCourse => {
      setCourses([...courses, savedCourse]);
      setCourse(newCourse);
      titleEl.current.focus(); // Focus the title element after the form is submitted.
    });
  }

  function onChange(event) {
    // Copy existing course from state and set title
    // Using computed property syntax to set a property using a variable
    setCourse({ ...course, [event.target.name]: event.target.value });
  }

  function renderCourses() {
    if (courses.length === 0) return <p> No courses.</p>;

    return (
      <>
        <form onSubmit={addCourse}>
          <div>
            <label htmlFor="title">Title</label>
            <br />
            <input
              type="text"
              id="title"
              name="title"
              ref={titleEl}
              value={course.title}
              onChange={onChange}
            />
          </div>

          <div>
            <label htmlFor="author">Author</label>
            <br />
            <input
              type="text"
              id="author"
              value={course.author}
              onChange={onChange}
              name="author"
            />
          </div>

          <input type="submit" value="Add Course" />
        </form>

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
      {renderCourses()}
    </>
  );
}

export default App;
