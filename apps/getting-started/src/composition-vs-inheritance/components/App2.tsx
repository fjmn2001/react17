import SplitPane from "./SplitPane";

const App2 = () => {
    return (
        <SplitPane
            left={
                <h1>Contacts</h1>
            }
            right={
                <h1>Chat</h1>
            } />
    );
}

export default App2;
