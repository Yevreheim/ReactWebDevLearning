import { useSpring, animated } from 'react-spring'
import React, {useEffect} from 'react';
import { useState } from 'react';

function RandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function LoopTrue(props) {
  const ColourArray = ['#46e891', '#E5446D', '#FF8966', '#FEC9F1', '#FFC233', '#4381C1'];
  var RandomColour = ColourArray[RandomInt(6)];

  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) 
                  rotateX(${flipped ? 180 : 0}deg) 
                  rotateZ(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 750, friction: 80 },
  })

  const styles = useSpring({
    loop: {reverse: true},
    from: { opacity: 1},
    config: {duration: getRandomArbitrary(750,2000)},
    to: { opacity: 0, background: ColourArray[RandomInt(6)]},
  })
  // const { styles, api } = useSpring(() => ({
  //   opacity: 1
  // }))
  // useEffect(()=>{
  //   api.start({ from: 100, to: 0 })
  // },[])


  return (
    <div onMouseEnter={() => set(state => !state)} onClick={() => set(state => !state)}>
      <animated.div
        style={{
          width: 90,
          height: 90,
          backgroundColor: RandomColour,
          borderRadius: 16,
          position: 'fixed',
          bottom: props.y,
          left: props.x,
          transform,
          ...styles
        }}
      />
    </div>

  )
}

export default LoopTrue;