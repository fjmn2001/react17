import { ChangeEvent, FormEvent, useState } from "react";

const NameForm = () => {
    const [value, setValue] = useState("")
    const [textAreaValue, setTextAreaValue] = useState("")
    const [selectValue, setSelectValue] = useState("")

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }
    const handleTexAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setTextAreaValue(event.target.value);
    }

    const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectValue(event.target.value);
    }

    const handleSubmit = (event: FormEvent) => {
        console.log({
            value,
            textAreaValue,
            selectValue
        })
        event.preventDefault();
    }

    return (
        <form onSubmit={ handleSubmit }>
            <div>
                <label>
                    Name:
                    <input type="text" value={ value } onChange={ handleChange } />
                </label>
            </div>
            <div>
                <label>
                    Essay:
                    <textarea value={ textAreaValue } onChange={ handleTexAreaChange } />
                </label>
            </div>
            <div>
                <label>
                    Pick your favorite flavor:
                    <select value={ selectValue } onChange={ handleSelect }>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
            </div>
            <input type="submit" value="Submit" />
        </form>
    );
}

export default NameForm;
