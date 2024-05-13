import { useEffect, useState } from 'react';
import './App.css';

function App() {
    return (
        <div>
            <Head />
            <div id="home_body">
                <LandingArea />
                <IntroductionArea />
                <BrickPattern />
            </div>
            <Footer />
        </div>
    )
}

function Head() {
    return (
        <div id="header" className="header">
            <div id="header-space"> </div>
            <h1 id="title"> GOLAN PHOTOGRAPHY </h1>

            <div id="navigation-menu" className="navigation-menu">
                <h1 className="navigation-item"> צרו קשר </h1>
                <h1 className="navigation-item"> מפגשים </h1>
                <h1 className="navigation-item"> אודות </h1>
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
                    <p id="introduction-paragraph">.מתמחה בצילום באמצעות פאלפונים ניידים
                        בין היתר מעביר סדנאות ומנהל קבוצת
                        פייסבוק לצלמים מהמובילות בארץ בתחום
                    </p>
                </div>
                <img id="profile-picture" src="../Images/HomePage/profile.jpg"></img>
            </div>
        </div>
    )
}

function BrickPattern() {
    return (
        <div id="brick-pattern-div">
            <div id="brick-pattern-col-1" class="brick-pattern-col">
                <img className="brick-pattern-img" src="../Images/HomePage/BrickPattern/1.jpg"></img>
                <img className="brick-pattern-img" src="../Images/HomePage/BrickPattern/2.jpg"></img>
                <img className="brick-pattern-img" src="../Images/HomePage/BrickPattern/3.jpg"></img>
            </div>
            <div id="brick-pattern-col-2" class="brick-pattern-col">
                <img className="brick-pattern-img" src="../Images/HomePage/BrickPattern/2.jpg"></img>
                <img className="brick-pattern-img" src="../Images/HomePage/BrickPattern/3.jpg"></img>
                <img className="brick-pattern-img" src="../Images/HomePage/BrickPattern/1.jpg"></img>
            </div>
            <div id="brick-pattern-col-3" class="brick-pattern-col">
                <img className="brick-pattern-img" src="../Images/HomePage/BrickPattern/3.jpg"></img>
                <img className="brick-pattern-img" src="../Images/HomePage/BrickPattern/1.jpg"></img>
                <img className="brick-pattern-img" src="../Images/HomePage/BrickPattern/2.jpg"></img>
            </div>
            <div id="brick-pattern-col-4" class="brick-pattern-col">
                <img className="brick-pattern-img" src="../Images/HomePage/BrickPattern/3.jpg"></img>
                <img className="brick-pattern-img" src="../Images/HomePage/BrickPattern/2.jpg"></img>
                <img className="brick-pattern-img" src="../Images/HomePage/BrickPattern/1.jpg"></img>
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