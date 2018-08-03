import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as appActions from '../../actions/App';

import ('./assets/app.scss');

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
      <div className="margin-8">
        {message} <b>{user}</b>
      </div>
      <div className="margin-8">
        <span>
          Введите новое имя:
        </span>
        <span>
          <input type="text"
                 onChange={::this.typedName}
                 defaultValue={newUserName}
          />
        </span>
        <span>
          <button type="button" onClick={::this.changeName}>Изменить</button>
        </span>
      </div>
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