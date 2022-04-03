import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
    return (
        <header className="header">
            <nav className="nav">
                <div className="nav-logo">
                    <a href="#">
                        <img src="https://resources.sonyliv.com/image/fetch/w_40,c_fill,fl_lossy,f_auto,q_auto:eco,e_contrast:30,e_brightness:10/https://origin-staticv2.sonyliv.com/UI_icons/sonyliv_new_revised_header_logo.png" alt="logo" />
                    </a>
                </div>
                <div className="nav-sub">Subscribe</div>
                <div className="nav-line"></div>
                <div className="nav-menu">
                    <ul className="nav-list"> 
                        <li className="nav-item">
                            <a href="#" className="nav-link">TV Shows</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Originals</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Sports</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Movies</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Premium</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Games</a>
                        </li>
                    </ul>
                </div>
                <div className="nav-btns">
                    <span className="nav-search">
                        <i className="uil uil-search"></i>
                    </span>
                    <Link to={"/login"}><span className="nav-user">
                        <i className="uil uil-user"></i>
                    </span></Link>
                </div>
            </nav>
        </header>
    )
}

export { Navbar };