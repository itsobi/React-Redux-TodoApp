import React from "react";
import { connect } from "react-redux";
import { fetchTodo, editTodo } from "../actions";
import TodoForm from "./TodoForm";

class EditTodo extends React.Component {
  componentDidMount() {
    this.props.fetchTodo(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editTodo(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.todo) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <TodoForm
          onSubmit={this.onSubmit}
          initialValues={{ description: this.props.todo.description }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // assigning particular id of todo from redux store to mapStateToProps function
  return { todo: state.todos[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchTodo, editTodo })(EditTodo);
