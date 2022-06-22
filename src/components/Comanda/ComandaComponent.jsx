import { React } from 'react';
import MesaButton from './MesaButton.jsx';
import './Comanda.css'
import { Container } from 'react-bootstrap';

export default function ComandaComponent() {

    return (
        <Container className="FazerPedido-Wrapper">
            <MesaButton/>
        </Container>
    )
}