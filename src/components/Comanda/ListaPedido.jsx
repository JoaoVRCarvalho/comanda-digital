import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import { CloseRounded } from '@mui/icons-material';


export default function Pedidos ({ listaPedidos }) {
    
    const handleClick = (objFromPedido) => {
        let removedItens = [];
        listaPedidos.findIndex((obj, idx) => {
            if (obj.id === objFromPedido.id) {
                removedItens = listaPedidos.splice(idx, 1);
            }
            return removedItens;
        })
    }
    
    return (
        <>
            {listaPedidos.map((obj, idx) => (
                <ListGroup className="list-row-wrapper" key={idx} horizontal="sm">
                    <ListGroup.Item className="list-row">{obj.nome}</ListGroup.Item>
                    <ListGroup.Item className="list-row">{obj.valor_produto}</ListGroup.Item>
                    <ListGroup.Item className="list-row" id="remove-button-list">
                        <Button 
                            id="removeFromListButton"
                            variant="warning" 
                            className="comandaBtn"
                            onClick={e => {handleClick(obj)}}>
                            <CloseRounded/>
                        </Button>
                    </ListGroup.Item>
                </ListGroup>
            ))}
        </>
    )

}