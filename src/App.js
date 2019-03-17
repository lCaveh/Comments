import React, { Component } from "react";
import { commentsRef, authRef, provider } from "./firebase";
import "../node_modules/uikit/dist/css/uikit.css";
import Navigation from "./components/Navigation";
import AllComments from "./components/AllComments";
import CreateComment from "./components/CreateComment";
import EditComment from "./components/EditComment";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      user: null
    };
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }
  signIn() {
    authRef.signInWithPopup(provider).then(result => {
      const user = result.user;
      this.setState({
        user
      });
    });
  }
  signOut() {
    authRef.signOut().then(() => {
      this.setState({
        user: null
      });
    });
  }



  render() {
    return (
      <div className="uk-container">
        <Navigation
          handleLogin={this.signIn}
          handleLogout={this.signOut}
          user={this.state.user}
        />
        <AllComments />
        <CreateComment />
        <EditComment />
      </div>
    );
  }
}

export default App;
