import React, { Component } from 'react';
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import './App.css';
import axios from 'axios';
import Search from './components/users/Search'
import Alert from './components/layout/Alert'

class App extends Component {

  state = {
    users:[],
    loading:false,
    alert: null
  }
  
  //search Github users
  searchUsers = async text => {
    this.setState({ loading: true })
    console.log(text);
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({users: res.data.items, loading: false})
  }

  //clear user results

  clearUsers = () => { this.setState( {users:[],loading:false})};

  //Set Alert
  setAlert = (msg, type) => {
    this.setState({alert: {msg,type}});
    
    setTimeout(() => this.setState({alert:null}), 3000);
  };

  render() {
    const { users, loading  } = this.state;
    
    return(
      <div className="App">
        < Navbar title='Github Finder' icon="fab fa-github"/>
        <div className="container">
          <Alert alert={this.state.alert} />
          <Search searchUsers={this.searchUsers}
                  clearUsers={this.clearUsers}
                  showClear={users.length > 0 ? true : false}
                  setAlert={this.setAlert}/>
          <Users loading={loading} users={users}/>
        </div>        
      </div>
    )
  }
}

export default App;
