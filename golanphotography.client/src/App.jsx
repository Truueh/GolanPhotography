﻿import { useEffect, useState } from 'react';
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
            <h1>GOLAN PHOTOGRAPHY</h1>
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