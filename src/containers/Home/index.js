import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as appActions from './home.actions';

import UserShow from '../../components/UserShow';
import UserShowEdit from '../../components/UserShowEdit';

import('./assets/home.scss');

class App extends Component {
  typedName(e) {
    this.props.appActions.typedName(e.currentTarget.value);
  }
  changeName() {
    this.props.appActions.changeName(this.props.app.newUserName);
  }
  render() {
    const {user, message, newUserName} = this.props.app;

    return <div className="margin-16">

      <UserShow user={user} message={message}/>
      <UserShowEdit newUserName={newUserName} typedName={::this.typedName} changeName={::this.changeName}/>
    </div>
  }
}

function mapStateToProps (state) {
  return {
    app: state.app
  }
}

function mapDispatchToProps(dispatch) {
  return {
    appActions: bindActionCreators(appActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
