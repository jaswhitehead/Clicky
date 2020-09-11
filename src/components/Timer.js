import React from 'react';

class Timer extends React.Component {
    render() {
        return (
            <p>You have (5) seconds to click a new Image or your game will start over: {this.props.time}</p>
        )
    }
}

export default Timer;