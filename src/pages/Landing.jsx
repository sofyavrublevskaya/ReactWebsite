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

    // Карусель для отзывов (третья секция)
    const testimonialPhotos = [
        "src/assets/1otziv.png",
        "src/assets/2otziv.png",
        "src/assets/3otziv.png"
    ];

    const [testimonialIndex, setTestimonialIndex] = useState(0);
    const visibleTestimonials = 2;

    const nextTestimonial = () => {
        setTestimonialIndex(prev =>
            prev + visibleTestimonials >= testimonialPhotos.length ? 0 : prev + 1
        );
    };

    const prevTestimonial = () => {
        setTestimonialIndex(prev =>
            prev === 0 ? testimonialPhotos.length - visibleTestimonials : prev - 1
        );
    };

    const getVisibleTestimonials = () => {
        let endIndex = testimonialIndex + visibleTestimonials;
        if (endIndex > testimonialPhotos.length) {
            return [
                ...testimonialPhotos.slice(testimonialIndex),
                ...testimonialPhotos.slice(0, endIndex - testimonialPhotos.length)
            ];
        }
        return testimonialPhotos.slice(testimonialIndex, endIndex);
    };



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
                    top: '181%',
                    right: '670px',
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
                            top: '58%',
                            right: '130px',
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
            <img
                src="src/assets/perexodTwoThree.png"
                alt="StarCard"
                style={{
                    position: 'absolute',
                    top: '348%',
                    right: '670px',
                    zIndex: '1'
                }}
            />
            <section id="ThirdBlock">
                <div className="container">
                    <h2 className="centered-titleThird">
                        <font color="#000000">What our listeners say</font>
                    </h2>
                    <p className="ThirdBlockText">
                        <font color="#4D4D4D">Their experience throughout every platform</font>
                    </p>

                    {/* Карусель с фотографиями отзывов */}
                    <div className="testimonials-carousel">
                        <div className="carousel-container2">
                            <div className="carousel-track">
                                {getVisibleTestimonials().map((photo, index) => (
                                    <div key={`${testimonialIndex}-${index}`} className="carousel-slide2">
                                        <img src={photo} alt={`Testimonial ${testimonialIndex + index + 1}`} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Контейнер для стрелок под фотографиями */}
                        <div className="carousel-arrows-bottom">
                            <button className="carousel-arrow prev" onClick={prevTestimonial}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 18L9 12L15 6" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>

                            <button className="carousel-arrow next" onClick={nextTestimonial}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 6L15 12L9 18" stroke="#CD4631" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <img
                src="src/assets/Sparkle.png"
                alt="StarCard"
                style={{
                    position: 'absolute',
                    top: '365%',
                    right: '1120px',
                    zIndex: '1'
                }}
            />
            <img
                src="src/assets/perexodTwoThree.png"
                alt="StarCard"
                style={{
                    position: 'absolute',
                    top: '450%',
                    right: '670px',
                    zIndex: '1', height: '150px', weight: '150px'
                }}
            />
              <img
                src="src/assets/fouracsess.png"
                alt="StarCard"
                style={{
                    position: 'absolute',
                    top: '455%',
                    right: '310px',
                    zIndex: '1'
                }}
            />
            <section id="FourBlock">
                <div className="container">
                    <h2 className="centered-titleThird">
                        <font color="#000000">Membership benefits</font>
                    </h2>
                    <p className="ThirdBlockText">
                        <font color="#4D4D4D">Become our sponsor and get all benefits</font>
                    </p>
                    <div className="FourColumns">
                        <div className="column">
                            <div className="column-item">
                                <img src="src/assets/1icon.png" alt="1icon" />
                                <p className="Top4"><b>Topic by Request</b></p>
                                <p className="Preimus4">Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.</p>
                            </div>
                        </div>

                        <div className="column">
                            <div className="column-item">
                                <img src="src/assets/2icon.png" alt="2icon" />
                                <p className="Top4"><b>Exclusive Content</b></p>
                                <p className="Preimus4">Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.</p>
                            </div>
                        </div>

                        <div className="column">
                            <div className="column-item">
                                <img src="src/assets/3icon.png" alt="3icon" />
                                <p className="Top4"><b>Join the Community</b></p>
                                <p className="Preimus4">Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.</p>
                            </div>
                        </div>
                    </div>

                    <div className="FourColumnsTwo">
                        <div className="column">
                            <div className="column-item">
                                <img src="src/assets/4icon.png" alt="1icon" />
                                <p className="Top4"><b>Livestreaming Access</b></p>
                                <p className="Preimus4">Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.</p>
                            </div>
                        </div>

                        <div className="column">
                            <div className="column-item">
                                <img src="src/assets/5icon.png" alt="2icon" />
                                <p className="Top4"><b>Exclusive Episodes & Merch</b></p>
                                <p className="Preimus4">Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.</p>
                            </div>
                        </div>

                        <div className="column">
                            <div className="column-item">
                                <img src="src/assets/6icon.png" alt="3icon" />
                                <p className="Top4"><b>And much more!</b></p>
                                <p className="Preimus4">Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.</p>
                            </div>
                        </div>
                    </div>
                        <div className="ButtonFourBlock">
                            <button className="Button-MainPage">
                                SEE PRICING
                            </button>
                        </div>
                </div>
            </section>
            <img
                src="src/assets/perexodTwoThree.png"
                alt="StarCard"
                style={{
                    position: 'absolute',
                    top: '599%',
                    right: '670px',
                    zIndex: '1', height: '150px', weight: '150px'
                }}
            />
        </>
    )
}

export default Landing;