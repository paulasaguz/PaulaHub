import React from 'react';
import Star from './star';
import Forks from '../../icons/components/forks'
import StarIcon from '../../icons/components/starIcon'
import './repo.css'

function Repo(props) {
  let styleLanguage = {
    backgroundColor :''
  }
  if(props.language === "HTML"){
    styleLanguage.backgroundColor = 'red'
  }
  else if(props.language === "JavaScript"){
    styleLanguage.backgroundColor = '#f1e05a'
  }
  else if(props.language === "CSS"){
    styleLanguage.backgroundColor = '#563d7c'
  }
  else{
    styleLanguage.backgroundColor = '#30dbbb'
  }
  return (
    <div
      className="Repo"
      onClick={() => { props.handleRepoClick(props.name) }}>
      <h3>
        {props.name}
      </h3>
      <small>
        {props.description}
      </small>
      <p className="properties">
        <span className="language" style={styleLanguage}></span>
        <li>{props.language}</li>
        <li><StarIcon size={12} color="grey" view="0 0 14 16"/> {props.stargazers_count}</li>
        <li><Forks size={12} color="grey" view="0 0 10 16"/> {props.forks_count}</li>
      </p>
      <div className="container-star">
      {
        props.stars.map((data, index) => (
          <Star key={index} {...data}  />
        ))
      }
      </div>
    </div>
  )
}

Repo.defaultProps ={
  stars: []
}
export default Repo
