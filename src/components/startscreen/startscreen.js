import styled from '@emotion/styled'
import React from "react";

let MiddleSquare = styled.div
`
    width: ${props => props.width};
    height: ${props => props.height};
    backgroundColor: ${props => props.backgroundColor};
`
function Nicaea (props){
    return(
        <div>
            
        </div>
    )
}

class StartScreen extends React.Component{

    constructor(props){
        super(props)
        this.state={
            w: '100vw',
            h: '256px',
            backgroundColor: '#0E3795',
            opacity: '0.75',
            position: 'absolute',
            bottom: '50vh'
            
        }
    }
    render(){
        return(
            <div style={{
                width:this.state.w,
                height:this.state.h,
                backgroundColor:this.state.backgroundColor,
                position: this.state.position,
                bottom: this.state.bottom,
                opacity:this.state.opacity}}>

            </div>
        );
    }
}

export default StartScreen;