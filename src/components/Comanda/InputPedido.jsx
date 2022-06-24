import { React, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import Cardapio from './Cardapio.jsx'
import Pedidos from './ListaPedido.jsx';


export default function InputPedido({ idMesa }) {
    const [item, setItem] = useState(0)
    const [pedidoArr, setPedidoArr] = useState([]);
    // const buffer = [];
    let counter = item;

    // const handleAddItem = (e) => {
    //     if (e) {
    //         counter++
    //         setItem(counter);
    //     }
    // }

    // if (item >= 1) {
    //     for (let i = 0; i < item; i++) {
    //         buffer.push(
    //             <Cardapio 
    //                 idMesa={idMesa}
    //                 pedidoArr={pedidoArr} 
    //                 setPedidoArr={setPedidoArr}
    //                 cardapiosToRender={item}
    //                 setCardapiosToRender={setItem}
    //             />
    //         );
    //     }
    // }

    return (
        <div className="pedido-wrapper">
            <Pedidos listaPedidos={pedidoArr}/>

            <Cardapio 
                idMesa={idMesa}
                pedidoArr={pedidoArr} 
                setPedidoArr={setPedidoArr}
                cardapiosToRender={item}
                setCardapiosToRender={setItem}
            />
            {/* <Container className="CardapioContainer">
                {buffer.map((cardapio, index) => {
                    return (
                        <div key={index}>
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
            </Container>     */}
        </div>
    )
}