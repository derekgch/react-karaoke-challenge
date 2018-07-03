import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

class KaraokeContainer extends Component {
 constructor(props) {
   super(props);
   this.state = {
     songs: props.songs,
     selectSong : props.songs[0],
     searchTerm: ""
   }
 }

 componentDidUpdate(prevProps, prevState, snapshot) {
  // Typical usage (don't forget to compare props):
  if (this.props && this.props !== prevProps) {
    this.setState({
      songs:this.props.songs
    })
  }
}

handlePlay = (id)=> {
  const found = this.state.songs.find(song => song.id == id)
  this.setState({
    selectSong: found
  })
}

handleSearch = (event) => {
  this.setState({
    searchTerm: event.target.value
  })
}

 
  render() {
    // console.log("con",this.state.songs)
    let filtered = this.state.songs;
    if(this.state.searchTerm){
      filtered = this.state.songs.filter(song => song.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    }
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter handleSearch={this.handleSearch} searchTerm={this.state.searchTerm}/>
          <SongList songs={filtered} handlePlay={this.handlePlay}/>
        </div>
        <KaraokeDisplay playing={this.state.selectSong}/>
      </div>
    );
  }
}

export default KaraokeContainer;
