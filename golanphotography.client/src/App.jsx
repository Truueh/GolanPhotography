import { useEffect, useState } from 'react';
import './App.css';

function App() {
    return (
        <div>
            <Head />
            <div id="home_body">
                <LandingArea />
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
                <h1 className="navigation-item"> conact us </h1>
                <h1 className="navigation-item"> meetups </h1>
                <h1 className="navigation-item"> about </h1>
            </div>
        </div>
    );
}

function LandingArea() {
    return (
        <img className="background-image" src= "../Images/HomePage/LandingImages/1.png" />
    );
}

function Footer() {
    return (
        <div id="footer">
            <h6>footer bitch</h6>
        </div>
    )
}

export default App;