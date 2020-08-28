import React from 'react';

export const DefaultNav = () => {
    return (
    <nav className="navbar">
        <div className="container">
            <h1 className="logo">Porium</h1>
            <ul className="nav">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">Courses</a></li>
                <li><a href="#events">Events</a></li>
                <li><a href="#started">Get Started</a></li>
            </ul>
        </div>
    </nav>
    )
}