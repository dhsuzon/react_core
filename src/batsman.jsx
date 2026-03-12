

import { useState } from "react"
export default function Batsman(){
    let [run,setRun] = useState(0);

    const handleSingle = () => setRun(run++);
    const handleSix = () => setRun(run+=6);
    const handleFour = () => setRun(run+=4);
        
  

    return (
        <div>
          <h2>Player bangladesh</h2>
          <h3>Score: {run}</h3>
          <button onClick={handleSingle}>single</button>
          <button onClick={handleFour}>six</button>
          <button onClick={handleSix}>six</button>
        </div>
    )
}