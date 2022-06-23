import { React, useState } from 'react';
import { listaProdutos } from '../../dbMock/mockTables.js'
import { Card, Col, Row, Button, Form } from 'react-bootstrap';
import ComandaHeader from './_ComandaHeader.jsx';

export default function CardapioCards() {
    const [pesquisa, setPesquisa] = useState("");
    const [pedidoArr, setPedidoArr] = useState([]);

    const handleChange = (e) => {
        setPesquisa(e.target.value);
    }

    const handleAdicionar = (obj) => {
        setPedidoArr([...pedidoArr, obj]);
    }
    console.log(pedidoArr);
    return (
        <>
        <ComandaHeader pedidosArr={pedidoArr}/>

        <Form>
            <Form.Control placeholder="item..." size='sm' type='text' className="filter-input" onChange={e => handleChange(e)}/>
        </Form>
        <Row xs={1} md={2} lg={4} className="g-4 card-wrapper">
            {listaProdutos.filter((value) => {
                if(pesquisa === "") {
                    return value;
                } else if(value.nome.toLowerCase().includes(pesquisa.toLowerCase())) {
                    return value;
                } 
            }).map((obj, idx) => (
                <Col id="card-col" key={idx}>
                    <Card key={obj.id} className="card-cardapio">
                        <Card.Body>
                            <Card.Title>{obj.nome}</Card.Title>
                            <Card.Text id='card-text'>
                                {obj.Ds_Produto}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="button-wrapper">
                            <Button 
                                type="Submit" 
                                variant="warning" 
                                className="cardFooter-btn" 
                                id="adc-button"
                                onClick={e => {handleAdicionar(obj)}}>
                                Adicionar   
                            </Button>
                        </Card.Footer>
                    </Card>
                </Col>
            ))}
        </Row>
        </>
        
    )
}

