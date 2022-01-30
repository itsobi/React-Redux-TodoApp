import React from "react";
import { Router, Route } from "react-router-dom";
import CreateTodo from "./CreateTodo";
import EditTodo from "./EditTodo";
import DeleteTodo from "./DeleteTodo";
import Header from "./Header";
import TodoList from "./TodoList";
import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <Header />
        <Route path="/" exact component={TodoList} />
        <Route path="/create" exact component={CreateTodo} />
        <Route path="/edit/:id" exact component={EditTodo} />
        <Route path="/delete/:id" exact component={DeleteTodo} />
      </Router>
    </div>
  );
};

export default App;
