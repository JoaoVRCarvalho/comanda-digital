import React from "react";
import { Logout } from '@mui/icons-material';
import { IconButton }from "@mui/material";
import { Link } from "react-router-dom";


const LogoutButton = () => {
    return (
        <Link to="Login">
            <IconButton>
                <Logout/>
            </IconButton>
        </Link>
    )
}

export default LogoutButton;