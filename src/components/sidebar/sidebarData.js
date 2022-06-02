import React from "react";
import { HomeRounded, ArticleRounded, CheckCircleRounded } from '@mui/icons-material';


export const SidebarData = [
    {
        title: "Home",
        path: "/",
        icon: <HomeRounded/>,
        cName: "side-text"
    },
    {
        title: "Cadastros", 
        path: "/cadastro",
        icon: <ArticleRounded/>,
        cName: "side-text",
    },
    {
        title: "Consulta", 
        path: "",
        icon: <CheckCircleRounded/>,
        cName: "side-text",
    },
]