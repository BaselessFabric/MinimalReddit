import React, { ReactElement } from "react";
import { FC } from "react";
import { Header } from "./Header";
import Posts from "./Posts";
import "./Main.css";

type MainProps = {
    subreddit: any;
};

export const Main: FC<MainProps> = (props): ReactElement => {
    return (
        <div className="main">
            <Header subreddit={props.subreddit} />
            <Posts subreddit={props.subreddit} />
        </div>
    );
};
