import { React } from 'react';
import { listaProdutos } from '../../dbMock/mockTables.js'
import { Card, Col, Row, Button } from 'react-bootstrap';

export default function CardapioCards() {
    
    const handleAdicionar = (objId) => {

    }
    return (
            <Row xs={1} md={2} lg={4} className="g-4 card-wrapper">
                {listaProdutos.map((obj, idx) => (
                    <Col key={idx}>
                        <Card key={obj.id} className="card-cardapio">
                            {/* <Card.Img src={obj.prodImg} /> */}
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
                                        onClick={handleAdicionar(obj.id)}>
                                        Adicionar   
                                    </Button>
                                </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
    )
}

