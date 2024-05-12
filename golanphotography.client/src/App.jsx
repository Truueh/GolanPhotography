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
            <h1>GOLAN PHOTOGRAPHY</h1>
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