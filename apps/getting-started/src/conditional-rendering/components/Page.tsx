import WarningBanner from "./WarningBanner";
import { useState } from "react";

const Page = () => {
    const [showWarning, setShowWarning] = useState(false)

    const handleToggleClick = () => {
        setShowWarning(showWarning => (!showWarning));
    }

    return (
        <div>
            <WarningBanner warn={ showWarning } />
            <button onClick={ handleToggleClick }>
                { showWarning ? 'Hide' : 'Show' }
            </button>
        </div>
    );
}

export default Page;
