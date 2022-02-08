import React from "react";
import FancyButton from "../components/FancyButton";

const ref = React.createRef<HTMLButtonElement>();

const Index = () => {
    return (
        <FancyButton ref={ ref }>Click me!</FancyButton>
    );
}

export default Index;
