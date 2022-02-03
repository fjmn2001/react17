import { ReactElement } from "react";

interface FancyBorderProp {
    color: string
    children: ReactElement[]
}

const FancyBorder = ({color, children}: FancyBorderProp) => {
    return (
        <div className={ 'FancyBorder FancyBorder-' + color }>
            { children }
        </div>
    );
}

export default FancyBorder;
