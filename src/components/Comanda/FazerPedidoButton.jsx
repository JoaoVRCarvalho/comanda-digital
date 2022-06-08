import { React } from 'react';
import { Container, Button } from 'react-bootstrap'

export default function FazerPedidoBtn(props) {
    return (
        <Container id="containerDiv" className={props.fazerPedido ? "btn-container active" : "btnContainer"}>
            <Button 
                id="btnFazerPedido"
                className="comandaBtn"
                variant="warning"
                onClick={props.showFazerPedido}
            >Fazer pedido</Button>
        </Container>
    )
}