import { MouseEvent, useState } from "react";

const Toggle = () => {
    const [isToggleOn, setIsToggleOn] = useState(true)

    const handleClick = (e: MouseEvent) => {
        e.preventDefault()
        setIsToggleOn(prevState => (!prevState));
    }

    return (
        <button onClick={ handleClick }>
            { isToggleOn ? 'ON' : 'OFF' }
        </button>
    );
}

export default Toggle;
