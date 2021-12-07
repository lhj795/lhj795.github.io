import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

export default function Homepage() {
    return (
        <div>
            <h1>Nicole Lee</h1>
            <div style={{display: "flex", flexDirection: "column"}}>
                <Link to='/hyperlink'>Hyperlink</Link>
                <Link to='/change-over-time'>Change over Time</Link>
                <Link to='/input-and-output'>Input and Output</Link>
                <Link to='/topic-presentation'>Topic Presentation</Link>
            </div>
        </div>
    )
};