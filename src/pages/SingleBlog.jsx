import React, { useState, useEffect } from "react";

function AboutUs() {
    return (
        <>
            <section id="FirstTwoBlock">
                <div className="container">
                    <div className="MainText">
                        <h1><font color="#000000">Doodle Artwork 101</font><br />
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
           
        </>
    )
}

export default AboutUs;