import React from 'react';
import Comment from './Comment';
//When you pass value to children, read children file
export default class CommentList extends React.Component {
  render() {
    var commentNodes = this.props.data.map((comment,i)=> {
      return (<Comment className="comment" author={comment.author} key={i} >{comment.text}</Comment>);
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
}
