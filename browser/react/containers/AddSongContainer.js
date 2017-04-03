import React from 'react';
import AddSong from '../components/AddSong';
import {loadAllSongs, addSongToPlaylist} from '../action-creators/playlists';
import {connect} from 'react-redux';

class AddSongContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      songId: 1,
      error: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.loadAllSongs();
  }

  handleChange(evt) {
    this.setState({
      songId: evt.target.value,
      error: false
    });
  }

  handleSubmit(evt) {

    evt.preventDefault();

    const playlistId = this.props.selectedPlaylist.id;
    const songId = this.state.songId;

    this.props.addSongToPlaylist(playlistId, songId)
      .catch(() => this.setState({ error: true }));
  }

  render() {

    const songs = this.props.songs;
    const error = this.state.error;
    const songId = this.state.songId;

    return (
      <AddSong
        songs={songs}
        error={error}
        songId={songId}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}/>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    songs: state.songs,
    selectedPlaylist: state.playlists.selected
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadAllSongs: () => dispatch(loadAllSongs()),
    addSongToPlaylist: (playlistId, songId) => dispatch(addSongToPlaylist(playlistId, songId))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(AddSongContainer);
