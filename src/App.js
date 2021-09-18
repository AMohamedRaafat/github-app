import React, { Component } from 'react'
import Search from './components/Search'
import User from './components/User'
import Post from './components/Post'
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CnxtProvider } from './components/Cnxt';
import axios from 'axios';
import './App.css'
export default class App extends Component {
  state = {
    user: "",
    loop: false,
    repos: [],
    show: true,
    ref : "",

  }
  changeState = (e) => {
    this.setState({
      user: e.target.value
    })
    console.log(this.state.user);
  }
  formSubmit = (e) => {
    e.preventDefault();
    const linkApi = `https://api.github.com/users/${this.state.user}`;
    console.log(linkApi);
    axios.get(linkApi)
      .then(res => {
        this.setState({
          data: res.data,
          loop: !this.state.loop,
          show: !this.state.show
        })
      })
      .catch(err => {
        document.body.innerHTML += "User Error ! ";
        console.log("User Error ! ");
      })
  }

  getRepos = () => {
    const linkApi = `https://api.github.com/users/${this.state.user}/repos`;
    axios.get(linkApi)
      .then(res => {
        this.setState({
          repos: res.data,
          show: !this.state.show,
          loop: !this.state.loop
        })
        console.log(this.state.repos);
        this.renderRepos();
      })
      .catch(err => {
        document.body.innerHTML += "User Error ! ";
        console.log("User Error ! ");
      })

  }
  render() {
    return (
      <div className="App">
        <CnxtProvider value={this.formSubmit} >
          <CnxtProvider value={this.changeState}>
            <Search formSubmit={this.formSubmit} />
          </CnxtProvider>
        </CnxtProvider>

        <div className='Data'>
           
          {this.state.loop ? <User data={this.state.data} get={this.getRepos} /> : ""}
          {this.state.show ? <Post repos={this.state.repos} /> : ""}
        </div>

      </div>
    )
  }
}
