import React from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import "./Admin.css";

function Login() {
    const navigate = useNavigate();
  return (
    <div className="login-section">
      <Card className="p-4 login-card">
        <div className="text-center">
          <h1>Login</h1>
        </div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={()=>navigate("/admin-login")}>
            Login
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default Login;
