import "./App.css";
import { SideNav } from "./SideNav";
import { Main } from "./Main";
import { useState, FC } from "react";

const App: FC = () => {
    const [subreddit, setSubreddit] = useState<any>();

    return (
        <div className="app">
            <div className="app-container">
                <SideNav subreddit={subreddit} setSubreddit={setSubreddit} />
                <Main subreddit={subreddit} />
            </div>
        </div>
    );
};

export default App;
