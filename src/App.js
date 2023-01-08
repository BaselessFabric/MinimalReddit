import "./App.css";
import SideNav from "./SideNav";
import Main from "./Main";
import { useState } from "react";

function App() {
    const [subreddit, setSubreddit] = useState();

    return (
        <div className="app">
            <div className="app-container">
                <SideNav subreddit={subreddit} setSubreddit={setSubreddit} />
                <Main subreddit={subreddit} />
            </div>
        </div>
    );
}

export default App;
