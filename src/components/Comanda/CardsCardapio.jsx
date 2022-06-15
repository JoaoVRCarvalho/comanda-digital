import { React } from 'react';
import { listaProdutos } from '../../dbMock/mockTables.js'
import { Card, Col, Row, Button } from 'react-bootstrap';

export default function CardapioCards() {
    return (
            <Row xs={"auto"} md={"auto"} lg="auto" className="g-4 card-wrapper">
                {listaProdutos.map((obj, idx) => (
                    <Col key={idx}>
                        <Card key={obj.id} className="card-cardapio">
                            {/* <Card.Img src={obj.prodImg} /> */}
                                <Card.Body>
                                    <Card.Title>{obj.nome}</Card.Title>
                                    <Card.Text>
                                        {obj.Ds_Produto}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="button-wrapper">
                                    <Button type="Submit" variant="warning" className="cardFooter-btn" id="sub-button">
                                        -
                                    </Button>
                                    <Button type="Submit" variant="warning" className="cardFooter-btn" id="add-button">
                                        +
                                    </Button>
                                </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
    )
}

