import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import './ProdutoInput.css'

export default function ProdutoInput() {
    return (
        <Container className="inputAreaWrapper">
            <Form className="inputAreaForm">
                <Row className="linhaForm" id="primeiraLinhaInput">
                    <Form.Group as={Col} controlId="dataEntrada">
                        <Form.Label>Data de entrada</Form.Label>
                        <Form.Control size="sm" type="date" placeholder="dd/mm/AAAA" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="validadeProduto">
                        <Form.Label>Validade</Form.Label>
                        <Form.Control size="sm" type="date" placeholder="dd/mm/AAAA" />
                    </Form.Group>
                </Row>
                <Row className="linhaForm" id="segundaLinhaInput">
                    <Form.Group as={Col} controlId="descProduto">
                        <Form.Control 
                            as="textarea" 
                            placeholder="Descrição do item"
                            className="descTextaArea"
                        />
                    </Form.Group>
                </Row>
                <Row className="linhaForm" >
                    <Form.Group as={Col} controlId="quantidadeProduto">
                        <Form.Label>Quantidade</Form.Label>
                        <Form.Control size="sm" type="text" placeholder="QTD" />
                    </Form.Group>
                </Row>
                <Row className="linhaForm">
                <Form.Group as={Col} controlId="quantidadeProduto">
                        <Form.Label>Valor de compra</Form.Label>
                        <Form.Control size="sm" type="text" placeholder="R$" />
                    </Form.Group>
                </Row>
                <Row className="linhaForm">
                    <Form.Group controlId="statusProduto">
                        <Form.Check type="checkbox" label="Ativo/Inativo" />
                    </Form.Group>
                </Row>
                <Row className="linhaForm">
                    <Form.Group controlId="btnSubmit">
                        <Button as="input" id="btnSubmit" type="submit" value="Submit" />
                    </Form.Group>
                </Row>
            </Form>
        </Container>
    )
}