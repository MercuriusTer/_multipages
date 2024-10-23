import React, { useState, useEffect } from 'react';
import './Timer.css';

function Timer(props) {
    const [seconds, setSeconds] = useState(props.value || 0);
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);

    // useEffect(() => {
    //   setSeconds(value || 0)
    // }, [value])
  
    useEffect(() => {
      let intervalId;
      if (isActive) {
        intervalId = setInterval(() => {
          setSeconds(seconds + 1);
        }, 1000);
      }
      return () => clearInterval(intervalId)
    }, [isActive, seconds]);
  
    const handleToggle = () => {
      setIsActive(!isActive);
      setIsPaused(!isPaused);
    };
  
    const handleReset = () => {
      setIsActive(false);
      setIsPaused(true);
      setSeconds(0);
    };
  
    const formatTime = (time) => {
        const days = Math.floor(time / 86400);
        const hours = Math.floor((time % 86400) / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;

        // ถ้าหากไม่เอาเป็น Format D H M S
        // return `${days.toString().padStart(2, '0')}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (days > 0) {
          return `${days.toString().padStart(2, '0')}d:${hours.toString().padStart(2, '0')}h:${minutes.toString().padStart(2, '0')}m:${seconds.toString().padStart(2, '0')}s`;
        }
        else if (hours > 0) {
          return `${hours.toString().padStart(2, '0')}h:${minutes.toString().padStart(2, '0')}m:${seconds.toString().padStart(2, '0')}s`;
        }
        else if (minutes > 0) {
          return `${minutes.toString().padStart(2, '0')}m:${seconds.toString().padStart(2, '0')}s`;
        }
        else {
          return `${seconds.toString().padStart(2, '0')}s`;
        }
        
      };
  
    return (
      <div className="timer-container">
        <h3 className='timer-title'>{props.name || 'Timer'}</h3>
        <p className='timer-display'>{formatTime(seconds)}</p>
        <button onClick={handleReset} className='timer-button btn btn-secondary'>Reset</button>
        <button className={isPaused ? 'resume timer-button btn btn-success' : 'pause timer-button btn btn-danger'} onClick={handleToggle}>
          {isPaused ? 'Resume' : 'Pause'}
        </button>
      </div>
    );
  }

export default Timer;