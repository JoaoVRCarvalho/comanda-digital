import { React, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import Cardapio from './Cardapio';

export default function InputPedido() {
    let [item, setItem] = useState(false)
    const addItem = () => {
        setItem(!item);
    }
    return (
        <>
            <Container className="CardapioContainer">
                {item &&
                    <Cardapio/>
                }
            </Container>
            <Container className='pedidoInputDiv'>
                <Button className="comandaBtn" variant='warning' onClick={addItem}>Adicionar item</Button>
            </Container>    
        </>
    )
}

// toda vez q o botão adicionar item for clicado, uma nova row com adicionar item deve aparecer 