import React from 'react';
import { connect } from 'react-redux';
import Stations from '../components/Stations';

function getGenres (songs){
  let genres=songs.map(song=>song.genre);
  let uniqueGenres=[];
  genres.forEach(genre=>{
    if(!uniqueGenres.includes(genre)){
      uniqueGenres.push(genre);
    }
  })
  return uniqueGenres;
}

const mapStateToProps = (state)=>{
  getGenres(state.songs);
  return {
    stations: getGenres(state.songs)
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Stations);
