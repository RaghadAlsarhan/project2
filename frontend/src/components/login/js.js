import React, {useState} from "react";


function Test(){
const [count, setCount] = useState(0);

    function decrease(){
    setCount(count - 1);
    }
    return(
        <div>
        <h1>{count}</h1>
       <button onClick={decrease}>-</button>
       </div>
    )
}
export default Test;