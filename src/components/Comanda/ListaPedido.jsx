import { React, useState } from "react";
import { ListGroup, Button, Dropdown, Collapse, Form  } from "react-bootstrap";
import { CloseRounded } from '@mui/icons-material';


export default function Pedidos({ listaPedidos }) {
    const [collapse, setCollapse] = useState(false);
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

    const handleSubmit = (e) => {
        e.preventDefault();
        const pedidoData = new FormData()
        listaPedidos.forEach(pedido => {
            pedidoData.append("pedidos", pedido) // usar JSON.stringify se houver algum problema com os pedidos no array.
        });
        console.log(pedidoData)
        console.log(pedidoData.getAll("pedidos"));
    }

    if (!listaPedidos) {
        return <></>
    }

    return (
        <Dropdown className="dropdown-pedidos" autoClose={false}> {/*esse*/ }
            <Button
                className="dropdown-pedidos-button comandaBtn" 
                variant='warning'
                aria-controls="collapse-wrapper"
                aria-expanded={collapse}
                onClick={() => setCollapse(!collapse)}>
                View pedidos
            </Button>
            <Collapse in={collapse}>
                <Form id="collapse-wrapper" onSubmit={handleSubmit}>
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
                    <div id="button-wrapper-list">
                        <Button
                            id="pedido-list-button"
                            type="submit"
                            className="comandaBtn"
                            variant='warning'>
                            Enviar para cozinha
                        </Button>
                    </div>
                    
                </Form>
            </Collapse>
        </Dropdown>
    )
}