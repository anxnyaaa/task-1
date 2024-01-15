import React from 'react'
import "./Sidebar.css";

function Sidebar() {
    return (
        <div className="sidebar">       
            <ul>
                <li><a href="#about">Hello</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#write for us">About</a></li>
                <li><a href="#write for us">Products</a></li>
                <li><a href="#sign out">Sign Out</a></li>
            </ul>
        </div>
    );
}

export default Sidebar;