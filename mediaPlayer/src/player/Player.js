import React, { Component } from 'react';
import './../player/Player.css';

class Player extends Component {
    constructor() {
        super();
    
        this.state = {
          is_playing: false,
          progress: 0,
          in_set_progress_mode: false
        };    
        // this.is_progress_dirty = false;
    }


    togglePlay() {
        this.setState({ is_playing: !this.state.is_playing });
      } 

    
    render() {

        var playerClsName = {
            "fa": true,
            "fa-play": !this.state.is_playing,
            "fa-pause": this.state.is_playing
          };
        
        return (
                <div className="player">
                    <div className="controls">
                        {/* PREV */}
                        <a><i className="fa fa-chevron-left" aria-hidden="true"></i></a>
                        {/* CURRENT */}
                        <a onClick={this.togglePlay.bind(this)}>
                            <i className={classnames(playerClsName)} aria-hidden="true"></i>
                        </a>
                        {/* NEXT */}
                        <a><i className="fa fa-chevron-right" aria-hidden="true"></i></a>
                    </div>
                    <div className="progress" >
                        <div className="bar" />
                    </div>
              </div>
        );
    }
}

function classnames(obj) {
    var css = [];
    Object.keys(obj).forEach((key) => {
      if (obj[key]) {
        css.push(key);
      }
    });
    return css.join(' ');
  }

export default Player;