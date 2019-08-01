import { combineReducers } from "redux";
import courses from "./courseReducer";

const rootReducer = combineReducers({
  // This property name determines how we access that reducer's data in our components.
  courses
});

export default rootReducer;
