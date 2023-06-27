import axios from "axios";
import React from "react";
import { useState } from "react";
import { Card, Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import "./Admin.css";
import base_url from "../../constants/url";
import { useEffect } from "react";
function Login() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(false);

  const submitLogin = async (e) => {
    // e.preventdefault();
    setStatus(true);
    const body = {
      user: userName,
      password: password,
    };

    await axios.post(`${base_url}/project/login`, body).then((response) => {
      // console.log(response);
      if (response.data.status === "ok") {
        localStorage.setItem("Status", JSON.stringify("ok"));
        navigate("/admin-login");
      } else {
        localStorage.setItem("Status", JSON.stringify("not_ok"));
      }
      setStatus(false);
    });
  };
  return (
    <div className="login-section">
      <Card className="p-4 login-card">
        <div className="text-center">
          <h1>Login</h1>
        </div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter User Name"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>

          <Button
            variant="primary"
            className="d-flex align-items-center"
            type="submit12"
            onClick={(e) => {
              submitLogin(e);
            }}
            disabled={(userName === "" || password === "") || status ? true : false}
          >
            <Spinner animation="border" variant="light" className={status ? "me-2" : "d-none"} />
            Login
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default Login;
