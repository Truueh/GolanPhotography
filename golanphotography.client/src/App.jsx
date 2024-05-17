import { useEffect, useState } from 'react';
import './App.css';
import './jquery.js'

function App() {
    return (
        <div>
            <div id="inspect-image-mode-div" onClick={inspectModeClick}></div>
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
                    <h2 id="introduction-title">היי<br></br> אני גולן ואני צלם</h2>
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
        <div id="brick-pattern-div" onLoad={applyClickListener }>
            <div id="brick-pattern-col-1" className="brick-pattern-col">
                <img className="brick-pattern-img inspectable-image" src="../Images/HomePage/BrickPattern/1.jpg"></img>
                <img className="brick-pattern-img inspectable-image" src="../Images/HomePage/BrickPattern/2.jpg"></img>
                <img className="brick-pattern-img inspectable-image" src="../Images/HomePage/BrickPattern/3.jpg"></img>
            </div>
            <div id="brick-pattern-col-2" className="brick-pattern-col">
                <img className="brick-pattern-img inspectable-image" src="../Images/HomePage/BrickPattern/2.jpg"></img>
                <img className="brick-pattern-img inspectable-image" src="../Images/HomePage/BrickPattern/3.jpg"></img>
                <img className="brick-pattern-img inspectable-image" src="../Images/HomePage/BrickPattern/1.jpg"></img>
            </div>
            <div id="brick-pattern-col-3" className="brick-pattern-col">
                <img className="brick-pattern-img inspectable-image" src="../Images/HomePage/BrickPattern/3.jpg"></img>
                <img className="brick-pattern-img inspectable-image" src="../Images/HomePage/BrickPattern/1.jpg"></img>
                <img className="brick-pattern-img inspectable-image" src="../Images/HomePage/BrickPattern/2.jpg"></img>
            </div>
            <div id="brick-pattern-col-4" className="brick-pattern-col">
                <img className="brick-pattern-img inspectable-image" src="../Images/HomePage/BrickPattern/3.jpg"></img>
                <img className="brick-pattern-img inspectable-image" src="../Images/HomePage/BrickPattern/2.jpg"></img>
                <img className="brick-pattern-img inspectable-image" src="../Images/HomePage/BrickPattern/1.jpg"></img>
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

function applyClickListener() {
    var element = document.getElementsByClassName("inspectable-image");

    for (var i = 0; i < element.length; i++) {
        element[i].addEventListener('click', brickImgClick);
    }
}

function brickImgClick() {
    inspectImage(event.target.src);
}

function inspectImage(img) {
    toggleDarkBackground(true);
    insertInspectImg(img);
    toggleBlur();
}

function insertInspectImg(img) {
    let imgDiv = document.createElement("img");
    imgDiv.src = img;
    imgDiv.id = "inspected-img";
    document.getElementById('inspect-image-mode-div').appendChild(imgDiv);
}

function inspectModeClick() {
    leaveInspectMode();
}

function leaveInspectMode() {
    toggleDarkBackground(false);
    removeInspectImg();
    toggleBlur();
}


function removeInspectImg() {
    document.getElementById('inspected-img').remove();
}

function toggleDarkBackground(toggle) {
    if (toggle)
        $("#inspect-image-mode-div").css("visibility", "visible")
    else {
        $("#inspect-image-mode-div").css("visibility", "hidden")
    }
}

function toggleBlur(toggle) {
    let background = document.getElementById('home_body');
    background.classList.toggle('blur');
}

export default App;