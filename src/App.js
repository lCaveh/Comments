import React from "react";
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
  componentWillMount() {
    this.fetchUser();
    this.fetchComments();
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

  fetchUser() {
    authRef.onAuthStateChanged(user => {
      console.log(user);
      this.setState({
        user
      });
    });
  }

  fetchComments() {
    commentsRef.on("value", snapshot => {
      const items = snapshot.val();
      const comments = [];
      for (let key in items) {
        comments.push(items[key]);
      }
      this.setState({
        comments
      });
    });
  }
  createComment(comment) {
    commentsRef.push(comment);
    // const comments=this.state.comments;
    // comments.push(comment)
    // this.setState({
    //   comments
    // })
  }
  render() {
    return (
      <div className="uk-container">
        <Navigation
          handleLogin={this.signIn}
          handleLogout={this.signOut}
          user={this.state.user}
        />
        <AllComments
          user={this.state.user}
          comments={this.state.comments}
          createComment={this.createComment}
        />
        <EditComment />
      </div>
    );
  }
}

export default App;
