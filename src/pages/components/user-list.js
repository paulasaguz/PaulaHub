import React from 'react';
import UserInfo from '../components/user-info'

function UserList({repos}) {
  return (
    <div className="user-list-container">
      {
        repos.map((repo, index) => (
        <UserInfo key={index} {...repo} />
      ))
      }
    </div>
  )
}


export default UserList