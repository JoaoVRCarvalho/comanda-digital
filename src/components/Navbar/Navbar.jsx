import React, { useState } from "react";
import LogoutButton from "./Logout";
import MenuButton from "./MenuButton";
import Sidebar from "../sidebar/sidebar";
import './Navbar.css';

const Header = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    return (
        <header className="app-header">
            <div className="header-wrapper">
                <div className="headerLeft">
                    <div name="Sidebar" className="icon-container">
                        <MenuButton showSidebar={showSidebar}/>
                    </div>
                    <span className="header-logo">Homepage</span>
                </div>
                <div className="headerRight">
                    <div name="Logout" className="icon-container">
                        <LogoutButton />
                    </div>
                </div>
            </div>
            <Sidebar sidebar={sidebar} showSidebar={showSidebar}/>
        </header>
    )
}

export default Header