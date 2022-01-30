import React from "react";
import { connect } from "react-redux";
import Modal from "./Modal";
import history from "../history";
import { fetchTodo, deleteTodoItem } from "../actions";
import { Link } from "react-router-dom";

class DeleteTodo extends React.Component {
  componentDidMount() {
    fetchTodo(this.props.match.params.id);
  }

  renderActions() {
    //assigning id variable because of how long it is to reference id
    const id = this.props.match.params.id;
    return (
      <div>
        <button
          onClick={() => this.props.deleteTodoItem(id)}
          className="ui red button"
        >
          Delete
        </button>
        <Link to="/" className="ui primary button">
          Cancel
        </Link>
      </div>
    );
  }

  renderContent() {
    if (!this.props.todo) {
      return "Are you sure you want to delete this todo?";
    }
    return `Are you sure you want to delete the todo: ${this.props.todo.description}`;
  }

  render() {
    return (
      <Modal
        title="Delete Todo"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { todo: state.todos[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchTodo, deleteTodoItem })(
  DeleteTodo
);
