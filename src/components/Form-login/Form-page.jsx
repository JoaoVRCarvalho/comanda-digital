import { Container, Form } from "react-bootstrap";
import { useState } from "react";
import InputCpf from "./FormInputCpf";
import FormButton from "./FormButton";
import InputPassword from "./FormInputPassword";
import './Form.css';

function FormComponent() {
  const [cpf, setCpf] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(data.get('cpf'), data.get('password'));
  }


  return (
    <Container id="form-main-container" className="d-grid h-100">
      <Form id="login-form" className="text-center w-100" onSubmit={handleSubmit}>
        <h1 className="mb-4 fw-normal">Login</h1>

        <InputCpf
          cpf={cpf}
          setCpf={setCpf}
        />

        <InputPassword />

        <FormButton />
      </Form>
    </Container>
  );
}

export default FormComponent;
