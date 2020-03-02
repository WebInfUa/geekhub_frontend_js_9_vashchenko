import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserList extends Component {
  showUsers() {
    return this.props.users.map ((user: string) => {
    return (
      <li key={user._id}>{user.name}</li>
    )
  })
  }
  
  render() {
    return (
    <ol>
      {this.showUsers()}
    </ol>
    )
  }
}

function mapStateToProps (state) {
  return {
    users: this.users
  }
}

export default connect (mapStateToProps)(UserList);
