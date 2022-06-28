import { React } from "react";
import { Form } from "react-bootstrap";
import { mask } from "./cpfMask";

export default function InputCpf(props) {


  const handleChange = (e) => {
    const { value } = e.target;

    props.setCpf(mask(value))
  }

  return (
    <Form.Group className="mb-2" >
      <Form.Control
        onChange={e => handleChange(e)}
        maxLength="14"
        type="text"
        placeholder="Numero do CPF"
        name="cpf"
      />
    </Form.Group>
  )
}