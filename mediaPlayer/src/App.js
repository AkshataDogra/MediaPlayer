import React, { Component } from 'react';
import './App.css';
import Player from './player/Player';
import List from './list/List';

import Service from './services/Service'


// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faPlay, fasChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

// library.add(faPlay, fasChevronLeft, faChevronRight);

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
            console.log (`Error occured ${ error.status }`);
        })
  }

  updateList = (newState) => {
    console.log (newState)
    this.setState(newState);
  }

  savePlaylist() {
        console.log ('save', this.state.songList);
        alert ("Saving Playlist ... ");
        this.service
            .createPlaylist (this.state.songList)
            .then (res => res.json ())
            .then (resp => {
              console.log (resp);
            })
            .catch (error => {
                console.log (`Error occured ${ error.status }`);
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
