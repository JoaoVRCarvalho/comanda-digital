import { React } from 'react';
import { Container, Button } from 'react-bootstrap';

export default function InputPedido() {
    return (
        // aperto o botão, aparaece os inputs para adicionar item ao pedido,
        // um do inputs ja aparece ao clicar aós isso o garçcom deve apertar o btn
        // adicionar item, assim fazendo aparecer mais um input, na parte mais a direita do input
        // havera um X para tirar tal input.
        <Container className='pedidoInputDiv'>

            <Button className="comandaBtn" variant='warning'>Adicionar item</Button>
        </Container>
    )
}

// toda vez q o botão adicionar item for clicado, uma nova row com adicionar item deve aparecer 