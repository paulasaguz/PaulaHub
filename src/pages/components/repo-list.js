import React from 'react';
import Repo from '../components/repo'
import loaderGif from '../../../images/loader.gif'

function RepoList({ repos, handleRepoClick }) {
  // if(!repos){
  //   return (
  //     <img className="Repolist loaderGif" src={loaderGif} with="200" height="200" alt=""/>
  //   )
  // }
  return (
    <div className="Repolist">
      {repos.map((repo, index) => (
        <Repo key={index} {...repo} handleRepoClick={handleRepoClick} />
      ))}
    </div>
  )
}


export default RepoList
