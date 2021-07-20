import React, { useState} from 'react';
import styled from '@emotion/styled'
import LoopTrue from './components/startscreen/testanimation';
import StartScreen from './components/startscreen/startscreen';
import ParallaxTestClass from './components/parallaxLearning/ParallaxTest'

let AppDisplay = styled.div
  `
  width: ${props => props.width};
  height: ${props => props.height};
  backgroundColor: ${props => props.backgroundColor};
`

function ScreenToArray() {
  // eslint-disable-next-line
  const [WindowWidth, WindowWitdhAPI] = useState(Math.ceil(window.innerWidth / 100));
  // eslint-disable-next-line
  const [WindowHeight, WindowHeightAPI] = useState(Math.ceil(window.innerHeight / 100));
  const arrayResult = [];
  for (let indexHeight = 0; indexHeight < WindowHeight; ++indexHeight) {
    for (let indexWidth = 0; indexWidth < WindowWidth; ++indexWidth) {
      var SquareX = indexWidth * 100;
      var SquareY = indexHeight * 100;
      arrayResult.push({ x: SquareX, y: SquareY });
    }
  }
  return arrayResult;
}

function AppFunction() {
  let SquareArray = [];
  SquareArray = ScreenToArray();

  let AppOutput =
    <div>
      <AppDisplay style={{ width: '100vw', height: '100vh', backgroundColor: '#030D26', position: 'relative' }}>
        {SquareArray.map(({ x, y }) => <LoopTrue x={x} y={y} />)}
      </AppDisplay>
    </div>

  return (
    <div>
      {/* {AppOutput} */}
      <div>
        {/* <OpacityBackground/> */}
        {/* <StartScreen/> */}
        <ParallaxTestClass/>
      </div>
    </div>
  )
}


export default AppFunction;
