import React from 'react';
import './App.css';
import styled from '@emotion/styled'
import SideBoxClass from './components/sidebar/SideBox';
import TopBarClass from './components/topbar/topbar';
import LoopTrue from './components/startscreen/testanimation';

let AppDisplay = styled.div
`
  width: ${props => props.width};
  height: ${props => props.height};
  backgroundColor: ${props => props.backgroundColor};
`


class App extends React.Component{
    constructor(props){
      super(props)
      this.state ={
        w: '100vw',
        h: '100vh',
        backgroundColor: '#030D26',
        position: 'relative'
      }
    }


    render(){
      var WindowWidth = window.innerWidth;
      var WidthRound = Math.ceil(WindowWidth/100);
      var WindowHeight = window.innerHeight;
      var HeightRound = Math.ceil(WindowHeight/100);
      

      let AppOutput =
        <div>
          <AppDisplay style={{width:this.state.w, height: this.state.h, backgroundColor: this.state.backgroundColor,position: this.state.position}}>
            {/* <TopBarClass/> */}
            <div>
              {WindowWidth}
              <br/>
              {WindowHeight}
              <LoopTrue backgroundColor='#46e891' x = '47.5vw' y ='50vh'/>
            </div>
          </AppDisplay>
        </div>
      return(
        <div>
            {this.props.children}
            {AppOutput}
        </div>
      );
    }
}

export default App;
