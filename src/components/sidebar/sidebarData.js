import React from "react";
import { HomeRounded, AssignmentIndRounded, AssignmentRounded } from '@mui/icons-material';

export const SidebarData = [
    {
        title: "Home",
        path: "/",
        icon: <HomeRounded/>,
        cName: "side-text"
    },
    {
        title: "Cadastro de produtos",
        path: "/produto",
        icon: <AssignmentRounded/>,
        cName: "side-text"
    },
    {
        title: "Cadastro de funcionarios",
        path: "/funcionario",
        icon: <AssignmentIndRounded/>,
        cName: "side-text"
    },
    {
        title: "Cadastro de pratos",
        path: "/prato",
        icon: <AssignmentRounded/>,
        cName: "side-text"
    },
]