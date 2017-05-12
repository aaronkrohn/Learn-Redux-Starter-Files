import React from 'react';

const Comment = React.createClass({
  renderComment(comment, i) {
      return (
        <div className="comment" key={i}>
          <p>
            <strong>{comment.user}</strong>
            {comment.text}
            <button onClick={this.props.removeComment.bind(null, this.props.params.postid, i)} className="remove-comment">&times;</button>
          </p>
        </div>
      )
  },

  handleSubmit(e) {
    e.preventDefault();
    const { postid } = this.props.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;

    this.props.addComment(postid, author, comment);
    this.refs.commentForm.reset()
  },

  render(){
    const { postComments } = this.props;
    return (
      <div className="comments">
          {postComments.map(this.renderComment)}
          <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
            <input type="text" ref="author" placeholder="author"/>
            <input type="text" ref="comment" placeholder="commtn"/>
            <input type="submit" hidden />
          </form>
      </div>
    )
  }
});

export default Comment;
