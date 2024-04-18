import React, { Component } from 'react'
import Videolist from './Videolist/Videolist'
import videos from '../videos.json'
import Player from './Player/Player'

class App extends Component {

state = {
    selectedVideo: null,
}

selectedVideo = link => {
    this.setState({selectedVideo: link})
}

render() {
    return(
    <div>
        <h1>{this.state.selectedVideo}</h1>
        <Videolist videos={videos} onSelect={this.selectedVideo}/>
        <Player url={this.state.selectedVideo}/>
    </div>)
    }
}

export default App


