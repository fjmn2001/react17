import { useState } from "react";
import TemperatureInput from "./TemperatureInput";
import BoilingVerdict from "./BoilingVerdict";

function tryConvert(temperature: string, convert: (input: number) => number) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function toCelsius(fahrenheit: number) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius: number) {
    return (celsius * 9 / 5) + 32;
}

const Calculator = () => {
    const [temperature, setTemperature] = useState('')
    const [scale, setScale] = useState('c')

    const handleCelsiusChange = (temperature: string) => {
        setScale('c');
        setTemperature(temperature);
    }

    const handleFahrenheitChange = (temperature: string) => {
        setScale('f');
        setTemperature(temperature);
    }


    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
        <div>
            <TemperatureInput
                scale="c"
                temperature={ celsius }
                onTemperatureChange={ handleCelsiusChange } />
            <TemperatureInput
                scale="f"
                temperature={ fahrenheit }
                onTemperatureChange={ handleFahrenheitChange } />
            <BoilingVerdict
                celsius={ parseFloat(celsius) } />
        </div>
    );
}

export default Calculator;
