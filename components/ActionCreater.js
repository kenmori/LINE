export default class ActionCreater {
  constructor(dispatcher){
    this.dispatcher = dispatcher;
  }
  //"Emit" event ---> Store
  countUp(data) {
    this.dispatcher.emit("countUp", data);
  }
}
