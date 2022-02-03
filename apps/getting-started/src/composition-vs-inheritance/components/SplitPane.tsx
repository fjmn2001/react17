import { ReactElement } from "react";

interface SplitPaneProps {
    left: ReactElement
    right: ReactElement
}

const SplitPane = ({left, right}: SplitPaneProps) => {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                { left }
            </div>
            <div className="SplitPane-right">
                { right }
            </div>
        </div>
    );
}

export default SplitPane;
