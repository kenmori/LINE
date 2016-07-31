import React from 'react';

class CommentBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <span>
        fafa
      </span>
    );
  }
}

React.render(
  <CommentBox />,
  document.getElementById('container')
);
