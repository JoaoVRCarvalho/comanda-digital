import { Form } from "react-bootstrap";

export default function InputPassword(props) {
    return (
        <Form.Group className="mb-4">
            <Form.Control
                name="password"
                type="password"
                placeholder="Senha"
                maxLength="16"
            />
        </Form.Group>
    )
}