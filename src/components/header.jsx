import React from "react";
import { Link } from "react-router-dom";


function Header() {
    return (
        <nav>
            <div class="container" >
                <div>
                    <Link to="/">
                        <img src="src/assets/logo.png" alt="Logotip" />
                    </Link>
                </div>
                <ul>
                    <Link><li>Episodes</li></Link>
                    <Link><li>About</li></Link>
                    <Link><li>More</li></Link>
                </ul>
                <div className="navigation-buttons">
                    <Link to="/" className="recent-episodes-btn">
                        RECENT EPISODES
                    </Link>
                    <Link to="/" className="subscribe-btn">
                        SUBSCRIBE
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Header;