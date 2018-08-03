import React, {Component} from 'react';

export default class UserShow extends Component{
  render() {
    const {user, message} = this.props;

    return <div className="margin-8">
      {message} <b>{user}</b>
    </div>
  }
}
