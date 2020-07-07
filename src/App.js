import React, { useState } from 'react'
import { add } from './action'
import { useDispatch, useSelector } from 'react-redux'


const App = () => {
    const [value, setValue] = useState('');
    const tasks = useSelector((state) => state.tasks)
    return (
        
        <div>
            <input placeholder='task' value={value} onChange={(e) => setValue(e.target.value)}/>
            <button onClick={() => dispatchEvent(add(tasks))} >add </button>
        </div>
    )
}

export default App;
