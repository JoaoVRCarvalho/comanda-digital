import { React } from 'react';
import { listaProdutos } from '../../dbMock/mockTables.js'
import { Card, Container } from 'react-bootstrap';

export default function CardapioCards() {
    return (
        <Container>
            {listaProdutos.map((obj, index) => {
                <Card key={obj.index} className="bg-dark text-white">
                    <Card.Img src={obj.prodImg} alt="Card image" />
                        <Card.ImgOverlay>
                        <Card.Title>{obj.nome}</Card.Title>
                            <Card.Text>
                                {obj.Ds_Produto}
                            </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            })}
        </Container>
    )
}

