import React from "react";

interface GlossaryProps {
    items: Item[]
}

interface Item {
    id: string
    term: string
    description: string
}

const Glossary = ({items}: GlossaryProps) => {
    return (
        <dl>
            { items.map(item => (
                <React.Fragment key={ item.id }>
                    <dt>{ item.term }</dt>
                    <dd>{ item.description }</dd>
                </React.Fragment>
            )) }
        </dl>
    );
}

export default Glossary;
