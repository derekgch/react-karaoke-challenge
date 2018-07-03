import React from 'react';
import Lyrics from './Lyrics';

const KaraokeDisplay = (props) => {
  if(!props.playing) return (<div className="karaoke-display"> </div>);
  else
    return (
      <div className="karaoke-display">
        <h2>{props.playing.title}</h2>
        <Lyrics lyrics={props.playing.lyrics} />
      </div>
    )
}

export default KaraokeDisplay;
