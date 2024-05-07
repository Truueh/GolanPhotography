import { useEffect, useState } from 'react';
import './App.css';
import ImagesArr from './ImagesLoader.js';

function App() {
    return (
        <div>
            <Head />
            <LandingArea />
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
        <img class={'background-image'} src = { ImagesArr[0].image } />
    );
}

export default App;