import React, { useState } from "react";

// 2 ways to declare React components:
// 1. Class
// 2. Function <- Prefer this. It's simpler. Easier to use

function App() {
  // Declare state using the useState hook.
  const [courses, setCourses] = useState([
    { id: 1, title: "JS Fundamentals", author: "Cory House" },
    { id: 2, title: "Advanced React", author: "Cory House" }
  ]);

  function deleteCourse(id) {
    const updatedCourses = courses.filter(course => course.id !== id);
    setCourses(updatedCourses); // Updating state will cause React to re-render
  }

  function renderCourses() {
    if (courses.length === 0) return <p> No courses.</p>;

    return (
      <ul>
        {courses.map(course => (
          <li>
            <button onClick={() => deleteCourse(course.id)}>Delete</button>{" "}
            {course.title}
          </li>
        ))}
      </ul>
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
