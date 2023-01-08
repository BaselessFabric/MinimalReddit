import React from "react";

export default function Header(props) {
    return (
        <div className="header">
            <h1>Minimal Reddit Client</h1>
            <h2>/r/{props.subreddit}</h2>
        </div>
    );
}
