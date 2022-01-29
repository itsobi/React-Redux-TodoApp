import React from "react";
import { connect } from "react-redux";
import { createTodoItem } from "../actions";
import TodoForm from "./TodoForm";

class CreateTodo extends React.Component {
  onSubmit = (formValues) => {
    this.props.createTodoItem(formValues);
  };

  render() {
    return (
      <div>
        <TodoForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createTodoItem })(CreateTodo);
