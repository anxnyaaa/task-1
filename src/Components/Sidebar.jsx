import React from 'react'
import "./Sidebar.css";

function Sidebar(props) {
    return (
        <div className="sidebar">       
            <ul>
                <li><a href="#hello">{props.hello} <img src='https://static-00.iconduck.com/assets.00/waving-hand-sign-emoji-2048x2048-r71rstzv.png' width="20px" height="20px"></img> </a></li>
                <li><a href="#pd">{props.pd}</a></li>
                <li><a href="#service">{props.service}</a></li>
                <li><a href="#sign out">{props.so}</a></li>
            </ul>
        </div>
    );
}

export default Sidebar;