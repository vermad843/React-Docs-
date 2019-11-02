import React, { Component } from 'react';
import Avatar from './Avatar';
import UserInfo from './UserInfo';

class Comment extends Component {
    render() {
        return (
            <div className = "Comment">
                 <UserInfo user = {this.props.author}/>
                 <div className = "comment-text">
                    {this.props.text}
                 </div>
                 <div className = "Comment-date">
                     {formatDate(this.props.date)}
                 </div>  
             </div>
        );
    }
}

export default Comment;