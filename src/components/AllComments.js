import React from "react";
import CreateComment from "./CreateComment";
import Comment from "./Comment";

class AllComments extends React.Component {
  render() {
    return (
      <div>
        <CreateComment
          user={this.props.user}
          createComment={this.props.createComment}
        />
        {this.props.comments ? (
          <div>
            {Object.keys(this.props.comments).reverse().map(key => {
              return (
                <div key={key}>
                  <div className="uk-card uk-card-default uk-card-body">
                    <Comment id={key}
                     user={this.props.user}
                     comment={this.props.comments[key]} 
                     deleteComment={this.props.deleteComment}
                     />
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p>There is still no comment</p>
        )}
      </div>
    );
  }
}
export default AllComments;
