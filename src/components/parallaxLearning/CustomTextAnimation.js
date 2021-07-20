import React, { useState} from 'react'
import { useSpring, animated } from 'react-spring'

export default function AnimatedText(props) {
        const [isHovered, setIsHovered] = useState(false);
        const {width, opacity} = useSpring({
            width: isHovered ? props.TextWidth : 0,
            opacity: isHovered ? 100 : 0,
            config: {duration: 200}
        })
        return(
            <animated.div onMouseEnter={()=> setIsHovered(!isHovered)} onMouseLeave={()=> setIsHovered(!isHovered)}
            >  
                {props.Text}
                <animated.div style={{
                    width,
                    opacity,
                    height: '3px',
                    borderRadius: '1',
                    backgroundColor: '#FFFFFF'
                }}>
                </animated.div>
            </animated.div>
        )
}