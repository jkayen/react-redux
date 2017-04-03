import React from 'react';
import { connect } from 'react-redux';
import Station from '../components/Station';
import { convertSong } from '../utils';
import { toggleSong } from '../action-creators/player';


function filterByStation(songs, station) {
  return songs.filter(song=>song.genre===station)
    .map(convertSong);
}

const mapStateToProps = (state, ownProps)=>{

  return {
    station: ownProps.routeParams.genreName,
    songs: filterByStation(state.songs, ownProps.routeParams.genreName),
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    toggleOne: function (song, list) {return dispatch(toggleSong(song, list))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Station);
