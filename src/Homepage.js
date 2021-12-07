import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

export default function Homepage() {
    return (
        <div>
            <h1>Nicole Lee</h1>
            <Link to='/hyperlink'>Hyperlink</Link>
            <p>Change over Time</p>
            <Link to='/input-and-output'>Input and Output</Link>
            <p>Topic Presentation</p>
        </div>
    )
};