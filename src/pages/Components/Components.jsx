import { useState } from 'react'

import './Components.css';

import Counter from './component/Counter/Counter'
import Timer from './component/Timer/Timer'
import Add from './component/Add/add'
import Temperature from './component/Temperature/Temperature'


function Components() {
    return (
        <div className='component-container'>
            <h1 className='component-title'>React Components</h1>
            <div className='component-display'>
                <div>
                    <Counter name={''} value={10} />
                    <Timer name={''} value={''} />
                </div>
                <div>
                    <Add name={''} />
                </div>
            </div>
            <div className='display-bottom'>
                <Temperature name={''} initCelsius={0} />
            </div>
            <h2 style={{ color: 'whitesmoke', fontWeight: 'bold' }}>นายวรเดช อาจวิชัย รหัส 66080240</h2>
        </div >
    );
}

export default Components;