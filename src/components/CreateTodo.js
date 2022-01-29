import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createTodoItem } from "../actions";

class CreateTodo extends React.Component {
  renderError = ({ touched, error }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };
  renderInput = (formProps) => {
    //adding all key-value pairs from input object to the input element
    return (
      <div className="field">
        <input
          {...formProps.input}
          type="text"
          autoComplete="off"
          placeholder="enter todo..."
        />
        {/* displaying meta.error message on screen */}
        <div>{this.renderError(formProps.meta)}</div>
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.createTodoItem(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="description" component={this.renderInput} />
        <button className="ui black button">Submit</button>
      </form>
    );
  }
}

//Validating the input field
const validate = (formValues) => {
  const errors = {};
  if (!formValues.description) {
    errors.description = "You must enter a todo...";
  }
  return errors;
};

const formWrapped = reduxForm({
  form: "createTodo",
  validate,
})(CreateTodo);

export default connect(null, { createTodoItem })(formWrapped);
