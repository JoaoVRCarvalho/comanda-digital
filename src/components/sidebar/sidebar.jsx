import React from "react";
import { Link } from 'react-router-dom' 
import { CloseRounded } from '@mui/icons-material';
import { IconButton }from "@mui/material";
import { SidebarData } from "./sidebarData";
import Pedidos from '../Comanda/ListaPedido.jsx'
import './sidebar.css';

const Sidebar = (props) => (
    <nav className={props.sidebar ? "side-menu active" : "side-menu"}>
        <ul className="side-menu-items">
            <li className="sidebar-toggle">
                <Link to="#" className="sidemenu">
                    <IconButton onClick={props.showSidebar}>
                        <CloseRounded/>
                    </IconButton>
                </Link>
            </li>
            {SidebarData.map((item, index) => {
                return (
                    <li key={index} className={item.cName}>
                        <Link to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>
                    </li>
                )
            })}
        </ul>
    </nav>
)

const SidebarComanda = (props) => (
    <nav className={props.sidebar ? "side-menu active" : "side-menu"}>
        <ul className="side-menu-items">
            <li className="sidebar-toggle">
                <Link to="#" className="sidemenu">
                    <IconButton onClick={props.showSidebar}>
                        <CloseRounded/>
                    </IconButton>
                </Link>
            </li>
            <Pedidos listaPedidos={[
                {
                    "id": 1,
                    "nome": "Papadam",
                    "Ds_Produto": "Other specified osteochondropathies, right thigh",
                    "valor_produto": "$80.27"
                  }, {
                    "id": 2,
                    "nome": "Beef - Tenderloin Tails",
                    "Ds_Produto": "Abrasion of right upper arm",
                    "valor_produto": "$189.55"
                  }
            ]}/>
        </ul>
    </nav>
)

export {
    Sidebar,
    SidebarComanda
};