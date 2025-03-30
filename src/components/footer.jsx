import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <section id="footer-background" className="full-width-section">
                <div className="container">
                    <div class="column column-1">
                        <div><Link to="/">
                            <img src="src/assets/logo.png" alt="Logotip" />
                        </Link>
                            <p className="rightlogo">©2021.</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>
                        <div>
                            <Link to="/">
                                <img src="src/assets/twitter.png" alt="Twitter" />
                            </Link>
                            <Link to="/">
                                <img src="src/assets/instagram.png" alt="Insta" />
                            </Link>
                            <Link to="/">
                                <img src="src/assets/tiktok.png" alt="TikTok" />
                            </Link>
                        </div>
                    </div>
                    <div class="column column-2"><p>About</p>
                        <p> <font color="#CD4631">Testimonials</font></p>
                        <p>Features</p>
                    </div>
                    <div class="column column-3"><p> <font color="#CD4631">Episodes</font></p>
                        <p>Pricing</p>
                        <p>Blog</p>
                    </div>
                    <div class="column column-4">
                        <p>Listen to episodes on your fav platform:</p>
                        <div>
                            <Link to="/">
                                <img src="src/assets/Google Podcast.png" alt="Google Podcast" />
                            </Link>
                            <Link to="/">
                                <img src="src/assets/Spotify.png" alt="Spotify" />
                            </Link>
                            <Link to="/">
                                <img src="src/assets/Youtube.png" alt="Youtube" />
                            </Link>
                        </div>
                        <p class="TextColumn">App available on:</p>
                        <div>
                            <Link to="/">
                                <img src="src/assets/app_store.png" alt="app_store" />
                            </Link>
                            <Link to="/">
                                <img src="src/assets/google_play.svg" alt="google_play" />
                            </Link>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <div class="footer-divider"></div>
                        <div class="footer-legal">
                            <span class="copyright">©2022. All Rights Reserved. <font color="#CD4631">Pod of Cost</font></span>
                            <div class="legal-links">
                                <a href="#" class="legal-link">Terms</a>
                                <span class="divider">-</span>
                                <a href="#" class="legal-link">Privacy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
}

export default Footer;
