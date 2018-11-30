import React from 'react';
import './userInfo.css';

function UserInfo(props){
  // const foto = props.owner.avatar_url
  // const login = props.owner.login
  // this.setState(login)
  return(
    <div className="user-container">
      <img src={props.owner.avatar_url} alt="paula"/>
      <h3> {props.owner.login} </h3>
      <button>Edit bio</button>
    </div>
  )
}

export default UserInfo