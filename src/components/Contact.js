import { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

import "./Contact.css";
import {emailRegex} from "../utils/helpers.js";

const Contact = () => {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email) => email && emailRegex(email);

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      if (!validateEmail(inputValue)) {
        setErrorMessage("Email is invalid");
        return;
      }
      setErrorMessage("");
      setEmail(inputValue);
    } else if (inputType === "message") {
      if (!message) {
        setErrorMessage("Message is required");
        return;
      }
      setErrorMessage("");
      setMessage(inputValue);
    } 
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid");
      return;
    }

    alert(`Thanks, ${email}. We will be in touch.`);

    setValidated(true);
    setErrorMessage("");
    setEmail("");
    setMessage("")
  };

  return (
    <div className="contact">
      <p>Please fill out the form</p>
      <Form validated={validated} onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <InputGroup hasValidation>
            <Form.Label>Email address: </Form.Label>
            <Form.Control
              onChange={handleInputChange}
              name="email"
              required
              type="email"
              placeholder="name@example.com"
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message: </Form.Label>
          <Form.Control required as="textarea" rows={3} />
          <Form.Control.Feedback type="invalid">
            Please provide a message.
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
        <p className="error">{errorMessage}</p>
      </Form>
    </div>
  );
};

export { Contact };
