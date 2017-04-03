import React from 'react';
import { connect } from 'react-redux';
import Station from '../components/Station';


function filterByStation(songs,station){
  return songs.filter(song=>song.genre===station);
}

const mapStateToProps = (state, ownProps)=>{

  return {
    station: ownProps.routeParams.genreName,
    songs: filterByStation(state.songs, ownProps.routeParams.genreName),
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying
  }
}

const mapDispatchToProps = (dispatch)=>{

  return {
    // toggleOne: dispatch.React
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Station);
