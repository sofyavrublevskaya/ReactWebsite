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
            <img
                src="src/assets/SparkleFive.png"
                alt="StarCard"
                style={{
                    position: 'absolute',
                    top: '632%',
                    right: '40px',
                    zIndex: '1', height: '240px', weight: '240px'
                }}
            />
            <section id="FiveBlock">
                <div className="container">
                    <h2 className="centered-titleThird">
                        <font color="#000000">Recent Episodes</font>
                    </h2>
                    <p className="ThirdBlockText">
                        <font color="#4D4D4D">Available on your favorite platform</font>
                    </p>
                    <div className="FiveColumns">
                        <img src="src/assets/1epizod.png" alt="epizodes" />
                        <img src="src/assets/3epizod.png" alt="epizodes" />
                        <img src="src/assets/5epizod.png" alt="epizodes" />
                        <img src="src/assets/2epizod.png" alt="epizodes" />
                        <img src="src/assets/4epizod.png" alt="epizodes" />
                        <img src="src/assets/6 epizod.png" alt="epizodes" />
                    </div>
                    <div className="ButtonFiveBlock">
                        <button className="Button-FivePage">
                            BROWSE ALL EPISODES
                        </button>
                    </div>
                </div>
            </section>
            <img
                src="src/assets/perexodTwoThree.png"
                alt="StarCard"
                style={{
                    position: 'absolute',
                    top: '775%',
                    right: '670px',
                    zIndex: '1', height: '150px', weight: '150px'
                }}
            />
            <img
                src="src/assets/SparkleSix.png"
                alt="StarCard"
                style={{
                    position: 'absolute',
                    top: '793%',
                    right: '1050px',
                    zIndex: '1', height: '120px', weight: '120px'
                }}
            />
            <img
                src="src/assets/StarSixBlock.png"
                alt="StarCard"
                style={{
                    position: 'absolute',
                    top: '820%',
                    right: '70px',
                    zIndex: '2', height: '200px', weight: '200px'
                }}
            />
            <img
                src="src/assets/VectorSixBlock.png"
                alt="StarCard"
                style={{
                    position: 'absolute',
                    top: '910%',
                    right: '1275px',
                    zIndex: '2', height: '120px', weight: '120px'
                }}
            />
            <section id="SixBlock">
                <div className="container">
                    <h2 className="centered-titleThird">
                        <font color="#000000">Become our sponsor</font>
                    </h2>
                    <p className="ThirdBlockText">
                        <font color="#4D4D4D">Get exclusive episodes, merch and more</font>
                    </p>

                    <div className="SixColumns">
                        <div className="MemberBlock">
                            <p className="GlavSix">Member</p>
                            <p className="SixTwoText"><font color="#4D4D4D">Lorem ipsum dolor sit amet consectet <br />
                                cing elit, sed do eiusmod tempor.</font></p>
                            <div className="ButtonSixBlock">
                                <button className="Button-SixPage">
                                    SUBSCRIBE
                                </button>
                                <div className="SaleMonthBoth">
                                    <p className="SaleSixBlock"><font color="#CD4631">$9.99</font></p>
                                    <p className="SaleMonthSixBlock"><font color="#4D4D4D">/month</font> </p>
                                </div>
                            </div>
                        </div>
                        <div className="FamilyBlock">
                            <p className="GlavSix">Family</p>
                            <p className="SixTwoText"><font color="#4D4D4D">Lorem ipsum dolor sit amet consectet <br />
                                cing elit, sed do eiusmod tempor.</font></p>
                            <div className="ButtonSixBlock">
                                <button className="Button-SixPage">
                                    SUBSCRIBE
                                </button>
                                <div className="SaleMonthBoth">
                                    <p className="SaleSixBlock"><font color="#CD4631">$14.99</font></p>
                                    <p className="SaleMonthSixBlock"><font color="#4D4D4D">/month</font> </p>
                                </div>
                            </div>
                        </div>
                        <div className="MemberBlock">
                            <p className="GlavSix">Official</p>
                            <p className="SixTwoText"><font color="#4D4D4D">Lorem ipsum dolor sit amet consectet <br />
                                cing elit, sed do eiusmod tempor.</font></p>
                            <div className="ButtonSixBlock">
                                <button className="Button-SixPage">
                                    SUBSCRIBE
                                </button>
                                <div className="SaleMonthBoth">
                                    <p className="SaleSixBlock"><font color="#CD4631">$29.99</font></p>
                                    <p className="SaleMonthSixBlock"><font color="#4D4D4D">/month</font> </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="SixColumnsTwo">
                        <div className="MemberBlock">
                            <p className="SixTwoTextTwo"><font color="#4D4D4D">What’s included:</font></p>
                            <p className="SpisokSixText"><font color="#000000">• Exclusive Content <br />
                                • 5% Discount on Merch <br />
                                • Join the Community <br />
                                • Livestreaming Access</font></p>
                        </div>
                        <div className="FamilyBlock">
                            <p className="SixTwoTextTwo"><font color="#4D4D4D">What’s included:</font></p>
                            <p className="SpisokSixText"><font color="#000000"><b>• Everything in Tier 1</b> <br />
                                • Free tickets to Events <br />
                                • Limited Edition Merch <br />
                                • Promote your Product <br />
                                • Request Topic </font></p>
                        </div>
                        <div className="MemberBlock">
                            <p className="SixTwoTextTwo"><font color="#4D4D4D">What’s included:</font></p>
                            <p className="SpisokSixText"><font color="#000000"><b>• Everything in Tier 2 </b><br />
                                • Exclusive Badge on Livestreaming <br />
                                • Become an Official Sponsor <br />
                                • Early Access to All Episodes <br />
                                • Free Stikers and Merch </font></p>
                        </div>
                    </div>
                </div>
            </section>
            <img
                src="src/assets/perexodTwoThree.png"
                alt="StarCard"
                style={{
                    position: 'absolute',
                    top: '920%',
                    right: '670px',
                    zIndex: '1', height: '150px', weight: '150px'
                }}
            />
            <section id="SevenBlock">
                <div className="container">
                    <h2 className="centered-titleThird">
                        <font color="#000000">Article and News</font>
                    </h2>
                    <p className="ThirdBlockText">
                        <font color="#4D4D4D">News, tips, tricks and more</font>
                    </p>
                    <div className="SevenColumn"><img src="src/assets/imgSevenBl1.png" alt="imgSevenBl1" />
                        <img src="src/assets/imgSevenBl2.png" alt="imgSevenBl1" /></div>
                    <div className="ButtonFiveBlock">
                        <button className="Button-8Page">
                            BROWSE ALL
                        </button>
                    </div>
                </div>
            </section>
            <img
                src="src/assets/sevzvezd.png"
                alt="StarCard"
                style={{
                    position: 'absolute',
                    top: '965%',
                    right: '1200px',
                    zIndex: '1', height: '185px', weight: '184px'
                }}
            />
            <img
                src="src/assets/ScribbleSevZv.png"
                alt="StarCard"
                style={{
                    position: 'absolute',
                    top: '1035%',
                    right: '80px',
                    zIndex: '1', height: '240px', weight: '240px'
                }}
            />
            <img
                src="src/assets/PerexodLast.png"
                alt="StarCard"
                style={{
                    position: 'absolute',
                    top: '1078%',
                    right: '670px',
                    zIndex: '1', height: '150px', weight: '150px'
                }}
            />
            <img
                src="src/assets/Sparkle8.png"
                alt="StarCard"
                style={{
                    position: 'absolute',
                    top: '1142%',
                    right: '585px',
                    zIndex: '1', height: '120px', weight: '120px'
                }}
            />
            <section id="e8Block">
                <div className="container">
                    <div className="imgbeta"><img src="src/assets/beta.png" alt="beta" /></div>
                    <h2 className="centered-titleEight">
                        <font color="#000000">Available now <br />
                            Pod of Cast App</font>
                    </h2>
                    <p className="ThirdBlockText">
                        <font color="#4D4D4D">Available on your favorite platform</font>
                    </p>
                    <div className="Button8Block">
                        <button className="Button-8Page">
                            DOWNLOAD NOW
                        </button>
                    </div>
                    <p className="EthBlockText">
                        <font color="#4D4D4D">Content also available on:</font>
                    </p>
                    <div className="imgplatfom"><img src="src/assets/platform.png" alt="platform" /></div>
                </div>
            </section>
            <img
                src="src/assets/left8.png"
                alt="StarCard"
                style={{
                    position: 'absolute',
                    top: '1123%',
                    right: '1085px',
                    zIndex: '1'
                }}
            />
              <img
                src="src/assets/right8.png"
                alt="StarCard"
                style={{
                    position: 'absolute',
                    top: '1097%',
                    right: '0px',
                    zIndex: '1'
                }}
            />
        </>
    )
}

export default Landing;