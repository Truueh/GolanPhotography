import { useEffect, useState } from 'react';
import './App.css';

function App() {
    return (
        <div>
            <Head />
            <div id="home_body">
                <LandingArea />
                <IntroductionArea />
            </div>
            <Footer />
        </div>
    )
}

function Head() {
    return (
        <div id="header" className="header">

            <div id="header-links">
                <a href="https://www.facebook.com/golan.lavi"><img className="header-icon" src="../Images/header/icons/facebook_logo.png"></img> </a>
                <a href="https://www.instagram.com/golanlavi/"><img className="header-icon" src="../Images/header/icons/instagram_logo.png"></img> </a>
                <a href="https://wa.me/972546542615"><img className="header-icon" src="../Images/header/icons/whatsapp_logo.png"></img> </a>
            </div>
            <h1 id="title"> GOLAN PHOTOGRAPHY </h1>

            <div id="navigation-menu" className="navigation-menu">

                <h1 className="navigation-item">
                    <a href="http://localhost:5173/contact" target="_self">contact us</a>
                </h1>

                <h1 className="navigation-item">
                    <a href="http://localhost:5173/meetups" target="_self">meetups</a>
                </h1>

                <h1 className="navigation-item">
                    <a href="http://localhost:5173/about" target="_self">about</a>
                </h1>
            </div>
        </div>
    );
}

function LandingArea() {
    return (
        <img className="background-image" src= "../Images/HomePage/LandingImages/1.png" />
    );
}

function IntroductionArea() {
    return (
        <div>
            <div className="breaker" id="breaker_1"></div>
            <div id="introduction-area">
                <div id="introduction-text">
                    <h2 id="introduction-title">!היי<br></br>(: אני גולן ואני צלם</h2>
                    <p id="introduction-paragraph">מתמחה בצילום באמצעות פאלפונים ניידים<br></br>
                        בין היתר מעביר סדנאות ומנהל קבוצת<br></br>
                    פייסבוק לצלמים מהמובילות בארץ בתחום</p>
                </div>
                <img id="profile-picture" src="../Images/HomePage/profile.jpg"></img>
            </div>
        </div>
    )
}

function Footer() {
    return (
        <div id="footer">
            <h6>footer bitch</h6>
        </div>
    )
}

export default App;