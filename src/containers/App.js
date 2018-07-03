import React, { Component } from 'react';
import Header from '../components/Header';
import KaraokeContainer from './KaraokeContainer';

class App extends Component {
  state = {
    songs: []
  }

  componentDidMount(){
    this.fetchFn().then(data => {
      this.setState({
        songs: data
      }, ()=> console.log("app",this.state.songs))
    })
  }
  fetchFn(){
    return fetch("https://demo.lovescomputers.com/users/4/songs").then(j=>j.json())
  }

  render() {
    return (
      <div className="app">
        <Header />
        <KaraokeContainer songs={this.state.songs}/>
      </div>
    );
  }
}

export default App;
