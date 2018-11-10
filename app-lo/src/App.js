import React, { Component } from 'react';
import { connect } from 'react-redux';

class Button extends Component {
  render() {
    return(
      <button className="box-btn" onClick={ this.props._onClick }>{ this.props.children }</button>
    );
  }
}

class App extends Component {
  setValue = value => {
    this.props.updateValue(value);
  }

  render() {
    return (
      <div className="box">
        <h1 className="box-counter">{ this.props.value }</h1>
        <div className="box-controls">
          <Button _onClick={ () => this.setValue(-1) }>-</Button>
          <Button _onClick={ () => this.setValue(1) }>+</Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  value: state
});

const mapActionsToProps = {
  updateValue: payload => ({ type: "UPDATE_PER_ONE", payload })
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(App);
