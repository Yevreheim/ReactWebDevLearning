import React from "react";

function OpacityBackground(props){
    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            position: 'absolute',
            bottom: '0',
            opacity: 0.5, 
            backgroundColor: '#0A014F'}}/>
    )
}
export default OpacityBackground;