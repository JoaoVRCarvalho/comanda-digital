import React from "react";
import { HomeRounded, AssignmentIndRounded, AssignmentRounded } from '@mui/icons-material';
import { ArrowDropUpRounded } from '@mui/icons-material';
import { ArrowDropDownRounded } from '@mui/icons-material';

export const SidebarData = [
    {
        title: "Home",
        path: "/",
        icon: <HomeRounded/>,
        cName: "side-text"
    },
    {
        title: "Cadastros", //Cadastro de produtos
        path: "/cadastro",
        icon: <AssignmentRounded/>,
        iconClosed: <ArrowDropUpRounded/>,
        iconOpened: <ArrowDropDownRounded/>,
        cName: "side-text",
        subNav: [
            {
                title: "Produtos",
                path: "cadastro/produto",
                icon: <AssignmentRounded/>,
            },
            {
                title: "Funcionarios",
                path: "cadastro/funcionario",
                icon: <AssignmentIndRounded/>,
            },
            {
                title: "Pratos",
                path: "cadastro/prato",
                icon: <AssignmentRounded/>,
            },
        ]
    },
]