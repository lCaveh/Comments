import React, { Component } from "react";
import { commentsRef, authRef, provider } from "./firebase";
import Navigation from "./components/Navigation"
import AllComments from "./components/AllComments"
import CreateComment from "./components/CreateComment"
import EditComment from "./components/EditComment"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }
  signIn = () => dispatch => {
    authRef
      .signInWithPopup(provider)
      .then(result => {})
      .catch(error => {
        console.log(error);
      });
  };
  
  signOut = () => dispatch => {
    authRef
      .signOut()
      .then(() => {
        console.log("done")
        // Sign-out successful.
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Navigation />
        <AllComments />
        <CreateComment />
        <EditComment />
      </div>
    );
  }
}

export default App;
