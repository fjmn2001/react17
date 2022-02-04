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
import WelcomeDialog from "./composition-vs-inheritance/components/WelcomeDialog";
import App2 from "./composition-vs-inheritance/components/App2";
import FilterableProductTable from "./thinking-in-react/components/FilterableProductTable";
import { Dispatch, useState } from "react";
import { getProducts, Product } from "./thinking-in-react/repository/ProductsRepository";

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

    //products
    const [products, setProducts]: [products: Product[], setProducts: Dispatch<any>] = useState([])

    const start = async () => {
        const response = await getProducts();
        setProducts(response);
    }
    start()

    return (
        <>
            <FilterableProductTable products={ products } />
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
            <WelcomeDialog />
            <App2 />
        </>
    );
}
