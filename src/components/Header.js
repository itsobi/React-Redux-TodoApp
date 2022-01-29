import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <div className="ui clearing segment">
      <h3 style={{ paddingTop: "10px" }} className="ui left floated header">
        <Link to="/" className="item">
          Obi's Todo App
        </Link>
      </h3>
      <h3 className="ui right floated header">
        <GoogleAuth />
      </h3>
    </div>
  );
};

export default Header;
