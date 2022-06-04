import React from "react";
import "./TabsCadastro.css"
import { TabsData } from "./TabsData";
import { Tabs, Tab } from "react-bootstrap";

export default function TabsCadastro() { //iterar sob o item antes de colar aqui
    return (
        <Tabs>
            {TabsData.map((data, index) => (
                <Tab 
                    className="mb-3"
                    key={index} 
                    eventKey={index} 
                    title={data.title}>
                        {data.tabInputComponent}
                </Tab>
            ))}
        </Tabs>
    )
}