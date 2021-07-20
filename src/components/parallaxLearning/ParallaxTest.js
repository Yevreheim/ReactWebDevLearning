import React, { useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import AnimatedText from './CustomTextAnimation';
import LogoFunction from './Logo';

class ParallaxTestClass extends React.Component {


    render() {
        return (
            <div style={{
                width: '100vw',
                height: '100vh',
                position: 'relative'

            }}>
                <Parallax ref={ref => (this.parallax = ref)} pages={4} style={{ position: 'relative' }}>
                    <ParallaxLayer
                        sticky={{ start: 0, end: 3 }}
                        style={{ 
                            width: '100vw', 
                            height: '50px', 
                            position: 'absolute',
                            color: '#FFFFFF',
                            fontSize: '27px',
                            userSelect: 'none',
                            fontFamily: 'Montserrat Regular'
                         }}
                    >
                        <div 
                        //Home
                        onClick={() => this.parallax.scrollTo(0)}
                        style={{
                            padding: '20px',
                            width: '100px',
                        }}
                        >
                            <AnimatedText TextWidth={75} Text="Home"/>
                        </div>
                        <div 
                        //About
                        onClick={() => this.parallax.scrollTo(1)}
                        style={{
                            padding: '20px',
                            position: 'absolute',
                            right: '280px',
                            width: '100px',
                            top: 0

                        }}>
                            <AnimatedText TextWidth={75} Text="About"/>
                        </div>
                        <div 
                        //Projects
                        onClick={() => this.parallax.scrollTo(2)}
                        style={{
                            padding: '20px',
                            position: 'absolute',
                            right: '160px',
                            width: '100px',
                            top: 0

                        }}>
                            <AnimatedText TextWidth={95} Text="Projects"/>
                        </div>
                        <div 
                        //Contact
                        onClick={() => this.parallax.scrollTo(3)}
                        style={{
                            padding: '20px',
                            position: 'absolute',
                            right: '20px',
                            width: '100px',
                            height: '50px',
                            top: 0

                        }}>
                            <AnimatedText TextWidth={95} Text="Contact"/>
                        </div>

                    </ParallaxLayer>
                    <ParallaxLayer
                        //BottomRight
                        sticky={{ start: 0, end: 3 }}
                        style={{ width: '150px', height: '150px', position: 'absolute', top: '81vh', left: '91vw' }}
                    >
                        <LogoFunction />
                    </ParallaxLayer>
                    <ParallaxLayer
                        //Page 1
                        offset={0}
                        onClick={() => this.parallax.scrollTo(1)}
                        // style ={{background: `linear-gradient(100deg, #CB997E 0%, #DDBEA9 100%)`}}
                        style={{ background: '#253237' }}
                    >
                        <div style={{
                            color: '#FFFFFF',
                            userSelect: 'none',
                            fontSize: '96px',
                            fontFamily: 'Montserrat Regular',
                            padding: '123px'
                        }}>
                            <br />
                            Heyo, I'm Victor <br />
                            Welcome to my <br />
                            Humble Abode.
                        </div>
                    </ParallaxLayer>

                    <ParallaxLayer
                        //Page 2
                        offset={1}
                        onClick={() => this.parallax.scrollTo(2)}
                        style={{ background: `linear-gradient(280deg, #FFE8D6 0%, #A39BA8  100%)` }} />

                    <ParallaxLayer
                        //Page 3
                        offset={2}
                        onClick={() => this.parallax.scrollTo(3)}
                        style={{ background: `linear-gradient(280deg, #fffeff 0%, #B3F2DD  100%)` }} />
                    <ParallaxLayer
                        //Page 4
                        offset={3}
                        onClick={() => this.parallax.scrollTo(0)}
                        style={{ background: `linear-gradient(145deg, #84DCC6 0%, #DDBEA9  100%)` }} />
                </Parallax>

            </div>
        )
    }

}

export default ParallaxTestClass;

