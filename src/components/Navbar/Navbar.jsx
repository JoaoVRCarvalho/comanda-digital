import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import LogoutButton from "./Logout";
import MenuButton from "./MenuButton";
import Sidebar from "../sidebar/sidebar";
import './Navbar.css';

const Header = () => {
    const [sidebar, setSidebar] = useState(false);
    const GetLocation = () => (useLocation().pathname);

    const showSidebar = () => setSidebar(!sidebar);
    if (GetLocation() !== "/Login") {
        return (
            <header className="app-header">
                <div className="header-wrapper">
                    <div className="headerLeft">
                        <div name="Sidebar" className="icon-container">
                            <MenuButton showSidebar={showSidebar}/>
                        </div>
                        <span className="header-logo">AdrianoLancheS2</span>
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
    } else {
        return <></>
    }
}

export default Header