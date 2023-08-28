import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import from './components/table'
function App() {
  return (
    <Container>
      <Row>
        <Col md="12">
          <Alert variant="danger">
            React APP - Test Toolbox
          </Alert>
        </Col>
        <Col md="12">
          
        </Col>
      </Row>
    </Container>
  );
}

export default App;
