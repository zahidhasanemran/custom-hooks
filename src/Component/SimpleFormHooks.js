import React, { useState } from "react";
import UseInputState from "../custom-hooks/useInputState";

export default function SimpleFormHooks() {

    // const [email, setEmail] = useState("");
    // const handleChange = (e) => {
    //     setEmail(e.target.value);
    // }

    const [age, handleAge, reset] = UseInputState();

    return(
        <div>
            {/* <h1> You entered: {email} </h1>
            <input 
                type="text"
                value={email}
                onChange={handleChange}
            />

            <button onClick={()=> setEmail("")}>Submit</button> */}

            <h1> You entered: {age} </h1>
            <input 
                type="text"
                value={age}
                onChange={handleAge}
            />

            <button onClick={reset}>Submit</button>
        </div>
    )
}