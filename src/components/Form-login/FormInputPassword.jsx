import { Form } from "react-bootstrap";

export default function InputPassword(props) {
    return (
        <Form.Group className="mb-4">
          <Form.Control
            maxLength={props.maxLength}
            type={props.type}
            placeholder={props.placeholder}
            name={props.name}
        />
        </Form.Group>
    )
}