import React from "react";
import { Link } from 'react-router-dom' 
import { MenuRounded } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const MenuButton = (props) => (
    <Link to="#" className="menu-bar">
        <IconButton onClick={props.showSidebar}>
            <MenuRounded/>
        </IconButton>
    </Link>
)

export default MenuButton;