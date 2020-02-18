import React, {useState} from 'react';

function Counter(props) {

    const [isHappy, setHappy] = useState(true);
    const toggleHappy = () => {
        setHappy(!isHappy);
    }

    const [inLove, setLove] =  useState(false);
    const toggleLove = () => {
        setLove(!inLove);
    }
  

    return (
        <div>
            <h1 onClick={toggleHappy}>{isHappy ? "Happy" : "UnHappy" }</h1>
            <h1 onClick={toggleLove}>{inLove ? "In Love" : "Single" }</h1>
        </div>
    );
}

export default Counter;