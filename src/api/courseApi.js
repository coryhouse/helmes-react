export function getCourses() {
  return fetch("http://localhost:3001/courses")
    .then(response => {
      if (response.ok) return response.json(); // return the response as json
      throw new Error("Bad network response");
    })
    .catch(error => {
      console.error(error);
      throw error;
    });
}

export function addCourse(course) {
  return fetch("http://localhost:3001/courses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(course)
  })
    .then(response => {
      if (response.ok) return response.json(); // return the response as json
      throw new Error("Bad network response");
    })
    .catch(error => {
      console.error(error);
      throw error;
    });
}
