import { Form } from "react-bootstrap";

export default function InputCpf(props) {

  return (
    <Form.Group className="mb-2" >
      <Form.Control
        ref={props.refer}
        maxLength={props.maxLength}
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
      /> 
    </Form.Group>
  )
}