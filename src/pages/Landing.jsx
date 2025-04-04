import React from "react";

function Landing() {
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
        </section>
    )
}

export default Landing;