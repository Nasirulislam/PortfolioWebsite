import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

import AddProject from "./AddProject";
import ChPass from "./ChPass";
import EditImages from "./EditImages";
import EditProject from "./EditProject";

import NavBar from "./NavBar";

function Admin() {
  return (
    <div className="admin-section">
      <NavBar />
      <Tab.Container fluid id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={2} className="admin-side-bar">
            <div>
              <Nav
                variant="pills"
                className="flex-column  mx-4 my-5"
                style={{ color: "white" }}
              >
                <Nav.Item>
                  <Nav.Link eventKey="first" style={{ color: "white" }}>
                    Add Project
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second" style={{ color: "white" }}>
                    Edit Project
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third" style={{ color: "white" }}>
                    Edit Images Index
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth" style={{ color: "white" }}>
                    Change Password
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </Col>
          <Col sm={10}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <AddProject />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <EditProject />
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <EditImages />
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <ChPass />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default Admin;
