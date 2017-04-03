import React, {Component} from 'react';
import AUDIO from '../audio';
import store from '../store';
import {previous, next, setProgress, toggleSong} from '../action-creators/player';
import Player from '../components/Player';
import { connect } from 'react-redux';


const mapStateToProps = (state, ownProps)=>{
  return {
    state: state.player,
    currentSong: state.player.currentSong,
    currentSongList: state.player.currentSongList,
    isPlaying: state.player.isPlaying,
    progress: state.player.progress
  }
}

const mapDispatchToProps = (dispatch, ownProps)=>{
  return{
    next: ()=>dispatch(next()),
    prev: ()=> dispatch(previous()),
    toggle: (currentSong,currentSongList)=> {
      dispatch(toggleSong(currentSong, currentSongList))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Player);


  // componentDidMount() {

  //   AUDIO.addEventListener('ended', this.next);
  //   AUDIO.addEventListener('timeupdate', () => {
  //     store.dispatch(setProgress(AUDIO.currentTime / AUDIO.duration));
  //   });

  //   this.unsubscribe = store.subscribe(() => {
  //     this.setState(store.getState().player);
  //   });
  // }

  // toggle() {
  //   store.dispatch(
  //     toggleSong(this.state.currentSong, this.state.currentSongList)
  //   );
  // }

  // render() {
  //   return <Player
  //     {...this.state}
  //     next={this.next}
  //     prev={this.prev}
  //     toggle={this.toggle}
  //   />;
  // }
