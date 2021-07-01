import React, {useState, useRef} from 'react';
import styled from '@emotion/styled'
import LoopTrue from './components/startscreen/testanimation';
import { useSprings } from 'react-spring'

let AppDisplay = styled.div
`
  width: ${props => props.width};
  height: ${props => props.height};
  backgroundColor: ${props => props.backgroundColor};
`
const fn = (order, down, originalIndex, curIndex, y) => (index) =>
  down && index === originalIndex
    ? { y: curIndex * 100 + y, scale: 1.1, zIndex: '1', shadow: 15, immediate: (n) => n === 'y' || n === 'zIndex' }
    : { y: order.indexOf(index) * 100, scale: 1, zIndex: '0', shadow: 1, immediate: false }

function AppFunction() {
  const[WindowWidth, WindowWitdhAPI] = useState(Math.ceil(window.innerWidth/100));
  const[WindowHeight, WindowHeightAPI] = useState(Math.ceil(window.innerHeight/100));
  const SquareArray = [];

  for (let indexHeight = 0; indexHeight < WindowHeight; ++indexHeight) {
    for (let indexWidth = 0; indexWidth < WindowWidth; ++indexWidth) {
      var SquareX = indexWidth * 100;
      var SquareY = indexHeight * 100;
      SquareArray.push({ x: SquareX, y: SquareY});
    }
  }

  const order = useRef(SquareArray.map((_,index)=>index));
  const [springs, springsAPI] = useSprings(SquareArray.length, fn(order.current));


  let AppOutput =
  <div>
    <AppDisplay style={{width:'100vw', height: '100vh', backgroundColor: '#030D26',position: 'relative'}}>
          {SquareArray.map(({x,y})=> <LoopTrue x={x} y={y}/>)}
    </AppDisplay>
  </div>

  return (
    <div>
      {AppOutput}
    </div>
  )
}

// class App extends React.Component{
//     constructor(props){
//       super(props)
//       this.state ={
//         w: '100vw',
//         h: '100vh',
//         backgroundColor: '#030D26',
//         position: 'relative',
//       }
//     }

//     render(){
//       var WindowWidth = window.innerWidth;
//       var WidthRound = Math.ceil(WindowWidth / 100);
//       var WindowHeight = window.innerHeight;
//       var HeightRound = Math.ceil(WindowHeight / 100);
//       const TestArray = [];
//       for (let indexHeight = 0; indexHeight < HeightRound; ++indexHeight) {
//         for (let indexWidth = 0; indexWidth < WidthRound; ++indexWidth) {
//           var SquareX = indexWidth * 100;
//           var SquareY = indexHeight * 100;
//           TestArray.push({ x: SquareX, y: SquareY});
//         }
//       }
//       let AppOutput =
//         <div>
//           <AppDisplay style={{width:this.state.w, height: this.state.h, backgroundColor: this.state.backgroundColor,position: this.state.position}}>
//               {TestArray.map(({x,y})=> <LoopTrue x={x} y={y}/>)}
//           </AppDisplay>
//         </div>
//       return(
//         <div>
//             {this.props.children}
//             {AppOutput}
//         </div>
//       );
//     }
// }

export default AppFunction;
