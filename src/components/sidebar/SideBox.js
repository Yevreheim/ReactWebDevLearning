import IconBoxReturn from "./IconBox";
import styled from '@emotion/styled'
import React from "react";

let SideBarColumn = styled.div
`
    width: ${props => props.width};
    height: ${props => props.height};
    backgroundColor: ${props => props.backgroundColor}; 
`
class SideBoxClass extends React.Component{
    constructor(props){
        super(props)
        this.mouseHoverOff = this.mouseHoverOff.bind(this);
        this.mouseHoverOn = this.mouseHoverOn.bind(this)
        this.handleClick = this.handleClick.bind(this);
        this.state ={
            w: '55px',
            h: '100vh',
            isToggleOn: true
        }
    }
    handleClick() {
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
    }
    mouseHoverOn(){
        this.setState({w: '200px'});
    }
    mouseHoverOff(){
        this.setState({w: '55px'});
    }
    render(){
        let PopOutWindow =
            <div onMouseLeave={this.handleClick}>
                <SideBarColumn style ={{
                    position: 'fixed', 
                    width:'200px',
                    height:'600px',
                    border: '1px solid white',
                    top: '0px',
                    left: '200px',
                    backgroundColor:'#732c2c',
                    }}/>
            </div>

        let IconBoxes = 
            <div>
                <IconBoxReturn>
                    <button style={{width:this.state.w, height: '55px', position: 'absolute'}} onClick={this.handleClick}>
                        {this.state.isToggleOn 
                            ? 'ON' 
                            :  <div>
                                    OFF
                                    {PopOutWindow}
                                </div> 
                            }  
                    </button>
                </IconBoxReturn>
                <IconBoxReturn/>
                <IconBoxReturn/>
                <IconBoxReturn/>
            </div>

        return(
            <div>
                <SideBarColumn style={{width:this.state.w, height: this.state.h, backgroundColor:'#495159'}} onMouseEnter={this.mouseHoverOn} onMouseLeave={this.mouseHoverOff}>
                    {IconBoxes}
                </SideBarColumn>
            </div>
        );
    }
}
export default SideBoxClass;