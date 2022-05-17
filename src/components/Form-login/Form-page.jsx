import { Container, Form } from "react-bootstrap";
import { useRef } from "react";
import InputCpf from "./FormInputCpf";
import FormButton from "./FormButton";
import InputPassword from "./FormInputPassword";
import './Form.css';

//login form
function FormComponent() {
  const cpfRef = useRef();

  // prints the current cpf and password values
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(data);
    console.log(data.get('cpf'), data.get('password'));
  }

  return (
    <Container id="form-main-container" className="d-grid h-100">
      <Form id="login-form" className="text-center w-100" onSubmit={handleSubmit}>
        <h1 className="mb-4 fw-normal">Login</h1>

        <InputCpf
          name="cpf"
          maxLength="11"
          refer={cpfRef}
          type="text"
          placeholder="Numero do CPF"
        />

        <InputPassword 
          name="password"
          type="password"
          placeholder="Senha"
          maxLength="16"
        />

        <FormButton/>
      </Form>
    </Container>
  );
}

export default FormComponent;
