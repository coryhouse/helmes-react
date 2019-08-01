// Pure function
// 1. No global dependencies
// 2. Relies upon the arguments passed
// 3. Doesn't mutate the arguments passed in
// 4. Returns a value
// 5. Can run multiple times and it will always return the same result

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case "LOAD_COURSES_SUCCESS":
      // The data I return here becomes the new state
      return action.courses;
    default:
      // If an action is passed in that this reducer doesn't care about
      // then do nothing.
      return state;
  }
}
