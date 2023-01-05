import axios from "axios";
import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Admin.css";
import base_url from "../../constants/url";
import { useState } from "react";

function ChPass(props) {
  const [oldPassword, setOldPass] = useState("");
  const [userName, setUserName] = useState("admin");
  const [newPassword, setNewPassword] = useState("");
  const [RepeatedPassword, setRepeatedPassword] = useState("");

  const matchPassword = () => {
    if (
      RepeatedPassword === "" ||
      newPassword === "" ||
      RepeatedPassword.localeCompare(newPassword)
    ) {
      setNewPassword("Password Don't Match");
      setRepeatedPassword("Password Don't Match");
      return false;
    }
    return true;
  };

  const changePass = async () => {
    if (matchPassword()) {
      await axios
        .post(`${base_url}/project/change`, {
          user: userName,
          password: oldPassword,
          newPass: newPassword,
        })
        .then((response) => {
          if (response.data.status === "success") {
            setNewPassword("");
            setOldPass("");
            setRepeatedPassword("");
            alert("Password Changed");
          } else {
            setNewPassword("Password Don't Match");
            setRepeatedPassword("Password Don't Match");
          }
        });
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center ChPass-section">
      <Card className="p-3 my-5 form-card">
        <Form>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Label>Enter Old Password</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Old Password"
              value={oldPassword}
              onChange={(e) => {
                setOldPass(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Label>Enter New Password</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter New Password"
              value={newPassword}
              onChange={(e) => {
                setNewPassword(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the password again"
              value={RepeatedPassword}
              onChange={(e) => {
                setRepeatedPassword(e.target.value);
              }}
            />
          </Form.Group>

          <Button type="submit01" variant="primary" onClick={() => changePass()}>
            Update the Password
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default ChPass;
