import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
  componentDidMount() {
    // Load up JS library
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "795031073794-hdpv36f3bkr889qk2ni5gtdjtu2blfd2.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          // assign auth instances to this.auth
          this.auth = window.gapi.auth2.getAuthInstance();
          // update auth state in redux store
          this.onAuthChange(this.auth.isSignedIn.get());
          // wait for authentication to change
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  // Listen to whether the user is signed in or not
  onAuthChange = (isSignedIn) => {
    // if isSignedIn === true, call action creator
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  // Render sign in button
  renderSignInBtn = () => {
    if (this.props.isSignedIn === null) {
      return null;
    }
    if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon"></i>
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon"></i>
          Sign In
        </button>
      );
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  render() {
    return <div>{this.renderSignInBtn()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
