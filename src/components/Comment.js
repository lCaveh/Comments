import React from "react";
import EditComment from "./EditComment";

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editAccess: false
    };
    this.editHandler = this.editHandler.bind(this);
  }
  editHandler() {
    this.setState({
      editAccess: !this.state.editAccess
    });
  }
  render() {
    return (
      <div>
        <div className="comment-container">
          <img
            className="comment-image"
            src={this.props.comment.userImage}
            className="uk-border-circle"
          />
          <span className="comment-content">
            {this.props.comment.userName} - {this.props.comment.content}
          </span>
          {this.props.user ? (
            <span>
              {this.props.user.uid === this.props.comment.userId ? (
                <span>
                  <a
                    onClick={() => this.props.deleteComment(this.props.id)}
                    className="comment-delete"
                  >
                    🗑️
                  </a>
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
        {this.state.editAccess ? (
          <EditComment comment={this.props.comment} id={this.props.id} />
        ) : (
          <div />
        )}
      </div>
    );
  }
}
export default Comment;
