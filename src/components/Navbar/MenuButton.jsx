import React from "react";
import { Link } from 'react-router-dom' 
import { MenuRounded } from '@mui/icons-material';

const MenuButton = () => (
    <Link to="#" className="menu-bar">
        <MenuRounded/>
    </Link>
)

export default MenuButton;