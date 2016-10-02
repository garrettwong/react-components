import React, { Component, PropTypes } from 'react';

class Comment extends Component {
  static propTypes = {
    author: '',
    children: ''
  };

  render() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    );
  }
}

export default Comment;