import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class UserList extends Component {
  render () {
    return (
    <ul>
      <li>1</li>
      <li>2</li>
    </ul>
    );
  }
}

export default UserList;
