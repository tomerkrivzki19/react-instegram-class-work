import React, { useContext } from 'react'
import { MyContext } from './ContextProvider';

function ContextConsumer() {
    const user = useContext(MyContext);
    console.log(user);
    
  return (
    <div>

      <p>hi--err מדפיס פעמיים</p>
    </div>
  )
}

export default ContextConsumer