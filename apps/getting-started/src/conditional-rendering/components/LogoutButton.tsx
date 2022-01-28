const LogoutButton = ({onClick}: { onClick: () => void }) => {
    return (
        <button onClick={ onClick }>
            Logout
        </button>
    );
}

export default LogoutButton;
