import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { reducer as formReducer } from "redux-form";
import todosReducer from "./todoReducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  todos: todosReducer,
});
