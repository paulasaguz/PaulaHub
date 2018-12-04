import React, { Component, Fragment } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import API from '../../lib/api';
import Form from '../components/form';
import RepoList from '../components/repo-list';
import Layout from '../components/layout';
import UserInfo  from '../components/user-info';
import InfoBanner from '../components/info-banner'

class Home extends Component {
  state = {
    repos: [],
    user: [],
    stars: []
    // loader : false
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    const form = new FormData(this.form)
    this.username = form.get('username')
    console.log(this.username)
    API.getRepositoriesByUsername(this.username)
    .then((repos) => {
      this.setState({
        repos, 
        user: repos[1].owner
      })
    })
  }
  handleRepoClick = (repoName) => {
    API.getTopicsByRepository(this.username, repoName)
    .then((stars) => {
      if (stars.length === 0) {
        alert('este repo no tiene estrellitas :(')
      }
      const newRepos = this.state.repos.map((repo)=> {
        if (repo.name === repoName) {
          repo.stars = stars
        }
        return repo
      })
      console.log(stars)
      this.setState({
        repo: newRepos
      })
    })

  }
  setRef = (element) => {
    this.form = element
  }
  render() {
		return(
      <Fragment>
        <Header user={this.state.user}/>
        <Layout>
          <UserInfo user={this.state.user}/>
          <InfoBanner repos={this.state.repos}/>
          <Form handleSubmit={this.handleSubmit} setRef={this.setRef} />
          <RepoList repos={this.state.repos} handleRepoClick={this.handleRepoClick} />
        </Layout>
        <Footer/>
      </Fragment>
    )
  }
}

export default Home;
