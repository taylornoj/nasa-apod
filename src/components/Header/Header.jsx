import nasaPic from './rednasa.png';
import apod from './apod2.png';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { detectDevice } from '../../utils.jsx'


function Header() {



  return (
    <Container className="title-container">
      <Row>
        
          <Image
            
            src={nasaPic}
            alt="logo"
            className="app-logo"
          />
        
          <Image
            
            src={apod}
            alt="logo2"
            className="app-logo2"
          />
        
      </Row>
    </Container>
  )
}

export default Header