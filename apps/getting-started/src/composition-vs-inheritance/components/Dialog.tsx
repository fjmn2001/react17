import FancyBorder from "./FancyBorder";
import { ReactElement } from "react";

interface DialogProps {
    title: string
    message: string
    children: ReactElement[]
}

const Dialog = ({title, message, children}: DialogProps) => {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                { title }
            </h1>
            <p className="Dialog-message">
                { message }
            </p>
            <>
                { children }
            </>
        </FancyBorder>
    );
}

export default Dialog;
