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

    if (item > 0) {
        for (let i; i < item; i++) {
            buffer.push(<Cardapio/>)
        }
    }
    

    return (
        <div className="teste">
            <Container className="CardapioContainer">
                {buffer.map((item) => {
                    return (
                        <>{item}</>
                    )
                })}
            </Container>
            <Container className='pedidoInputDiv'>
                <Button className="comandaBtn" variant='warning' onClick={addItem}>Adicionar item</Button>
            </Container>    
        </div>
    )
}
