import { React, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import Cardapio from './Cardapio';

export default function InputPedido({ idMesa }) {
    let [item, setItem] = useState(0)

    let counter = item;
    let buffer = [];

    const addItem = () => {
        counter++
        setItem(counter);
    }

    // adicionando ao buffer para iterar poder iterar assim renderizando o cardapio toda vez q o botão for clicado. 
    if (item >= 0) {
        for (let i = 0; i < item; i++) {
            buffer.push(<Cardapio/>);
        }
    }
    
    return (
        <div className="pedido-wrapper">
            <Container className="CardapioContainer">
                {buffer.map((cardapio, index) => {
                    return (
                        <div key={index}>
                            <div>
                                {/* <p className='item-counter'>Item #{index + 1}</p> */}
                            </div>
                            <div>
                                {cardapio}
                            </div>
                        </div>
                    )
                })}
            </Container>
            <Container className='pedidoInputDiv'>
                <Button className="comandaBtn" id='addItem-btn' variant='warning' onClick={addItem}>Iniciar pedido</Button>
            </Container>    
        </div>
    )
}
