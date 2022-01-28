const LoginButton = ({onClick}: { onClick: () => void }) => {
    return (
        <button onClick={ onClick }>
            Login
        </button>
    );
}

export default LoginButton;
