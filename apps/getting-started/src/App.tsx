import Welcome from "./shared/components/Welcome";
import Comment from "./shared/components/Comment";
import Form from "./shared/components/Form";
import Toggle from "./shared/components/Toggle";
import LoginControl from "./conditional-rendering/components/LoginControl";
import Mailbox from "./conditional-rendering/components/Mailbox";
import Page from "./conditional-rendering/components/Page";

interface User {
    firstName: string
    lastName: string
}

export default function App() {
    const user: User = {
        firstName: 'Harper',
        lastName: 'Perez'
    };
    const messages = ['React', 'Re: React', 'Re:Re: React'];

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
            <LoginControl />
            <Mailbox unreadMessages={ messages } />
            <Page />
        </>
    );
}
