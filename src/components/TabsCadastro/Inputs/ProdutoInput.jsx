import React from "react";
import { Container, Form, Row, Col, InputGroup, Button } from "react-bootstrap";
import './ProdutoInput.css'

export default function ProdutoInput() {
    return (
        <Container className="inputAreaWrapper">
            <Form className="inputAreaForm">
                <Row className="linhaForm" id="primeiraLinhaInput">
                    <Form.Group as={Col} controlId="dataEntrada">
                        <Form.Label>Data de entrada</Form.Label>
                        <br></br>
                        <input
                            max="1979-12-31"
                            type="date"
                            placeholder="dd/mm/AAAA"
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="validadeProduto">
                        <Form.Label>Validade</Form.Label>
                        <br></br>
                        <input
                            max="1979-12-31"
                            type="date"
                            placeholder="dd/mm/AAAA"
                        />
                    </Form.Group>
                </Row>
                <Row className="linhaForm" id="segundaLinhaInput">
                    <Form.Group as={Col} controlId="descProduto">
                        <Form.Label>Descrição</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            placeholder="Descrição do item"
                            className="descTextaArea"
                        />
                    </Form.Group>
                </Row>
                <Row className="linhaForm" >
                    <InputGroup size="sm" className="inputGp">
                        <InputGroup.Text>Quantidade</InputGroup.Text>
                        <Form.Control />
                    </InputGroup>
                </Row>
                <Row className="linhaForm">
                    <InputGroup size="sm" className="inputGp">
                        <InputGroup.Text>Valor da compra</InputGroup.Text>
                        <InputGroup.Text>R$</InputGroup.Text>
                        <Form.Control />
                    </InputGroup>
                </Row>
                <Row className="linhaForm">
                    <Form.Group controlId="statusProduto">
                        <Form.Check type="checkbox" label="Ativo/Inativo" />
                    </Form.Group>
                </Row>
                <Row className="linhaForm">
                    <Form.Group controlId="btnSubmit">
                        <Button as="input" type="submit" value="Submit" />
                    </Form.Group>
                </Row>
            </Form>
        </Container>
    )
}