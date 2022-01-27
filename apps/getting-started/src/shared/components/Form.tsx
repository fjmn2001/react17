import { FormEvent } from "react";

const Form = () => {
    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        console.log('You clicked submit.');
    }

    return (
        <form onSubmit={ handleSubmit }>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;
