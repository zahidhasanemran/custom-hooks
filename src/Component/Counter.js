import React, {useState} from 'react';
import useToggle from '../custom-hooks/useToggle';


function Counter(props) {

    const [isHappy, setHappy] = useToggle(true);
    // const toggleHappy = () => {
    //     setHappy(!isHappy);
    // }

    const [inLove, setLove] =  useToggle(false);
    // const toggleLove = () => {
    //     setLove(!inLove);
    // }

    
  

    return (
        <div>
            <h1 onClick={setHappy}>{isHappy ? "Happy" : "UnHappy" }</h1>
            <h1 onClick={setLove}>{inLove ? "In Love" : "Single" }</h1>
        </div>
    );
}

export default Counter;