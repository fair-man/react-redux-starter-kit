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
    return <div className="grid margin-16">
        <div className="grid__box grid__box--size-12">
          <div className="grid">
            <div className="grid__box">{this.props.app.message} <b>{this.props.app.user}!</b> </div>
          </div>
        </div>
        <div className="grid__box grid__box--size-12">
          <div className="grid">
            <div className="grid__box grid__box--align-self-flex-end">Введите новое имя:</div>
            <div className="grid__box">
              <input type="text"
                     onChange={::this.typedName}
                     defaultValue={this.props.app.newUserName}
              />
            </div>
            <div className="grid__box">
              <button type="button" onClick={::this.changeName}>Изменить</button>
            </div>
          </div>
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