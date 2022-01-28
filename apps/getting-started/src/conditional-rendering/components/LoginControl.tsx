import Greeting from "./Greeting";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useState } from "react";

const LoginControl = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    }

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    }

    let button;
    if (isLoggedIn) {
        button = <LogoutButton onClick={ handleLogoutClick } />;
    } else {
        button = <LoginButton onClick={ handleLoginClick } />;
    }

    return (
        <div>
            <Greeting isLoggedIn={ isLoggedIn } />
            { button }
        </div>
    );
}

export default LoginControl;
