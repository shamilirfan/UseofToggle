import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Time from './Time';
import Queue from './Queue';
import Links from './Links';
import ColorChanging from './ColorChanging';
import Practice from './Practice';
import ImageChange from './ImageChange';


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Links />} />
                <Route path="time" element={<Time />} />
                <Route path="queue" element={<Queue />} />
                <Route path="colorchanging" element={<ColorChanging />} />
                <Route path="practice" element={<Practice />} />
                <Route path="imagechange" element={<ImageChange />} />
            </Routes>
        </div>
    );
}

export default App;