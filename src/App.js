/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from 'react'

import { add } from './actions'
import { useDispatch, useSelector } from 'react-redux'

import styles from './App.module.css'

const App = () => {
    const [value, setValue] = useState('');
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <input placeholder='Add Task' value={value} onChange={(e) => setValue(e.target.value)} />
                <button onClick={() => dispatch(add(value))}>ADD</button> 
            </div>
                <div className={styles.tasks}>
                    {tasks.map(({ value }) => <li>{value}</li>)}
                </div>
        </div>
    )
}

export default App;
