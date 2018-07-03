import React from 'react';
import Song from './Song'

const SongList = (props) => {
  const songsToDislay = props.songs.map(song => <Song key={song.id} song={song} handlePlay={props.handlePlay}/>)
  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>▶</th>
        </tr>

        {songsToDislay}
        
      </tbody>
    </table>
  )
}

export default SongList;
