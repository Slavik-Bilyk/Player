import React, { Component } from 'react'
import { PlayerWrapper, StyledPlayer } from './Player.styled'

class Player extends Component {

state = {
    isVideoLoaded: false,
}

componentDidUpdate(prevProps) {
    if(prevProps.url !== this.props.url) {
        this.setState({isVideoLoaded: false})
    }
}

render() {
        const {isVideoLoaded} = this.state
        const {url} = this.props
        const showLoader = url && !isVideoLoaded
        const playerSize = isVideoLoaded ? '100%' : 0
        
  return (
    <div>
        {showLoader && <h2>Load video</h2>}
        {url && (
        <PlayerWrapper>
            <StyledPlayer 
            url={url} 
            controls 
            onReady={() => this.setState({isVideoLoaded: true})}
            width={playerSize}
            height={playerSize}
            />
        </PlayerWrapper>
        )}
 </div>
    )

    }
}

export default Player
