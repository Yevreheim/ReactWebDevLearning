import {useSpring, animated} from 'react-spring'
import React from 'react';

function LoopTrue(props) {
    const styles = useSpring({
      loop: true,
      from: { rotateX: 0, rotateY: 0, rotateZ: 0 },
      to: { rotateX: 0, rotateY: 0, rotateZ: 0 },
    })
    
  
    return (
      <animated.div
        style={{
          width: 90,
          height: 90,
          backgroundColor: props.backgroundColor,
          borderRadius: 16,
          position: 'fixed',
          bottom: props.y,
          left: props.x,
          ...styles,
        }}
      />
    )
  }

  export default LoopTrue;