import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import AddProject from "./AddProject";
import ChPass from "./ChPass";
import EditImages from "./EditImages";
import EditProject from "./EditProject";
import NavBar from "./NavBar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomeIndex from "./HomeIndex";
import IndexBackground from "./IndexBackground";

function Admin() {
  return (
    <div className="admin-section">
      <NavBar />
      <ToastContainer />
      <Tab.Container fluid id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={2} className="admin-side-bar">
            <div>
              <Nav
                variant="pills"
                className="flex-column  mx-4 my-5"
                style={{ color: "white", width: "160px" }}
              >
                <Nav.Item>
                  <Nav.Link
                    eventKey="first"
                    style={{ color: "white", width: "160px" }}
                  >
                    Add Project
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="second"
                    style={{ color: "white", width: "160px" }}
                  >
                    Edit Project
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="five"
                    style={{ color: "white", width: "160px" }}
                  >
                    Home Index
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="third"
                    style={{ color: "white", width: "160px" }}
                  >
                    Edit Images Index
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="six"
                    style={{ color: "white", width: "160px" }}
                  >
                    Index Background
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="fourth"
                    style={{ color: "white", width: "160px" }}
                  >
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
              <Tab.Pane eventKey="five">
                <HomeIndex />
              </Tab.Pane>
              <Tab.Pane eventKey="six">
                <IndexBackground />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default Admin;
