import React, { useState } from "react";
import LogoutButton from "./Logout";
import MenuButton from "./MenuButton";
import './Navbar.css';

const Header = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    // quand a função showsidebar for chamda, o menubutton vai receber o resultado e mostrar a sidebar atraves do componente sidebar.
    return (
        <header className="app-header">
            <div className="header-wrapper">
                <div className="headerLeft">
                    <div name="Sidebar" className="icon-container">
                        <MenuButton />
                    </div>
                    <span className="header-logo">Homepage</span>
                </div>
                <div className="headerRight">
                    <div name="Logout" className="icon-container">
                        <LogoutButton />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header