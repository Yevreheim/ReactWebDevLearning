import styled from '@emotion/styled'
import React from 'react';

const IconBox = styled.div
    `
    width: ${props => props.width};
    height: ${props => props.height};
    backgroundColor: ${props => props.backgroundColor};
`
function onClickChange(e){
    e.target.style.backgroundColor = '#3F6C51';
}
class IconBoxReturn extends React.Component {
    constructor(props) {
        super(props);
        this.hoverOn = this.hoverOn.bind(this);
        this.hoverOff = this.hoverOff.bind(this);

        this.state = {
            w: 'max-Width',
            h: '55px',
            isHovered: false
        };
    }
    hoverOn(){
        this.setState({isHovered: true});
        this.setState({w: '200px'});
    }
    hoverOff(){
        this.setState({isHovered: false});
        this.setState({w: '55px'});
    }
    render() {
        //Conditions
        const BoxIsHovered = this.state.isHovered;
        let Box;
        if(BoxIsHovered){
            Box = 
                <IconBox style={{width: 'max-Width',height:this.state.h,backgroundColor: '#797d81',borderBottom: '1px solid white'}} onMouseLeave={this.hoverOff}/>
        }
        else {
            Box = 
                <IconBox style={{width: 'max-Width',height:this.state.h,backgroundColor: '#495159',borderBottom: '1px solid white'}} onMouseEnter={this.hoverOn}/>
        }
        //Result
        return (
            <div >
                {Box}
            </div>
        )
    }
}
export default IconBoxReturn;