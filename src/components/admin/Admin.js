import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import AddProject from './AddProject';
import EditImages from './EditImages';
import EditProject from './EditProject';

function Admin() {
  return (
    <Tab.Container  id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={2}>
          <Nav variant="pills" className="flex-column  mx-4 my-5">
            <Nav.Item>
              <Nav.Link eventKey="first">Add Project</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Edit Project</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Edit Images Index</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={10}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
             <AddProject/>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
             <EditProject/>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
             <EditImages/>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default Admin;