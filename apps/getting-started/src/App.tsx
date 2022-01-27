import Welcome from "./shared/components/Welcome";
import Comment from "./shared/components/Comment";
import Form from "./shared/components/Form";
import Toggle from "./shared/components/Toggle";

interface User {
    firstName: string
    lastName: string
}

export default function App() {
    const user: User = {
        firstName: 'Harper',
        lastName: 'Perez'
    };

    return (
        <>
            <Welcome name={ user.firstName } />
            <Welcome name={ user.lastName } />
            <h2>It is { new Date().toLocaleTimeString() }.</h2>
            <hr />
            <Comment author={ {name: "Francisco", avatarUrl: "#"} } text={ "First comment" } />
            <Comment author={ {name: "José", avatarUrl: "#"} } text={ "Second comment" } />
            <Form />
            <Toggle />
        </>
    );
}
