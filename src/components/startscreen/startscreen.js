import React, { useState} from "react";
import { useSpring, animated } from 'react-spring';


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
        arrayResult.push({ x: SquareX, y: SquareY, backgroundColor: '#E1ECF4'});
      }
    }
    return arrayResult;
 }
  
function Nicaea (){
    let WindowsArray = [];
     // eslint-disable-next-line
    WindowsArray = ScreenToArray();
    const [state, stateAPI] = useState(false);
    const {opacity, transform} = useSpring({
        opacity: state ? 1 : 0,
        transform: 
            `rotate(45deg) 
            perspective(600px) 
            rotateX(${state ? -180 : 0}deg) 
            rotateY(${state ? 180 : 0}deg)
            `,
        config: { mass: 5, tension: 750, friction: 100 },
    })
      
    return(
        <div onClick={() => stateAPI(state => !state)}>
            {/* Background */}
            <animated.div style={{ 
                width: '100vw', 
                height: '100vh',
                position: 'absolute', 
                bottom: '0', 
                opacity: opacity.to(o => 0.95 - o), 
                background: `linear-gradient(100deg, #96fbc4 0%, #061e32 100%)`,
                // backgroundColor: '#061e32'
            }}/>

            <animated.div style= {{
                width: 180,
                height: 180,
                borderRadius: 16,
                background: '#b51b72',
                opacity: opacity.to(o => 1 - o),
                position: 'absolute',
                bottom: '45vh',
                left: '45vw',
                transform,}}>

                <div style={{
                    transform: 'rotate(-45deg)',
                    position: 'absolute', 
                    bottom: '40px', 
                    left: '15px', 
                    userSelect: 'none',
                    fontSize: '70px',
                    // fontFamily: "Cocogoose Demibold",
                    color: '#f3fafb'}}>
                    Start
                </div>
            </animated.div>
        </div>
    )
}

export default Nicaea;