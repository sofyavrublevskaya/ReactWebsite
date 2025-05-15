import React, { useState, useEffect } from "react";
import { useMutation } from '@tanstack/react-query';
import { submitContactForm } from '../services/contactService';

function AboutUs() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const mutation = useMutation({
        mutationFn: submitContactForm,
        onSuccess: () => {
            alert('Сообщение отправлено успешно!');
            // Здесь можно сбросить форму или выполнить другие действия
        },
        onError: (error) => {
            alert(`Ошибка: ${error.message}`);
        }
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        mutation.mutate(formData);
    };

    // Карусель для отзывов (третья секция)
    const testimonialPhotos = [
        "src/assets/sponsor1.png",
        "src/assets/sponsor2.png",
        "src/assets/sponsor3.png"
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
            <section id="FirstTwoBlock">
                <div className="container">
                    <div className="MainText">
                        <h1><font color="#000000">About</font><br />
                            <font color="#CD4631">Pod of Cast</font></h1>
                    </div>
                    <div className="UndderMaiinText"><p><font color="#4D4D4D">Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt <br />
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam–quis.</font></p></div>
                    <div className="ButtonMainPage">
                        <button className="Button-TwoMainPage ">
                            BECOME SPONSOR
                        </button>
                        <button className="Button-MainPage">
                            SUBSCRIBE
                        </button>
                    </div>
                    <img src="src/assets/Mvitok.svg" alt="Mvitok" />
                    <img src="src/assets/Iscra.png" alt="Iscra" />
                </div>
            </section>
            <img
                src="src/assets/VectorAbout.png"
                alt="StarCard"
                style={{
                    position: 'absolute',
                    top: '103%',
                    right: '20px',
                    zIndex: '1'
                }}
            />
            <img
                src="src/assets/AboutCol1.png"
                alt="StarCard"
                style={{
                    position: 'absolute',
                    top: '95%',
                    right: '970px',
                    zIndex: '1'
                }}
            />
            <img
                src="src/assets/AboutCol2.png"
                alt="StarCard"
                style={{
                    position: 'absolute',
                    top: '95%',
                    right: '570px',
                    zIndex: '1'
                }}
            />
            <img
                src="src/assets/AboutCol3.png"
                alt="StarCard"
                style={{
                    position: 'absolute',
                    top: '95%',
                    right: '170px',
                    zIndex: '1'
                }}
            />
            <img
                src="src/assets/SparkleHistory.png"
                alt="StarCard"
                style={{
                    position: 'absolute',
                    top: '221%',
                    right: '900px',
                    zIndex: '1'
                }}
            />
            <section id="SecondTwoBlock">
                <div className="container">
                    <h2 className="centered-titleThird">
                        <font color="#000000">What our listeners say</font>
                    </h2>
                    <p className="ThirdBlockText">
                        <font color="#4D4D4D">Their experience throughout every platform</font>
                    </p>
                    <div className="HistoryTwo"><img src="src/assets/AboutHistory.png" alt="AboutHistory" /></div>
                    <h2 className="CentrMicro">
                        <font color="#000000">About and History</font>
                    </h2>
                    <div className="ColumnsHistory">
                        <p className="TextHistory"><font color="#4D4D4D">
                            Eu non <font color="#000000"><b>diam</b></font> phasellus vestibulum lorem. Fringilla est ullamcorper <br />
                            eget nulla facilisi etiam dignissim. Id diam vel quam <font color="#000000"><b>elementum<br />
                                pulvinar.</b></font>
                            <br />
                            <br />
                            Elementum eu facilisis sed odio morbi quis commodo.<br />
                            Sed odio morbi quis commodo odio aenean sed adipiscing odio <br />
                            diam. uno fablotoson louw uit.</font>
                        </p>
                        <p className="TextHistory"><font color="#4D4D4D">
                            Lorem ipsum dolor sit amet,<font color="#000000"><b>consectetur adipiscing</b></font>elit. Quam<br />
                            pellentesque at bibendum euismod tellus duis cursus dignissim odio. <br />
                            Sit vulputate et integer in. Sit vel, senectus iaculis morbi.<font color="#000000"><b>Amet</b></font><br />
                            interdum imperdiet laoreet <font color="#000000"><b>morbi</b></font> tincidunt fermentum, libero. Ante<br />
                            enim eget.
                            <br />
                            <br />
                            Viverra at porttitor accumsan. <u>Orci non here</u></font>
                        </p>
                    </div>
                    <div className="lineAb"><img src="src/assets/lineAb.png" alt="lineAb" /></div>
                </div>
            </section>
            <img
                src="src/assets/ScribbleFounder.png"
                alt="StarCard"
                style={{
                    position: 'absolute',
                    top: '283%',
                    right: '330px',
                    zIndex: '1'
                }}
            />
            <img
                src="src/assets/Sparkle.png"
                alt="StarCard"
                style={{
                    position: 'absolute',
                    top: '400%',
                    right: '950px',
                    zIndex: '1'
                }}
            />
            <section id="ThreeTwoBlock">
                <div className="container">
                    <h2 className="centered-titleThird">
                        <font color="#000000">Founder and Main Host</font>
                    </h2>
                    <div className="ThreeTwoColumns">
                        <img src="src/assets/host1.png" alt="host1" />
                        <img src="src/assets/host2.png" alt="host2" />
                    </div>
                </div>
            </section>
            <section id="FourTwoBlock">
                <div className="container">
                    <h2 className="centered-titleThird">
                        <font color="#000000">Our Sponsor</font>
                    </h2>
                    <p className="ThirdBlockText">
                        <font color="#4D4D4D">Our current official sponsor</font>
                    </p>
                    {/* Карусель с фотографиями отзывов */}
                    <div className="testimonials-carousel1">
                        <div className="carousel-container3">
                            <div className="carousel-track">
                                {getVisibleTestimonials().map((photo, index) => (
                                    <div key={`${testimonialIndex}-${index}`} className="carousel-slide3">
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
                src="src/assets/VectorForma.png"
                alt="StarCard"
                style={{
                    position: 'absolute',
                    top: '505%',
                    right: '520px',
                    zIndex: '1'
                }}
            />
            <img
                src="src/assets/ShiningstarsForm.png"
                alt="StarCard"
                style={{
                    position: 'absolute',
                    top: '525%',
                    right: '180px',
                    zIndex: '1'
                }}
            />
            <img
                src="src/assets/VectorAbout.png"
                alt="StarCard"
                style={{
                    position: 'absolute',
                    top: '575%',
                    right: '1350px',
                    zIndex: '1'
                }}
            />
            <img
                src="src/assets/PerexodLast.png"
                alt="StarCard"
                style={{
                    position: 'absolute',
                    top: '618%',
                    right: '670px',
                    zIndex: '1', height: '150px', weight: '150px'
                }}
            />
            <img
                src="src/assets/Sparkle8.png"
                alt="StarCard"
                style={{
                    position: 'absolute',
                    top: '682%',
                    right: '585px',
                    zIndex: '1', height: '120px', weight: '120px'
                }}
            />
            <section id="FiveTwoBlock">
                <div className="container">
                    <h2 className="centered-titleThird">
                        <font color="#000000">Get in touch</font>
                    </h2>
                    <p className="ThirdBlockText">
                        <font color="#4D4D4D">Send your message to us</font>
                    </p>
                    <div className="LineTwoForm"><img src="src/assets/lineform.png" alt="lineform" /></div>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="fullName">Full name*</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    placeholder="Sofya Vrublevskaya"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email*</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="vrublevskaya@gmail.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="phone">Phone*</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="Phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Subject*</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    placeholder="Subject..."
                                    value={formData.subject}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-groupmess">
                            <label htmlFor="message">Message*</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Your message goes here..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <div className="form-row">
                            <p>*required</p>
                            <button type="submit">SEND MESSAGE</button>
                        </div>
                    </form>
                </div>
            </section>
            <img
                src="src/assets/left8.png"
                alt="StarCard"
                style={{
                    position: 'absolute',
                    top: '663%',
                    right: '1085px',
                    zIndex: '1'
                }}
            />
            <img
                src="src/assets/right8.png"
                alt="StarCard"
                style={{
                    position: 'absolute',
                    top: '637.5%',
                    right: '0px',
                    zIndex: '1'
                }}
            />
        </>
    )
}

export default AboutUs;