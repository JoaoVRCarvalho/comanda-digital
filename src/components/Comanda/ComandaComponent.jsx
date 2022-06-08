import { React, useState } from 'react';
import { Container, Button } from 'react-bootstrap'
import FazerPedidoBtn from './FazerPedidoButton.jsx'
import './Comanda.css'

export default function ComandaComponent() {
    const [fazerPedido, setFazerPedido] = useState(false);

    const showFazerPedido = () => setFazerPedido(!fazerPedido);

    return (
        <FazerPedidoBtn fazerPedido={fazerPedido} showFazerPedido={showFazerPedido} />
    )
}