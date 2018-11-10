import React, { Component } from 'react';
import { connect } from 'react-redux';

class Button extends Component {
  render() {
    return(
      <button className="box-btn definp" onClick={ this.props._onClick }>{ this.props.children }</button>
    );
  }
}

class App extends Component {
  updateValue = value => {
    this.props.updateValue(value);
  }

  setValue = value => {
    this.props.setValue(parseInt(value));
  }

  render() {
    return (
      <div className="box">
        <input
          type="number"
          className="box-counter definp"
          value={ this.props.value }
          onChange={ ({ target: { value } }) => this.setValue(value) }
        />
        <div className="box-controls">
          <Button _onClick={ () => this.updateValue(-1) }>-</Button>
          <Button _onClick={ () => this.updateValue(1) }>+</Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  value: state
});

const mapActionsToProps = {
  updateValue: payload => ({ type: "UPDATE_PER_ONE", payload }),
  setValue: payload => ({ type: "UPDATE_CUSTOM", payload })
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(App);
