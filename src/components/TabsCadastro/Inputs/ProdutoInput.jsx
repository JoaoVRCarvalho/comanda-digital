import React from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import DateInput from "../../_General/DateInput";
import './ProdutoInput.css'

export default function ProdutoInput() {
    return (
        <Container className="inputAreaWrapper">
            <Form>
                <Row id="primeiraLinhaInput">
                    <Form.Group as={Col} controlId="descProduto">
                        <Form.Label>Descrição</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            placeholder="Descrição do item"
                            className="descTextaArea"
                        />
                    </Form.Group>
                </Row>
                <Row id="segundaLinhaInput">
                    <Form.Group as={Col} controlId="dataEntrada">
                        <Form.Label>Data de entrada</Form.Label>
                        <DateInput placeholder="Data de entrada"  />
                    </Form.Group>
                    <Form.Group as={Col} controlId="validadeProduto">
                        <Form.Label>Validade</Form.Label>
                        <DateInput placeholder="Validade"  />
                    </Form.Group>
                </Row>
            </Form>
        </Container>
    )
}