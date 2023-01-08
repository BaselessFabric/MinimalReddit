import React from "react";
import Header from "./Header";
import Posts from "./Posts";
import "./Main.css";

export default function Main(props) {
    return (
        <div className="main">
            <Header subreddit={props.subreddit} />
            <Posts subreddit={props.subreddit} />
        </div>
    );
}
