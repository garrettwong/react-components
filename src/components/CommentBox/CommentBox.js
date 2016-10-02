import React, { Component, PropTypes } from 'react';

import CommentList from './CommentList';
import CommentForm from './CommentForm';

class CommentBox extends Component {
  constructor() {
    super();
    
    this.setState({ data: [] });
  }

  loadCommentsFromServer() {
    // $.ajax({
    //   url: this.props.url,
    //   dataType: 'json',
    //   cache: false,
    //   success: function(data) {
    //     this.setState({data: data});
    //   }.bind(this),
    //   error: function(xhr, status, err) {
    //     console.error(this.props.url, status, err.toString());
    //   }.bind(this)
    // });
    var data = [
      {"id": "1", "author": "Pete Hunt", "text": "This is one comment"},
      {"id": "2", "author": "Jordan Walke", "text": "This is *another* comment"}
    ];

    this.setState({ data: data });
  }

  getInitialState() {
    return { data: [] };
  }

  componentDidMount() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  }

  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm />
      </div>
    );
  }
}

export default CommentBox;