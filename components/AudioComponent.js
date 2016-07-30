import React from 'react';

export default class AudioComponent extends React.Component {
  componentDidMount(){
    console.info('[AudioPlayer] componentDidMount...');
    this.props.el = React.findDOMNode(this.refs.audio_tag);
    console.info('audio prop set', this.props.el);
  }
  render(){
    console.info('[AudioPlayer] render ...');
    return (
      <audio ref="audio_tag" src="./king.mp3" controls autoplay="false" />
    );
  }
}
