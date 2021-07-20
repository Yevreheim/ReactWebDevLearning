import { useSpring, animated } from 'react-spring'
import React from 'react';
import { useState } from 'react';

function RandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function LoopTrue(props) {
  const ColourArray = ['#46e891', '#E5446D', '#FF8966', '#FEC9F1', '#FFC233', '#4381C1'];
  //Green, Red, Orange, Pink, Yellow, Blue
  // const [BGUnit, BGUnitIncrement] = useState(RandomInt(6));
  const [BackgroundColorTest, BGIncrement] = useState(ColourArray[RandomInt(6)]);
  // eslint-disable-next-line
  const [SquareTime, SquareTimeAPI] = useState(getRandomArbitrary(500, 2000));

  //Figure out implementation of reset and reverse
  const styles = useSpring({
    to: { opacity: 0, },
    from: { opacity: 1, backgroundColor: BackgroundColorTest },
    loop: {reverse: true},
    // eslint-disable-next-line
    loop: true,
    onRest: {
       opacity: () => { BGIncrement(BackgroundColorTest => ColourArray[RandomInt(6)])},
      // duration: () => {SquareTimeAPI(SquareTime => getRandomArbitrary(500,2000))},
    },
    config: { duration: SquareTime },
  })

  return (
    <div>
      <animated.div
        style={{
          width: 90,
          height: 90,
          borderRadius: 16,
          position: 'fixed',
          bottom: props.y,
          left: props.x,
          opacity: 1,
          ...styles
        }}
      />
    </div>

  )
}

export default LoopTrue;