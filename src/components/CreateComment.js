import React from "react";

class CreateComment extends React.Component {
  handleFormSubmit=event=> {
    event.preventDefault();
    const comment ={
        content: event.target[0].value,
        userName: this.props.user.displayName.split(' ')[0],
        userId: this.props.user.uid,
        userImage: this.props.user.photoURL,
        time: `Posted: ${new Date().toDateString()} - ${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`
    }
    this.props.createComment(comment)
    event.target[0].value='';
  }
  render() {
    return (
      <div>
        {this.props.user ? (
          <form onSubmit={this.handleFormSubmit}>
            <label>Content:</label>
            <textarea className="uk-textarea" required />
            <br />
            <br />
            <button className="uk-button uk-button-default" type="submit">
              Send
            </button>
            <br />
            <br />
            <br />
          </form>
        ) : (
          <p>Please login to be able write a comment</p>
        )}
      </div>
    );
  }
}
export default CreateComment;
