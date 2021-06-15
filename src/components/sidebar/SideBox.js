import IconBoxReturn from "./IconBox";
import styled from '@emotion/styled'
import React from "react";

let SideBarColumn = styled.div
`
    width: ${props => props.width};
    height: ${props => props.height};
    backgroundColor: ${props => props.backgroundColor}; 
`
function onClickChange(e){
    e.target.style.backgroundColor = '#ACAD94';
} 
class SideBoxClass extends React.Component{
    constructor(props){
        super(props)
        this.mouseHoverOff = this.mouseHoverOff.bind(this);
        this.mouseHoverOn = this.mouseHoverOn.bind(this)
        this.state ={
            w: '55px',
            h: '100vh',
            isMouseHovered: false
        }
    }
    mouseHoverOn(){
        this.setState({w: '200px'});
        this.setState({isMouseHovered: true})
    }
    mouseHoverOff(){
        this.setState({w: '55px'});
        this.setState({isMouseHovered: false})
    }
    render(){
        const SideBarIsHovered = this.state.isMouseHovered;
        let SideSection;
        if (SideBarIsHovered){
            SideSection = 
                <SideBarColumn style={{width:this.state.w, height: this.state.h, backgroundColor:'#495159'}} onMouseLeave={this.mouseHoverOff}>
                    <IconBoxReturn>
                        <div onClick={onClickChange}/>
                    </IconBoxReturn>
                    <IconBoxReturn/>
                    <IconBoxReturn/>
                    <IconBoxReturn/>
                </SideBarColumn>
        }
        else{
            SideSection = 
                <SideBarColumn style={{width:this.state.w, height: this.state.h, backgroundColor:'#495159'}} onMouseEnter={this.mouseHoverOn}>
                    <IconBoxReturn/>
                    <IconBoxReturn/>
                    <IconBoxReturn/>
                    <IconBoxReturn/>
                </SideBarColumn>
        }
        return(
            <div>
                {SideSection}
            </div>
        );
    }
}
export default SideBoxClass;