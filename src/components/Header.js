import React from 'react';
import Title from './Title';
import Description from './Description';
import Score from './Score';
import Timer from './Timer';

class Header extends React.Component {
    render() {
        const style = {
            backgroundColor: '#FF9E4C',
            color: "black",
            textAlign: "center",
            padding: "20px",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.4)",
            filter: "opacity(90%)",
            position: "fixed",
            width: "100%",
            top: "0",
            zIndex: "2",
            boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, 0.4)"
        }
        return (
            <div style={style}>
                <Title>Family Guy Click Game</Title>
                <Description>Click on a character, but don't click any character more than once. Get all 12 and you can click them all again. Try for a new High Score!</Description>
                <Score score={this.props.score} />
                <Timer time={this.props.time} />
            </div>
        )
    }
}

export default Header;