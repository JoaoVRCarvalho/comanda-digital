import { React, useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap'
import { listaMesas } from '../../dbMock/mockTables.js'
import InputPedido from './InputPedido.jsx';


export default function MesaButton() {
    const [fazerPedido, setFazerPedido] = useState(true);
    const [clickedMesa, setClickedMesa] = useState(0);


    const handleClick = (mesaId) => {
        console.log(mesaId);
        setFazerPedido(!fazerPedido);
        setClickedMesa(mesaId);

    }
    
    if(fazerPedido){
        return (
            <Row xs={3} md={"auto"} lg={"auto"} id="containerDiv" >
                {listaMesas.map((mesa, idx) => (
                    <Col id="mesas-col" key={idx}>
                        <Button 
                            id="btnFazerPedido"
                            className="comandaBtn"
                            variant="warning"
                            onClick={e => handleClick(mesa.id)}
                            >{`mesa ${mesa.id}`}
                        </Button>      
                    </Col>          
                ))}
            </Row>
        )
    } else {
        return (
            <InputPedido idMesa={clickedMesa}/>
       )
    }

}

// className={props.fazerPedido ? "btn-container active" : "btnContainer"}