import React, { Component } from 'react';
import Login from '../components/Login';
import {combineReducers} from 'redux';

// import { connect } from 'react-redux';
// import Apdp from '../components/app';
// import AppActions from '../actions/app';



// グローバルなstateから必要な値をとってきて、コンポーネントのthis.propsとしてセット
// 今回はいずれにしろstateのプロパティには{fuga}しか無いので、stateをまるごと返してます
// function mapStateToProps(state) {
//   return state
// }

// clickでactionを飛ばず
// function mapDispatchToProps(dispatch) {
//   return {
//     handleClick: () => { dispatch(AppActions.increment()) }
//   }
// }

//connect関数でReduxとReactコンポーネントを繋ぐ
// combineReducers()
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Login)


export default class App extends Component {
  render() {
    return (
      <Login />
    )
  }
}

