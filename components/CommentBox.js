import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import ActionCreater from './ActionCreater';
import Store from './Store';
import EventEmitter from './EventEmitter';
var dispatcher = new EventEmitter();
var action = new ActionCreater(dispatcher);
var store = new Store(dispatcher);
import $ from 'jquery';

export default class CommentBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      count: store.getCount()
    };
    store.on("CHANGE", ()=>{
      this._onChange();
    })
  }
  loadCommentsFromServer(){
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: (data) => {
        this.setState({data: data}); },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }
    });
  }
  handleCommentSubmit(comment){
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: comment,
      success: (data) => { this.setState({data: data});},
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }
    })
  }
  componentDidMount(){
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer.bind(this), this.props.pollInterval);
  }

  _onChange() {
    console.trace();// <= onChangeまでのコールスタックを吐く
    this.setState({count: store.getCount()});
  }
  tick(){
    action.countUp(this.state.count + 1);
  }

  render(){
    return (
      <div className="commentBox">
        <h2>今日の晩ご飯</h2>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)} />
        {/*<div className="clickCount">
          <button onClick={this.tick.bind(this)}>Count Up</button>
          <p>Count : {this.state.count}</p>
        </div> */}
      </div>
    );
  }
}
