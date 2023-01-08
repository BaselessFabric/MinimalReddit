import React from "react";
import "./SideNav.css";

export default function SideNav() {
    const logo = require("./images/Reddit_logo_full_1.png");
    const menus = [
        { to: "/r/popular", text: "Popular" },
        { to: "/r/all", text: "All" },
        { to: "/r/random", text: "Random" },
    ];

    const subreddits = ["funny", "help", "this is an example", "animals"];

    return (
        <div className="sidenav">
            <div className="sidenav-logo">
                <img src={logo} alt="Reddit Logo" />
            </div>
            <div className="sidenav-search">
                <input type="test" name="search" placeholder="Search" />
            </div>
            <div className="sidenav-links">
                <ul className="sitenav-menu">
                    {menus.map((menu) => (
                        <li>
                            <a href={menu.to}>{menu.text}</a>
                        </li>
                    ))}
                </ul>
                <hr />
                <ul className="sitenav-subreddit">
                    {subreddits.map((subreddit) => (
                        <li>
                            <a href={`/r/${subreddit}`}>{subreddit}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
