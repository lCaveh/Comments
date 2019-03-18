import React from "react";

class Comment extends React.Component {
  render() {
    return (
      <div>
        <div className="comment-container">
          <img
            className="comment-image"
            src={this.props.comment.userImage}
            width="20"
            height="20"
            className="uk-border-circle"
          />
          <span className="comment-content">
            {this.props.comment.userName} - {this.props.comment.content}
          </span>
          {this.props.user ? (
            <span>
              {this.props.user.uid === this.props.comment.userId ? (
                <span>
                  <span className="comment-delete">🗑️</span>
                  <span className="comment-edit">🖊️</span>
                </span>
              ) : (
                <span />
              )}
            </span>
          ) : (
            <span />
          )}
        </div>
        <p className="comment-time">{this.props.comment.time}</p>
      </div>
    );
  }
}
export default Comment;
