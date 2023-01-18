import React from "react";
import { FC } from "react";
import { Header } from "./Header";
import Posts from "./Posts";
import "./Main.css";

type MainProps = {
    subreddit: string;
};

export const Main: FC = (props: MainProps) => {
    return (
        <div className="main">
            <Header subreddit={props.subreddit} />
            <Posts subreddit={props.subreddit} />
        </div>
    );
};
