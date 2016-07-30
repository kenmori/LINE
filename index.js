import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './components/CommentBox';

ReactDOM.render(
  <CommentBox url="comments.json" pollInterval={112000} />,
  document.getElementById('container')
);
