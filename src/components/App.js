import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import CreateTodo from "./CreateTodo";
import EditTodo from "./EditTodo";
import Header from "./Header";
import TodoList from "./TodoList";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={TodoList} />
        <Route path="/create" exact component={CreateTodo} />
        <Route path="/edit" exact component={EditTodo} />
      </BrowserRouter>
    </div>
  );
};

export default App;
