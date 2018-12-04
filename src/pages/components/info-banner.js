import React from 'react';
import './info-banner.css'

function InfoBanner({repos}){
  console.log(repos)
  return (
    <div className="InfoBanner">
      <li>Overview</li>
      <li className="active"><strong>Repositories</strong><span className="Repolength">{repos.length}</span> </li>
      <li>Stars</li>
      <li>Followers</li>
      <li>Following</li>
    </div>
  )
}

export default InfoBanner