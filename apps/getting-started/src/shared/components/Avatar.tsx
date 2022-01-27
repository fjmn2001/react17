interface User {
    avatarUrl: string
    name: string
}

const Avatar = ({user}: { user: User }) => {
    return (
        <img className="Avatar"
             src={ user.avatarUrl }
             alt={ user.name }
        />
    );
}

export default Avatar;
