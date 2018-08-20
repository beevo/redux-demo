import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { updateUser } from './actions/user-actions';
import { bindActionCreators } from 'redux';
class App extends Component {
  constructor(props) {
    super(props);

    this.onUpdateUser = this.onUpdateUser.bind(this);
  }
  onUpdateUser(event){
    console.log(this);
    this.props.onUpdateUser(event.target.value);
  }
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input
          onChange={this.onUpdateUser}>
        </input>
        {this.props.user}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  console.log(props);
  return {
    products: state.products,
    user: state.user,
    props: props,
    randProp: 'boo'
  };
}

const mapActionsToProps = (dispatch, props) => {
  console.log(props);
  return bindActionCreators({
    onUpdateUser: updateUser
  }, dispatch);
}

//propsFromState is from mapStateToProps
//propsFromDispatch is from mapActionsToProps

const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
  console.log(propsFromState, propsFromDispatch, ownProps);
  return {}
}
export default connect(mapStateToProps, mapActionsToProps, mergeProps)(App);
// export default App;
