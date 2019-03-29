import React, { Component } from 'react';
import './App.css';
import Player from './player/Player';
import List from './list/List';

import Service from './services/Service'


class App extends Component {

  constructor(props) {
    super(props);
      this.state = {
        songList: []
    };
    this.service = new Service ();
  }

  componentDidMount() {
    this.service
        .getAllSongs ()
        .then (res => res.json ())
        .then (resp => {
            this.setState({ songList: resp });
        })
        .catch (error => {
        })
  }

  updateList = (newState) => {
    this.setState(newState);
  }

  savePlaylist() {
        alert ("Saving Playlist ... ");
        this.service
            .createPlaylist (this.state.songList)
            .then (res => res.json ())
            .then (resp => {
            })
            .catch (error => {
            })
    }

 render() {
    return (
      <div className="app">
        <div className="title">Music Box</div>
        <Player />
        <button
            className="button"
            onClick={ this.savePlaylist.bind(this) } >Save Playlist
        </button>
        <List songList={this.state.songList} updateList={this.updateList} />
      </div>
    );
  }
}

export default App;
