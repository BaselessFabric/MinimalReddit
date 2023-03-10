import React, { FC } from "react";

type HeaderProps = {
    subreddit: string;
};

export const Header: FC<HeaderProps> = (props) => {
    return (
        <div className="header">
            <h1>Minimal Reddit Client</h1>
            <h2>/r/{props.subreddit}</h2>
        </div>
    );
};
