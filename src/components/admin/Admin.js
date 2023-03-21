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
import IndexBackground from "./IndexBackground";
import About from "./About";
import EditProjectIndex from "./EditProjectIndex";
import EditHomeIndex from "./EditHomeIndex";

function Admin({ projectData }) {

  const gotoHomeIndex = (e) => {
    window.location.href = '/admin/home-index';
  }

  return (
    <div className="admin-section bg-zinc-200 bgImg">
      <NavBar />
      <ToastContainer />
      <Tab.Container fluid id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={2} className="admin-side-bar bg-dark">
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
                    <i class="fa fa-plus-square me-2" aria-hidden="true"></i>

                    Add Project
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="second"
                    style={{ color: "white", width: "160px" }}
                  >
                    <i class="fa fa-pencil-square me-2" aria-hidden="true"></i>
                    Edit Project
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="five"
                    style={{ color: "white", width: "160px" }}
                    onClick={gotoHomeIndex}         
                  >
                    <i class="fa fa-home me-2" aria-hidden="true"></i>
                    Home Index
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="third"
                    style={{ color: "white", width: "160px" }}
                  >
                    <i class="fa fa-pencil-square me-2" aria-hidden="true"></i>
                    Edit Images Index
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="eight"
                    style={{ color: "white", width: "160px" }}
                  >
                    <i class="fa fa-pencil-square me-2" aria-hidden="true"></i>
                    Edit Project Index
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="nine"
                    style={{ color: "white", width: "160px" }}
                  >
                    <i class="fa fa-pencil-square me-2" aria-hidden="true"></i>
                    Edit Home Index
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="six"
                    style={{ color: "white", width: "160px" }}
                  >
                    <i class="fa fa-h-square me-2" aria-hidden="true"></i>
                    Index Background
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="seven"
                    style={{ color: "white", width: "160px" }}
                  >
                    <i class="fa fa-building me-2" aria-hidden="true"></i>
                    About
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="fourth"
                    style={{ color: "white", width: "160px" }}
                  >
                    <i class="fa fa-unlock-alt me-2" aria-hidden="true"></i>
                    Change Password
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </Col>
          <Col sm={10}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <AddProject projects={projectData} />
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
              {/* <Tab.Pane eventKey="five">
                <HomeIndex />
              </Tab.Pane> */}
              <Tab.Pane eventKey="six">
                <IndexBackground />
              </Tab.Pane>
              <Tab.Pane eventKey="seven">
                <About />
              </Tab.Pane>
              <Tab.Pane eventKey="eight">
                <EditProjectIndex />
              </Tab.Pane>
              <Tab.Pane eventKey="nine">
                <EditHomeIndex />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>      
    </div>
  );
}

export default Admin;
