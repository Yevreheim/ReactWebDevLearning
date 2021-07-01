import React, {useState} from "react";

function RandomInt(max) {
    return Math.floor(Math.random() * max);
}
// eslint-disable-next-line
function ButtonFunction(props){
    const ColourArray = ['#46e891', '#E5446D', '#FF8966', '#FEC9F1', '#FFC233', '#4381C1'];
    const [BGUnit, BGUnitIncrement] = useState(0);
    const [BackgroundColorTest, BGIncrement] = useState(ColourArray[RandomInt(6)]);
    console.log(BackgroundColorTest);
    return(
        <div>
            {/*Each State change rerenders Return causing the background colour to change since it's rerendering the Random*/}
            <button style={{width: '100px', height: '100px', backgroundColor: BackgroundColorTest}} 
                    onClick={()=>{
                        BGUnitIncrement(BGUnit+ 1) 
                        BGIncrement(BackgroundColorTest => ColourArray[RandomInt(6)])
                    }}
                    >
                {BGUnit}
            </button>
        </div>
    )
}

export default ButtonFunction;