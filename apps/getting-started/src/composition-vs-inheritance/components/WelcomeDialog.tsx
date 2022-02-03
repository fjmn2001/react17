import Dialog from "./Dialog";
import { ChangeEvent, useState } from "react";

const WelcomeDialog = () => {
    const [login, setLogin] = useState('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLogin(e.target.value)
    }

    const handleSignUp = () => {
        alert(`Welcome aboard, ${ login }!`);
    }

    return (
        <Dialog
            title="Welcome"
            message="Thank you for visiting our spacecraft!">
            <input value={ login }
                   onChange={ handleChange } />
            <button onClick={ handleSignUp }>
                Sign Me Up!
            </button>
        </Dialog>
    );
}

export default WelcomeDialog;
