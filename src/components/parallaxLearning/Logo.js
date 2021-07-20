import React, { useState} from 'react'
import { useSpring, animated } from 'react-spring'


export default function LogoFunction(){
    const Names = ['イェブ','Yev','クーエル','Kuelle'];
    const FontSizes = ['31px','31px','31px','31px'];
    // eslint-disable-next-line
    const [NameShown, NamesAPI] = useState(Names[0]);
    // eslint-disable-next-line
    const [FontShown, FontAPI] = useState(FontSizes[0]); 
    const {transform, opacity} = useSpring({

    })
    const styles = useSpring({
        loop: true,
        from: { rotateY: 0 },
        to: { rotateY: 360 },
        config: {duration: 5000},
      })
    return(
        <animated.div
            style = {{
                color: '#FFFFFF',
                fontSize: '31px',
                padding: '0px',
                position: 'absolute',
                bottom: '-12px',
                right: '20px',
                textAlign: 'right',
                userSelect: 'none',
                ...styles
            }}>
            <div style ={{
                width: 120,
                height: 120,
                borderRadius: 90,
                backgroundColor: '#FFFFFF'
            }}>
                <div style ={{
                    width: 110,
                    height: 110,
                    borderRadius: 90,
                    backgroundColor: '#253237',
                    opacity: '100',
                    position: 'absolute',
                    left: '0px',
                    top: '0px'
                }}>
                    <div style={{
                        position: 'absolute',
                        bottom: '30px',
                        left: '10px'
                    }}>
                        {NameShown}
                    </div>
                </div>
            </div>
        </animated.div>
    )
}