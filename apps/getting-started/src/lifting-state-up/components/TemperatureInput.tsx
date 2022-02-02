import { ChangeEvent } from "react";
import BoilingVerdict from "./BoilingVerdict";

interface ScaleNameInterface {
    [char: string]: string
}

const scaleNames: ScaleNameInterface = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

interface TemperatureInputInterface {
    scale: string,
    temperature: string,
    onTemperatureChange: (value: string) => void
}


const TemperatureInput = ({scale, temperature, onTemperatureChange}: TemperatureInputInterface) => {

    //const [temperature, setTemperature] = useState('')


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onTemperatureChange(e.target.value)
        //setTemperature(e.target.value);
    }

    return (
        <fieldset>
            <legend>Enter temperature in { scaleNames[scale] }:</legend>
            <input
                value={ temperature }
                onChange={ handleChange } />
            <BoilingVerdict
                celsius={ parseFloat(temperature) } />
        </fieldset>
    );
}

export default TemperatureInput;
