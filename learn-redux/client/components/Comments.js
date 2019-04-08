import React, { Component } from 'react';

class Comments extends Component {
  renderComments(comment, i) {
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment">&times;</button>
        </p>
      </div>
    );
  }
  submitHandler(e) {
    e.preventDefault();
    // console.log('submiting the form');
    const { postId } = this.props.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    this.props.addComment(postId, author, comment);
  }
  render() {
    return (
      <div>
        {this.props.postComments.map(this.renderComments)}
        <form
          ref="commentForm"
          className="comment-form"
          onSubmit={this.submitHandler.bind(this)}
        >
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}

export default Comments;
