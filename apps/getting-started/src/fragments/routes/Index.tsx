import Glossary from "../components/Glossary";

const items = [
    {id: '1', term: 'term 1', description: 'description 1'},
    {id: '2', term: 'term 2', description: 'description 2'}
];

const Index = () => {
    return (
        <Glossary items={ items } />
    );
}

export default Index;
