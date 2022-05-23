import React from "react";
import { Settings, Logout } from '@mui/icons-material';
import './Navbar.css';

const Header = () => (
    <header className="app-header">
        <div className="header-wrapper">
            <div className="headerLeft">
                <span className="header-logo">Homepage</span>
            </div>
            <div className="headerRight">
                <div name="Settings" className="icon-container">
                    <Settings/>
                </div>
                <div name="Logout" className="icon-container">
                    <Logout/>
                </div>
            </div>
        </div>
    </header>
)

export default Header