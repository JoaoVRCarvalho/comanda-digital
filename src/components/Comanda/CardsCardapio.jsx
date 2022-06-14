import { React } from 'react';
import { listaProdutos } from '../../dbMock/mockTables.js'
import { Card, Col, Row } from 'react-bootstrap';

export default function CardapioCards() {
    return (
            <Row xs={1} md={2} className="g-4">
                {listaProdutos.map((obj, idx) => (
                    <Col key={idx}>
                        <Card key={obj.id} className="bg-dark text-white">
                            <Card.Img src={obj.prodImg} alt="Card image" />
                                <Card.ImgOverlay>
                                    <Card.Title>{obj.nome}</Card.Title>
                                    <Card.Text>
                                        {obj.Ds_Produto}
                                    </Card.Text>
                                </Card.ImgOverlay>
                        </Card>
                    </Col>
                ))}
            </Row>
    )
}

