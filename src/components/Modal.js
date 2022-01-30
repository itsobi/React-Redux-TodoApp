import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div
      //  div onClick event handler w props.onDismiss to take user back to root route
      onClick={props.onDismiss}
      className="ui dimmer modals visible active"
    >
      <div
        // e.stopPropagation() to prevent event bubbling
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
