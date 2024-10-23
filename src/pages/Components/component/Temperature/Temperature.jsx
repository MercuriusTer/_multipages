import { useEffect, useState } from 'react';
import Variable from "../Variable/Variable";
import './Temperature.css'

function Temperature({name, initCelsius}) {
    const [celcius, setCelsius] = useState(0);
    const [fahrenheit, setFahrenheit] = useState(0);
    const [kelvin, setKelvin] = useState(0);

    useEffect(() => {
        setCelsius(initCelsius || 0);
        setFahrenheit(celciusToFahrenheit(initCelsius || 0))
        setKelvin(celciusToKelvin(initCelsius || 0))
    }, [initCelsius]);

    const handleCelsiusChange = (value) => {
        setCelsius(value);
        setFahrenheit(celciusToFahrenheit(value));
        setKelvin(celciusToKelvin(value));
    };
    
    const handleFahrenheitChange = (value) => {
        setFahrenheit(value);
        setCelsius(fahrenheitToCelsius(value));
        setKelvin(fahrenheitToKelvin(value));
    };    
    const handleKelvinChange = (value) => {
        setKelvin(value);
        setCelsius(kelvinToCelsius(value));
        setFahrenheit(kelvinToFahrenheit(value));
    };

    // c => f
    const celciusToFahrenheit = (celcius) => (celcius) * 9 / 5 + 32;
    // c => k
    const celciusToKelvin = (celcius) => (celcius + 273.15);
    // f => c
    const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9;
    // f => k
    const fahrenheitToKelvin = (fahrenheit) => (fahrenheit + 459.67) * 5 / 9;
    // k => c
    const kelvinToCelsius = (kelvin) => kelvin - 273.15;
    // k => f
    const kelvinToFahrenheit = (kelvin) => (kelvin * 9 / 5) - 459.67;

    return ( 
        <div className="tempu-contrainer ">
            <h3 className="tempu-title">{name || 'Temperature'}</h3>
            <h2 className="tempu-display">
                <span className="badge bg-primary">{celcius.toFixed(2)} °C</span>
                <span className="badge bg-primary">{fahrenheit.toFixed(2)} °F</span>
                <span className="badge bg-primary">{kelvin.toFixed(2)} °K</span>
            </h2>
            <div className="tempu-variables">
            <Variable name="Celsius" value={celcius} setValue={handleCelsiusChange} />
        <Variable name="Fahrenheit" value={fahrenheit} setValue={handleFahrenheitChange} />
        <Variable name="Kelvin" value={kelvin} setValue={handleKelvinChange} />
            </div>
        </div>
     );
}

export default Temperature;