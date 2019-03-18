import React from "react";
import CreateComment from "./CreateComment";


class AllComments extends React.Component {
  render() {
    return <div>
        <CreateComment 
        user={this.props.user}
        createComment={this.props.createComment}/>
    </div>;
  }
}
export default AllComments;
