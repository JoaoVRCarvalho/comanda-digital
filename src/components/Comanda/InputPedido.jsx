import { React, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import Cardapio from './Cardapio';

export default function InputPedido() {
    let [item, setItem] = useState(0)
    let counter = item;
    let buffer = [];
    const addItem = () => {
        counter++
        setItem(counter);
    }

    if (item >= 0) {
        for (let i = 0; i < item; i++) {
            buffer.push(<Cardapio/>);
        }
    }
    

    return (
        <div className="teste">
            <Container className="CardapioContainer">
                {buffer.map((cardapio, index) => {
                    return (
                        <div key={index}>
                            {cardapio}
                        </div>
                    )
                })}
            </Container>
            <Container className='pedidoInputDiv'>
                <Button className="comandaBtn" id='addItem-btn' variant='warning' onClick={addItem}>Adicionar item</Button>
            </Container>    
        </div>
    )
}
