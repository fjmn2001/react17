import React, { ForwardedRef, RefObject } from "react";

const FancyButton = React.forwardRef(({children}: { children: string }, ref: ForwardedRef<HTMLButtonElement>) => {
    const handleClick = () => {
        console.log((ref as RefObject<HTMLButtonElement>).current)
    }

    return (
        <button ref={ ref } className="FancyButton" onClick={ handleClick }>
            { children }
        </button>
    );
})

export default FancyButton;
