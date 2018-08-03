import React, {Component} from 'react';

export default class UserShowEdit extends Component{
  render() {
    const {newUserName, typedName, changeName} = this.props;

    return <div className="margin-8">
        <span>
          Введите новое имя:
        </span>
      <span>
          <input type="text"
                 onChange={typedName}
                 defaultValue={newUserName}
          />
        </span>
      <span>
          <button type="button" onClick={changeName}>Изменить</button>
        </span>
    </div>
  }
}
