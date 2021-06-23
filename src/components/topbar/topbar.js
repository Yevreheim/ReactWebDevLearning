import styled from '@emotion/styled'
import React from "react";

let TopBarObject = styled.div
`
    width: ${props => props.width};
    height: ${props => props.height};
    backgroundColor: ${props => props.backgroundColor};
    position: ${props => props.position};
`

class TopBarClass extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            w: '100vw',
            h: '55px',
            backgroundColor: '#C9CAD9',
            borderColor: '#B5C7E3',
            position: 'fixed',
            border: '3px solid #8AC007',
            rotation: '45deg',
            bottom: '50vh'
        }
    }
    render(){
        let TopBarRender =
        <TopBarObject style={{
            width: this.state.w, 
            height:this.state.h,
            backgroundColor:this.state.backgroundColor, 
            position: this.state.position,
            // border: this.state.border,
            bottom: this.state.bottom
        }}/>
        return(
            <div>
                {this.props.children}
                {TopBarRender}
            </div>
        );
    }
}
export default TopBarClass;