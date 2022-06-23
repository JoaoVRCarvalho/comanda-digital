import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import LogoutButton from "../Navbar/Logout";
import MenuButton from "../Navbar/MenuButton";
import { SidebarComanda } from "../sidebar/sidebar";
import '../Navbar/Navbar.css';

const ComandaHeader = ({ pedidosArr }) => {
    const [sidebar, setSidebar] = useState(false);
    const GetLocation = () => (useLocation().pathname);

    const showSidebar = () => setSidebar(!sidebar);
    return (
        <header id="testeTestado" className="app-header">
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
            <SidebarComanda listaPedidos={pedidosArr} sidebar={sidebar} showSidebar={showSidebar}/>
        </header>
    )
}

export default ComandaHeader;