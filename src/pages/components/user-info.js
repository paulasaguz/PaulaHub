import React from 'react';
import './userInfo.css';

function UserInfo({user}){
  if(!user.login){
    return null
  }
  return(
    <div className="userInfo">
      <img src={user.avatar_url} alt="paula"/>
      <h3> {user.login} </h3>
      <button>Edit bio</button>
    </div>
  )
}

export default UserInfo