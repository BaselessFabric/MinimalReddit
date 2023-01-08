import { React, useEffect, useState } from "react";
import "./Posts.css";

const posts = [
    {
        title: "My favorite programming language is JavaScript",
        author: "u/javascript_lover",
    },
    {
        title: "Why I think Python is the best language for beginners",
        author: "u/python_fan",
    },
    {
        title: "The benefits of learning C++",
        author: "u/cpp_enthusiast",
    },
];

const Post = (props) => {
    return (
        <div className="post">
            <div className="post-title">
                <a href={"https://www.reddit.com" + props.post.permalink}>
                    {props.post.title}
                </a>
            </div>

            <div className="post-author">{"/u/" + props.post.author}</div>
        </div>
    );
};

function Posts() {
    const [articles, setArticles] = useState([]);
    const [subreddit, setSubreddit] = useState("webdev");

    useEffect(() => {
        fetch("https://www.reddit.com/r/javascript.json").then((res) => {
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
    }, [subreddit]);
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
