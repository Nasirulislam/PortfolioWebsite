import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

function Skeleton() {
  return (
    <div className='skeleton' style={{width: '100%', height: '100vh'}}>
      <Card style={{ width: '100%' }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder lg={12} />
          </Placeholder>
          {/* <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder> */}
          {/* <Placeholder.Button variant="primary" xs={6} /> */}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Skeleton;