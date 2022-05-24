import React from "react";
import { Link } from 'react-router-dom' 
import { CloseRounded } from '@mui/icons-material';
import { IconButton }from "@mui/material";


const Sidebar = () => (
    <nav className={sidebar ? "side-menu active" : "side-menu"}>
        <ul className="side-menu-items">
            <li className="sidebar-toggle">
                <Link to="#" className="sidemenu">
                    <IconButton>
                        <CloseRounded/>
                    </IconButton>
                </Link>
            </li>
        </ul>
    </nav>
)

export default Sidebar;