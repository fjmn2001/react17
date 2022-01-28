import UserGreeting from "./UserGreeting";
import GuestGreeting from "./GuestGreeting";

const Greeting = ({isLoggedIn}: { isLoggedIn: boolean }) => {
    if (isLoggedIn) {
        return <UserGreeting />;
    }

    return <GuestGreeting />;
}

export default Greeting;
