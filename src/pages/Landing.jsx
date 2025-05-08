import React, { useState, useEffect } from "react";

function Landing() {
    const carouselImages = [
        "src/assets/cover1.png",
        "src/assets/cover2.png",
        "src/assets/cover3.png",
        "src/assets/cover4.png",
        "src/assets/cover5.png"
    ];

    const [currentStartIndex, setCurrentStartIndex] = useState(0);
    const visibleItems = 3;

    const getVisibleImages = () => {
        const result = [];
        for (let i = 0; i < visibleItems; i++) {
            const index = (currentStartIndex + i) % carouselImages.length;
            result.push(carouselImages[index]);
        }
        return result;
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentStartIndex((prevIndex) =>
                (prevIndex + 1) % carouselImages.length
            );
        }, 3000);
        return () => clearInterval(interval);
    }, [carouselImages.length]);
    return (
        <section id="FirstBlock">
            <div className="container">
                <div className="MainText">
                    <h1><font color="#000000">Your Daily</font><br />
                        <font color="#CD4631">Podcast</font></h1>
                </div>
                <div className="UndderMaiinText"><p><font color="#4D4D4D">We cover all kinds of categories and <br />
                    a weekly special guest.</font></p></div>
                <div className="ButtonMainPage">
                    <button className="Button-MainPage">
                        SUBSCRIBE
                    </button>
                </div>
                <img src="src/assets/Mvitok.svg" alt="Mvitok" />
                <img src="src/assets/Iscra.png" alt="Iscra" />
            </div>
            {/* Модифицированная карусель */}
            {/* Полноширинная карусель */}
            <div className="full-width-carousel-section">
                <div className="carousel-container">
                    <div className="carousel-track">
                        {getVisibleImages().map((image, index) => (
                            <div
                                key={index}
                                className="carousel-slide"
                                style={{ backgroundImage: `url(${image})` }}
                            />
                        ))}
                    </div>
                    <div className="carousel-indicators">
                        {carouselImages.map((_, index) => (
                            <button
                                key={index}
                                className={`indicator ${index >= currentStartIndex && index < currentStartIndex + visibleItems ? 'active' : ''}`}
                                onClick={() => setCurrentStartIndex(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="container">
                {/* Блок "Supported by" */}
                <div className="supported-by-section">
                    <div className="container">
                        <div className="block-line"></div>
                        <p className="supported-by-text">Supported by:</p>
                        <div className="supported-by-logos">
                            <div className="logo-container">
                                <img src="src/assets/spotify2.0.png" alt="Spotify" className="logo" />
                            </div>
                            <div className="logo-container">
                                <img src="src/assets/google_podcats2.0.png" alt="Google Podcasts" className="logo" />
                            </div>
                            <div className="logo-container">
                                <img src="src/assets/youtube2.0.png" alt="YouTube" className="logo" />
                            </div>
                        </div><div className="block-line">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Landing;