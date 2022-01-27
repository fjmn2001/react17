import UserInfo from "./UserInfo";

interface Author {
    avatarUrl: string
    name: string
}

const Comment = ({author, text}: { author: Author, text: string }) => {
    return (
        <div className="Comment">
            <UserInfo user={ author } />

            <div className="Comment-text">
                { text }
            </div>
        </div>
    );
}

export default Comment;
