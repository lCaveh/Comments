import React from "react";

class EditComment extends React.Component {
  handleFormSubmit=event=> {
    event.preventDefault();
    const comment ={
        content: event.target[0].value,
        userName: this.props.comment.userName,
        userId: this.props.comment.userId,
        userImage: this.props.comment.userImage,
        time: `Edited: ${new Date().toDateString()} - ${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`
    }
    this.props.editComment(comment,this.props.id)
    event.target[0].value='';
  }
  render() {
      console.log(this.props)
    return (
      <div>
        {this.props.user ? (
          <form onSubmit={this.handleFormSubmit}>
            <label>Content:</label>
            <textarea className="uk-textarea" required defaultValue={this.props.comment.content}/>
            <button className="uk-button uk-button-default" type="submit">
              Send
            </button>
          </form>
        ) : (
          <p>Please login again to be able edit this comment</p>
        )}
      </div>
    );
  }
}
export default EditComment;