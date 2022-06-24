import { React, useState } from "react";
import { ListGroup, Button, Dropdown } from "react-bootstrap";
import { CloseRounded } from '@mui/icons-material';


export default function Pedidos({ listaPedidos }) {
    const [refresh, setRefresh] = useState(false);

    let removedItens;

    const handleClick = (objFromPedido) => {
        listaPedidos.findIndex((obj, idx) => {
            if (obj.id === objFromPedido.id) {
                removedItens = listaPedidos.splice(idx, 1);
            }
            return removedItens;
        })
        setRefresh(!refresh);
    }


    if (listaPedidos) {
        return (
            <Dropdown className="dropdown-pedidos" autoClose={false}>
                <Dropdown.Toggle className="dropdown-pedidos-button comandaBtn" variant='warning'>
                    View pedidos
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Header>Pedidos</Dropdown.Header>
                    {listaPedidos.map((obj, idx) => (
                        <Dropdown.ItemText key={idx}>
                            <ListGroup className="list-row-wrapper" horizontal="sm">
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
                        </Dropdown.ItemText>
                    ))}
                    <Dropdown.Divider />

                </Dropdown.Menu>
            </Dropdown>
        )
    } else {
        return <></>
    }
}