import { React, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import Cardapio from './Cardapio.jsx'


export default function InputPedido({ idMesa }) {
    const [item, setItem] = useState(0)
    const [pedidoArr, setPedidoArr] = useState([]);

    const buffer = [];
    let counter = item;

    const handleAddItem = (e) => {
        if (e) {
            counter++
            setItem(counter);
        }
    }

    if (item >= 1) {
        for (let i = 0; i < item; i++) {
            buffer.push(
                <Cardapio 
                    idMesa={idMesa}
                    pedidoArr={pedidoArr} 
                    setPedidoArr={setPedidoArr}
                    amoutOfCards={item}
                    setAmoutOfCards={setItem}
                />
            );
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
                <Button
                    className="comandaBtn" 
                    id='addItem-btn' 
                    variant='warning' 
                    onClick={e => handleAddItem(e)}>
                        Novo item
                </Button>
            </Container>    
        </div>
    )
}

// setBuffer(buffer[...buffer,
//     <Cardapio 
//         idMesa={idMesa}
//         cardArr={buffer} 
//         pedidoArr={pedidoArr} 
//         setPedidoArr={setPedidoArr}
//     />
// ])