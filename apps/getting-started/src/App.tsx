import Welcome from "./shared/components/Welcome";
import Comment from "./shared/components/Comment";
import Form from "./shared/components/Form";
import Toggle from "./shared/components/Toggle";
import LoginControl from "./conditional-rendering/components/LoginControl";
import Mailbox from "./conditional-rendering/components/Mailbox";
import Page from "./conditional-rendering/components/Page";
import NumberList from "./lists-and-keys/components/NumberList";
import Blog from "./lists-and-keys/components/Blog";
import NameForm from "./forms/components/NameForm";
import Calculator from "./lifting-state-up/components/Calculator";

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
    const numbers = [1, 2, 3, 4, 5];
    const posts = [
        {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
        {id: 2, title: 'Installation', content: 'You can install React from npm.'}
    ];

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
            <NumberList numbers={ numbers } />
            <Blog posts={ posts } />
            <NameForm />
            <Calculator />
        </>
    );
}
