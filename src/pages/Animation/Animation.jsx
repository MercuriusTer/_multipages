import React, { useState, useEffect } from 'react';
import './Animation.css';

function Animation() {
    // State variables
    const fieldWidth = 800;
    const fieldHeight = 400;
    const ballSize = 150;
    const maxX = fieldWidth - ballSize - 6; // Max X considering ball size
    const maxY = fieldHeight - ballSize - 6; // Max Y considering ball size

    const [running, setRunning] = useState(false); // Pause/Run state
    const [goRight, setGoRight] = useState(true);
    const [goDown, setGoDown] = useState(true);
    const [x, setX] = useState((fieldWidth - ballSize) / 2); // Center the ball
    const [y, setY] = useState((fieldHeight - ballSize) / 2); // Center the ball
    const [vX] = useState(8); // velocity
    const [vY] = useState(8);
    const [angle, setAngle] = useState(0);
    const [angleSpin, setAngleSpin] = useState(Math.floor(Math.random() * 10 + 4));
    const [ballType, setBallType] = useState('None');

    // Change ball image based on the selected type
    const changeBall = (type) => {
        setBallType(type);
    };

    // Function to handle ball movement
    const calculate = () => {
        let newX = x;
        let newY = y;

        if (goRight) {
            newX += vX;
            if (newX >= maxX) {
                setGoRight(false);
                setAngleSpin(-Math.floor(Math.random() * 10 + 4));
            }
        } else {
            newX -= vX;
            if (newX <= 6) {
                setGoRight(true);
                setAngleSpin(Math.floor(Math.random() * 10 + 4));
            }
        }

        if (goDown) {
            newY += vY;
            if (newY >= maxY) {
                setGoDown(false);
                setAngleSpin(-Math.floor(Math.random() * 10 + 4));
            }
        } else {
            newY -= vY;
            if (newY <= 6) { // Changed to 0 to ensure it stays inside
                setGoDown(true);
                setAngleSpin(Math.floor(Math.random() * 10 + 4));
            }
        }

        setX(newX);
        setY(newY);
        setAngle((prevAngle) => prevAngle + angleSpin); // Update angle
    };

    // Effect to handle ball movement on interval when running
    useEffect(() => {
        if (running) {
            const interval = setInterval(calculate, 40); // 25 frames per second (1000ms / 25 = 40ms)
            return () => clearInterval(interval);
        }
    }, [running, x, y, goRight, goDown, angleSpin]);

    // Toggle run/pause
    const runClick = () => {
        setRunning((prevRunning) => !prevRunning);
    };

    // Handle keydown events for ball change
    useEffect(() => {
        const handleKeyDown = (event) => {
            switch (event.key) {
                case ' ':
                    runClick();
                    break;
                case '1':
                    changeBall('Basketball');
                    break;
                case '2':
                    changeBall('Football');
                    break;
                case '3':
                    changeBall('Volleyball');
                    break;
                case '4':
                    changeBall('Human');
                    break;
                case '5':
                    changeBall('Cartoon');
                    break;
                case '6':
                    changeBall('Logo');
                    break;
                case '0':
                    changeBall('None');
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className='animation-container'>
            <h1 className='animation-title'>Animation</h1>
            <div id="container">
                <div
                    id="field"
                    style={{ width: fieldWidth, height: fieldHeight, position: 'relative', border: '1px solid red', }}
                >
                    <div
                        id="ball"
                        style={{
                            border: '1px solid green',
                            width: ballSize,
                            height: ballSize,
                            left: x,
                            top: y,
                            position: 'relative',
                            transform: `rotate(${angle}deg)`,
                            backgroundImage: ballType !== 'None' ? `url('../../assets/ball/${ballType.toLowerCase()}.png')` : 'none',
                            backgroundSize: '115%',
                            backgroundPosition: 'center',
                        }}
                    ></div>
                </div>

                <div id="control">
                    <button className={`btn ${running ? 'btn-danger' : 'btn-success'}`} onClick={runClick} id="run">
                        <span className={`bi ${running ? 'bi-pause' : 'bi-play'}`}>
                            &nbsp;{running ? 'PAUSE' : 'RUN'}
                        </span>
                    </button>

                    {['None', 'Basketball', 'Football', 'Volleyball', 'Human', 'Cartoon', 'Logo'].map((type, index) => (
                        <React.Fragment key={index}>
                            <input
                                type="radio"
                                className="btn-check"
                                name="options-outlined"
                                id={`typeBall${index + 1}`}
                                autoComplete="off"
                                checked={ballType === type}
                                onChange={() => changeBall(type)}
                            />
                            <label
                                className={`btn btn-outline-${type === 'None' ? 'secondary' : 'primary'}`}
                                htmlFor={`typeBall${index + 1}`}
                            >
                                {type}
                            </label>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Animation;
