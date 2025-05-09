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
        <>
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
             <img
                        src="src/assets/perexodfirsttwo.png"
                        alt="StarCard"
                        style={{
                            position: 'absolute',
                            top: '181%',  /* Поднимаем выше на 20px */
                            right: '670px',  /* Выдвигаем вправо на 20px */
                            zIndex: '1'
                        }}
                    />
            {/* Вторая секция */}
            <section id="SecondBlock">
                <div className="container">
                    <h2 className="centered-title">
                        <font color="#000000">Talk. Listen. Get inspired <br />
                            by every minute of it.</font>
                    </h2>
                    <div className="Columns">
                        <div className="FirstColumn">
                            <div className="image-container">
                                <img src="src/assets/thinkcolumn.svg" alt="ThinkColumn" />
                            </div>
                            <p className="TextColumn">
                                <font color="#000000">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                                    Curabitur ac ultrices odio.</font>
                            </p>
                        </div>
                        <div className="SecondColumn">
                            <div className="image-container">
                                <img src="src/assets/ideacolun.svg" alt="Idea" />
                            </div>
                            <p className="TextColumn">
                                <font color="#000000">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                                    Curabitur ac ultrices odio.</font>
                            </p>
                        </div>
                    </div>
                    <div className="PodcastCard">
                        <p className="Dwoetochie"><font color="#CD4631">“</font></p>
                        <p className="CardPodcast"><font color="#000000">One of the best daily podcasts that <br />
                            covers every topic on Spotify.</font></p>
                        <div className="InfoAvtor"><img src="src/assets/avatarCard.png" alt="CardAvatar" />
                            <p><font color="#000000">John Smith,</font></p>
                            <img src="src/assets/SpotifyCard.png" alt="CardAvatar" />
                            <p><font color="#000000"><b>Social Community Manager</b></font></p></div>
                    </div>
                    <img
                        src="src/assets/StarCard.png"
                        alt="StarCard"
                        style={{
                            position: 'absolute',
                            top: '58%',  /* Поднимаем выше на 20px */
                            right: '130px',  /* Выдвигаем вправо на 20px */
                            zIndex: '1'
                        }}
                    />
                    <img
                        src="src/assets/LineCard.png"
                        alt="LineCard"
                        style={{
                            position: 'absolute',
                            left: '130px',  
                            top: '78%', 
                            transform: 'translateY(-20%)', 
                            zIndex: '1'
                        }}
                    />
                </div>
            </section>
        </>
    )
}

export default Landing;