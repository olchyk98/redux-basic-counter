import React, { Component } from 'react';

class Button extends Component {
  render() {
    return(
      <button className="box-btn" onClick={ this.props._onClick }>{ this.props.children }</button>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="box">
        <h1 className="box-counter"></h1>
        <div className="box-controls">
          <Button _onClick={ ()=>null }>+</Button>
          <Button _onClick={ ()=>null }>-</Button>
        </div>
      </div>
    );
  }
}

export default App;
