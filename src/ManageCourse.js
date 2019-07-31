import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import * as api from "./api/courseApi";

const newCourse = { id: null, title: "", author: "" };

function ManageCourse() {
  // This will hold the course that we're adding in state
  const [course, setCourse] = useState(newCourse);

  const [saveCompleted, setSaveCompleted] = useState(false);

  function onChange(event) {
    // Copy existing course from state and set title
    // Using computed property syntax to set a property using a variable
    setCourse({ ...course, [event.target.name]: event.target.value });
  }

  function addCourse(event) {
    event.preventDefault(); // stop browser from posting back
    // Use object spread to create a new array of courses
    // Add the new course entered on the form to the new courses array
    api.addCourse(course).then(savedCourse => {
      // Redirect to courses page using React Router
      setSaveCompleted(true);
    });
  }

  return (
    <form onSubmit={addCourse}>
      <h1>Add Course</h1>
      {saveCompleted && <Redirect to="/courses" />}
      <div>
        <label htmlFor="title">Title</label>
        <br />
        <input
          type="text"
          id="title"
          name="title"
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
  );
}

export default ManageCourse;
