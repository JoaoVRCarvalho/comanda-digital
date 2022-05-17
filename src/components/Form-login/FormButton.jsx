import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import './Form.css';

export default function FormButton(props) {
    return (
        <Form.Group id="form-submit">
            <Button type="submit" variant="primary">Entrar</Button>{' '}
        </Form.Group>
    )
}