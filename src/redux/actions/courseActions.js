import * as api from "../../api/courseApi";

// Synchronous Action creator (a func that returns an object)
export function loadCoursesSuccess(courses) {
  return { type: "LOAD_COURSES_SUCCESS", courses: courses };
}

// Async action creator using Redux thunk
export function loadCourses() {
  return function(dispatch) {
    return api
      .getCourses()
      .then(courses => dispatch(loadCoursesSuccess(courses)));
  };
}
