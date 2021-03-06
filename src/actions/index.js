import todos from "../apis/todos";
import history from "../history";

// action creators
export const signIn = (userId) => {
  return {
    type: "SIGN_IN",
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: "SIGN_OUT",
  };
};

export const createTodoItem = (formValues) => {
  return async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await todos.post("/todos", { ...formValues, userId });
    dispatch({ type: "CREATE_TODO", payload: response.data });
    // taking user back to todoList using programmatic navigation
    history.push("/");
  };
};

export const fetchTodos = () => {
  return async (dispatch) => {
    const response = await todos.get("/todos");
    dispatch({ type: "FETCH_TODOS", payload: response.data });
  };
};

export const fetchTodo = (id) => {
  return async (dispatch) => {
    const response = await todos.get(`/todos/${id}`);
    dispatch({ type: "FETCH_TODO", payload: response.data });
  };
};

export const editTodoItem = (id, formValues) => {
  return async (dispatch) => {
    const response = await todos.patch(`/todos/${id}`, formValues);
    dispatch({ type: "EDIT_TODO", payload: response.data });
    // taking user back to todoList using programmatic navigation
    history.push("/");
  };
};

export const deleteTodoItem = (id) => async (dispatch) => {
  await todos.delete(`/todos/${id}`);
  dispatch({ type: "DELETE_TODO", payload: id });
  // taking user back to todoList using programmatic navigation
  history.push("/");
};
