import { React, useEffect, useState } from "react";
import "./Posts.css";

const Post = (props) => {
    return (
        <div className="post">
            <div className="post-title">
                <a
                    href={"https://www.reddit.com" + props.post.permalink}
                    target={"_blank"}
                    rel={"noreferrer"}
                >
                    {props.post.title}
                </a>
            </div>

            <div className="post-author">{"/u/" + props.post.author}</div>
        </div>
    );
};

function Posts(props) {
    const [articles, setArticles] = useState([]);
    // const [subreddit, setSubreddit] = useState("webdev");

    useEffect(() => {
        fetch("https://www.reddit.com/r/" + props.subreddit + ".json", {
            mode: "cors",
            credentials: "include",
        }).then((res) => {
            if (res.status !== 200) {
                console.log("EROROR");
                return;
            }

            res.json().then((data) => {
                if (data !== null) {
                    setArticles(data.data.children);
                }
            });
        });
    }, [props.subreddit]);
    return (
        <div id="posts">
            {articles !== null
                ? articles.map((article, index) => (
                      <Post key={index} post={article.data} />
                  ))
                : ""}
        </div>
    );
}

export default Posts;
