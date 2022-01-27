import Avatar from "./Avatar";

interface User {
    avatarUrl: string
    name: string
}

const UserInfo = ({user}: { user: User }) => {
    return (
        <div className="UserInfo">
            <Avatar user={ user } />
            <div className="UserInfo-name">
                { user.name }
            </div>
        </div>
    );
}

export default UserInfo;
