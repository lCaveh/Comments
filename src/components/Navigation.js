import React from "react";

class Navigation extends React.Component {
render(){
    return(
        <div className="header">
        <nav className="uk-navbar uk-navbar-container uk-margin">
            <div className="uk-navbar-left">
                <span className="uk-navbar-toggle">{!this.props.user ? (
                    <span onClick={this.props.handleLogin}>LogIn</span>
                ) : (
                        <span onClick={this.props.handleLogout}>
                            <img
                                className="uk-comment-avatar uk-border-circle"
                                src={this.props.user.photoURL}
                                width="20"
                                height="20"
                                alt="Border circle"
                            />  {this.props.user.displayName.split(' ')[0]}
                        </span>
                    )}</span>
            </div>
        </nav>
    </div>
    )
}
}
export default Navigation