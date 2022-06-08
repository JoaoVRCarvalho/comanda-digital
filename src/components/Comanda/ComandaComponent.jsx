import { React, useState } from 'react';
import FazerPedidoBtn from './FazerPedidoButton.jsx'
import InputPedido from './InputPedido.jsx';
import './Comanda.css'
import { Container } from 'react-bootstrap';

export default function ComandaComponent() {
    const [fazerPedido, setFazerPedido] = useState(false);

    const showFazerPedido = () => setFazerPedido(!fazerPedido);

    return (
        <Container>
            <FazerPedidoBtn fazerPedido={fazerPedido} showFazerPedido={showFazerPedido}/>
            {fazerPedido &&
                <InputPedido />
            }    
        </Container>
    )
}