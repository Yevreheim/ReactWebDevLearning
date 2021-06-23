import styled from '@emotion/styled'
import React from "react";
import {useSpring, animated} from react-useSpring;
let MiddleSquare = styled.div
`
    width: ${props => props.width};
    height: ${props => props.height};
    backgroundColor: ${props => props.backgroundColor};
`

class StartScreen extends React.Component{

    constructor(props){
        super(props)
        this.state={
            w: '256px',
            h: '256px',
            backgroundColor: '#0E3795'
        }
    }
    render(){
        return(
            <div>

            </div>
        );
    }
}

export default StartScreen;