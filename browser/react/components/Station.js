import React from 'react';
import Songs from './Songs';

export default function Station (props) {
  console.log()
  return (
    <div>
      <h3>{props.station} Station</h3>
      <Songs
        songs={props.songs}
        currentSong={props.currentSong}
        isPlaying={props.isPlaying}
        toggleOne={props.toggleOne}
      />
    </div>
  );
}
