import React, { useState } from 'react';
import './Calculator.css'; // Assuming you have a corresponding CSS file

const Calculator = () => {
    const [display, setDisplay] = useState('');
    const [operator, setOperator] = useState(null);
    const [previousValue, setPreviousValue] = useState(null);
    const [clearState, setClearState] = useState('CE'); // Track whether button shows "CE" or "C"

    const handleNumberClick = (value) => {
        // Add number to display and switch button to "C"
        setDisplay((prev) => (prev === '' ? value : prev + value));
        setClearState('C'); // Switch to "C" after entering numbers
    };

    const handleOperatorClick = (operator) => {
        if (display === '') return;
        setPreviousValue(display);
        setOperator(operator);
        setDisplay('');
    };

    const handleClear = () => {
        if (clearState === 'C') {
            // "C" removes the last digit (like a backspace)
            setDisplay((prev) => prev.slice(0, -1));
            // If display is cleared, switch back to "CE"
            if (display.length <= 1) {
                setClearState('CE');
            }
        } else {
            // "CE" clears everything: the display, the operator, and the previous value
            setDisplay('');
            setOperator(null);
            setPreviousValue(null);
            setClearState('CE');
        }
    };

    const handleEquals = () => {
        if (!operator || previousValue === null) return;
        const currentValue = parseFloat(display);
        const prevValue = parseFloat(previousValue);

        let result;
        switch (operator) {
            case '+':
                result = prevValue + currentValue;
                break;
            case '-':
                result = prevValue - currentValue;
                break;
            case '×':
                result = prevValue * currentValue;
                break;
            case '÷':
                result = prevValue / currentValue;
                break;
            default:
                return;
        }

        setDisplay(result.toString());
        setOperator(null);
        setPreviousValue(null);
        setClearState('CE'); // After calculation, switch back to "CE"
    };

    return (
        <div className='calculator-container'>
            <h1 className='calculator-title'>Calculator Program</h1>
            <div className="calculator-panel">
                <input type="text" id="display" value={display} disabled />
                <div className="buttons">
                    <div>
                        <button className="buttonCal operator" disabled>MC</button>
                        <button className="buttonCal operator" disabled>MR</button>
                        <button className="buttonCal operator" disabled>M+</button>
                        <button className="buttonCal operator" disabled>M-</button>
                        <button className={"buttonCal " + (clearState === 'CE' ? 'clear-mode' : 'backspace-mode')} onClick={handleClear}>{clearState}</button>
                    </div>
                    <div>
                        <button className="buttonCal number" onClick={() => handleNumberClick('7')}>7</button>
                        <button className="buttonCal number" onClick={() => handleNumberClick('8')}>8</button>
                        <button className="buttonCal number" onClick={() => handleNumberClick('9')}>9</button>
                        <button className="buttonCal operator" onClick={() => handleOperatorClick('÷')}>÷</button>
                        <button className="buttonCal operator" disabled>√</button>
                    </div>
                    <div>
                        <button className="buttonCal number" onClick={() => handleNumberClick('4')}>4</button>
                        <button className="buttonCal number" onClick={() => handleNumberClick('5')}>5</button>
                        <button className="buttonCal number" onClick={() => handleNumberClick('6')}>6</button>
                        <button className="buttonCal operator" onClick={() => handleOperatorClick('×')}>×</button>
                        <button className="buttonCal operator" disabled>%</button>
                    </div>
                    <div>
                        <button className="buttonCal number" onClick={() => handleNumberClick('1')}>1</button>
                        <button className="buttonCal number" onClick={() => handleNumberClick('2')}>2</button>
                        <button className="buttonCal number" onClick={() => handleNumberClick('3')}>3</button>
                        <button className="buttonCal operator" onClick={() => handleOperatorClick('-')}>-</button>
                        <button className="buttonCal operator" disabled>1/x</button>
                    </div>
                    <div>
                        <button className="buttonCal number" onClick={() => handleNumberClick('0')}>0</button>
                        <button className="buttonCal number" onClick={() => handleNumberClick('.')}>.</button>
                        <button className="buttonCal operator" disabled>+/-</button>
                        <button className="buttonCal operator" onClick={() => handleOperatorClick('+')}>+</button>
                        <button className="buttonCal operator" onClick={handleEquals}>=</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
