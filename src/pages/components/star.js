import React from 'react'
import './star.css'

function Star(props) {
  return (
    <div className="container-star">
      <div className="Star">
        <p>{props.login}</p>
        <img src={props.avatar_url} alt={props.login} width={50} height={50} />
      </div>
    </div>
  )
}

export default Star
