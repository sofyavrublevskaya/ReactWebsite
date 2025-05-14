import React, { useState, useEffect } from "react";

function AboutUs() {
    return (
        <>
            <section id="FirstThreeBlock">
                <div className="container">
                    <div className="MainText">
                        <h1 className="BlogText2"><font color="#CD4631">TIPS & TRICKS</font></h1>
                        <h1 className="BlogText"><font color="#000000">Doodle Artwork 101</font><br /></h1>
                    </div>
                    {/* Центрируемый блок с изображениями */}
                    <div className="centered-images">
                        <img src="src/assets/tags.png" alt="tags" className="tags-img" />
                    </div>
                    <div className="centered-images2">
                        <img src="src/assets/socials.png" alt="socials" className="socials-img" />
                    </div>
                    <img src="src/assets/Mvitok.svg" alt="Mvitok" />
                    <img src="src/assets/Iscra.png" alt="Iscra" />
                </div>
            </section>
            <img
                src="src/assets/Scr3Block.png"
                alt="StarCard"
                style={{
                    position: 'absolute',
                    top: '205%',
                    right: '1120px',
                    zIndex: '1'
                }}
            />
            <img
                src="src/assets/Star3Page.png"
                alt="StarCard"
                style={{
                    position: 'absolute',
                    top: '270%',
                    right: '130px',
                    zIndex: '1'
                }}
            />
            <img
                src="src/assets/Vec3Page.png"
                alt="StarCard"
                style={{
                    position: 'absolute',
                    top: '300%',
                    right: '1280px',
                    zIndex: '1'
                }}
            />
            <section id="SecondThreeBlock">
                <img className="PhotoFull" src="src/assets/imgart.png" alt="imgart" />
                <div className="container">
                    <h2 className="Podphoto">
                        <font color="#000000">Doodle for our podcast background room</font>
                    </h2>
                    <div className="ColumnsArt">
                        <p className="TextArt"><font color="#4D4D4D">
                            Lorem ipsum dolor sit amet,<font color="black"><b>consectetur adipiscing</b></font> elit. Quam <br />
                            pellentesque at bibendum euismod tellus duis cursus dignissim odio. <br />
                            Sit vulputate et integer in.
                            <br />
                            <br />
                            Sit vel, senectus iaculis morbi. <font color="black"><b>Amet</b></font> interdum imperdiet laoreet <br />
                            <font color="black"><b>morbi</b></font>tincidunt fermentum, libero. Ante enim eget viverra at porttitor <br />
                            accumsan. <font color="black"><u>Orci non here</u></font> </font>
                        </p>
                        <p className="TextArt2"><font color="#4D4D4D"><br /><br />Quis dictum cursus faucibus mattis dignissim. Pellentes <br />
                            que purus in sed sodales in mauris molestie. Eleifend est cons <br />
                            ctetur interdum eu in auctor. Gravida leo et.
                        </font>
                        </p>
                    </div>
                    <div className="lineAb2"><img src="src/assets/lineAb.png" alt="lineAb" /></div>
                    <div className="PodcastCard2">
                        <p className="Dwoetochie"><font color="#CD4631">“</font></p>
                        <p className="CardPodcast2"><font color="#000000">Quote example goes in here...</font></p>
                        <div className="InfoAvtor"><img src="src/assets/avatarCard.png" alt="CardAvatar" />
                            <p><font color="#000000">John Smith,</font></p>
                            <img src="src/assets/SpotifyCard.png" alt="CardAvatar" />
                            <p><font color="#000000"><b>Social Community Manager</b></font></p></div>
                    </div>
                    <div className="ColumnsArt">
                        <div className="FirstColumnArt">
                            <p className="OnTextArt"><font color="#000000">Bullet list example:</font></p>
                            <p className="UnderTextArt"><font color="#4D4D4D">
                                <font color="#CD4631"><b>•</b></font> Lorem ipsum dolor sit amet, <font color="#000000"><b>consectetur adipiscing</b></font> elit. Quam <br />
                                pellentesque at bibendum euismod tellus duis curs<br />
                                us dignissim odio. Sit vulputate et integer in.
                                <br />
                                <br />
                                <br />
                                <font color="#CD4631"><b>•</b></font> Sit vel, senectus iaculis morbi. <font color="#000000"><b>Amet</b></font> interdum imperdiet laoreet<br />
                                <font color="#000000"><b>morbi</b></font> tincidunt fermentum, libero. Ante enim eget viverra at <br />
                                porttitor accumsan. <font color="#000000"><u>Orci non here</u></font>
                                <br />
                                <br />
                                <br />
                                <font color="#CD4631"><b>•</b></font> Quis dictum cursus faucibus mattis dignissim. Pellent<br />
                                que <font color="#000000"><b>purus in sed</b></font> sodales in mauris molestie. Eleifend est<br />
                                consctetur interdum eu in auctor. Gravida leo et.
                            </font></p>
                            <img src="src/assets/caption1.png" alt="caption1" />
                        </div>
                        <div className="SecondColumnArt">
                            <p className="OnTextArt"><font color="#000000">Number list example:</font></p>
                            <p className="UnderTextArt"><font color="#4D4D4D">
                                <font color="#CD4631"><b>1.</b></font>
                                Lorem ipsum dolor sit amet,<font color="#000000"><b>consectetur adipiscing </b></font> elit. Quam <br />
                                pellentesque at bibendum euismod tellus duis curs <br />
                                us dignissim odio. Sit vulputate et integer in.
                                <br />
                                <br />
                                <br />
                                <font color="#CD4631"><b>2.</b></font> Sit vel, senectus iaculis morbi.<font color="#000000"><b>Amet </b></font> interdum imperd laoreet<br />
                                <font color="#000000"><b>morbi</b></font>  tincidunt fermentum, libero. Ante enim ege viverra at <br />
                                porttitor accumsan. <font color="#000000"><u>Orci non here</u></font>
                                <br />
                                <br />
                                <br />
                                <font color="#CD4631"><b>3.</b></font> Quis dictum cursus faucibus mattis dignissim. Pellent <br />
                                que <font color="#000000"><b>purus in sed</b></font> sodales in mauris molestie. Eleifend est <br />
                                consctetur interdum eu in auctor. Gravida leo et.
                            </font></p>
                            <img src="src/assets/caption2.png" alt="caption2" />
                        </div>
                    </div>
                </div>
            </section>
            <img
                src="src/assets/VecSt3Page.png"
                alt="StarCard"
                style={{
                    position: 'absolute',
                    top: '493%',
                    right: '1250px',
                    zIndex: '1'
                }}
            />
            <img
                src="src/assets/ScrSt3Page.png"
                alt="StarCard"
                style={{
                    position: 'absolute',
                    top: '560%',
                    right: '50px',
                    zIndex: '1'
                }}
            />
            <section id="SevenBlock2">
                <div className="container">
                    <h2 className="centered-titleThird">
                        <font color="#000000">Related Article</font>
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
            <section id="LastBlockAB">
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
                    top: '646.6%',
                    right: '1085px',
                    zIndex: '1'
                }}
            />
            <img
                src="src/assets/right8.png"
                alt="StarCard"
                style={{
                    position: 'absolute',
                    top: '621%',
                    right: '0px',
                    zIndex: '1'
                }}
            />
        </>
    )
}

export default AboutUs;