import React from "react";
import { connect } from "react-redux";
import { fetchTodos } from "../actions";
import { Link } from "react-router-dom";

class TodoList extends React.Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  renderList() {
    return this.props.todos.map((todo) => {
      return (
        <div key={todo.id} className="item">
          {this.renderAdminButtons(todo)}
          <i
            style={{ fontSize: "20px", paddingTop: "10px" }}
            className="hand point right icon"
          ></i>
          <div
            style={{ fontSize: "20px", paddingTop: "5px" }}
            className="content"
          >
            {todo.description}
          </div>
        </div>
      );
    });
  }

  renderAdminButtons = (todo) => {
    if (todo.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/edit/${todo.id}`} className="ui green button">
            Edit
          </Link>
          <Link to={`/delete/${todo.id}`} className="ui red button">
            Delete
          </Link>
        </div>
      );
    }
  };

  renderCreateButton() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "center" }}>
          <Link to="/create" className="ui black button">
            Create Todo
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <p style={{ textAlign: "center" }}>
          (You must sign in with Google to edit/delete Todos!)
        </p>
        <div>
          <div className="ui middle aligned divided list">
            {this.renderList()}
          </div>
          {this.renderCreateButton()}
        </div>
      </div>
    );
  }
}

// get list of todos as props inside component
const mapStateToProps = (state) => {
  return {
    // Object.values() turns all the values in object into an array
    todos: Object.values(state.todos),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchTodos })(TodoList);
