import React from "react";
import { Logout } from '@mui/icons-material';
import { IconButton }from "@mui/material";
import { Link } from "react-router-dom";


const LogoutButton = () => {
    return (
        <IconButton>
            <Logout/>
        </IconButton>
    )
}

export default LogoutButton;