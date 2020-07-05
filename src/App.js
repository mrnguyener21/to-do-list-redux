/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from 'react'

import { add } from './actions'
import { useDispatch, useSelector } from 'react-redux'

import styles from './App.module.css'

const App = () => {
    const [task, setTask] = useState();
    const counter = useSelector((state)=>state.counter);
    const dispatch = useDispatch;
    return (
        <div>
            <div>
                <input placeholder='Add Task' value={task} onChange={(e)=>setTask(e.target.value)}/>
                <button onclick={() => dispatch(add(task))}>ADD</button> 
                /*this should dispatch the add action to add the value task value to the state for the counter reducer. For some reason, it is not updating. I am not sure if it is because it is not reading the ADD case or if the data is not being transported correctly */

                <button onClick={() => console.log(task)}>check task</button>
                <button onClick={() => console.log(add())}>check add</button>
                <button onClick={() => console.log(counter)}>check counter</button>
            </div>
                <div className={styles.counter}>
                    {counter}
                    {counter.map((value) => <li>{value}</li>)}
                </div>

        </div>
    )
}

export default App;
