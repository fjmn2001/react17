interface User {
    firstName: string
    lastName: string
}

export default function App() {
    function formatName(user: User): string {
        return user.firstName + ' ' + user.lastName;
    }

    const user: User = {
        firstName: 'Harper',
        lastName: 'Perez'
    };

    return (
        <>
            <h1>
                Hello, { formatName(user) }!
            </h1>
        </>
    );
}
