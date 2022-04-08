import nasaPic from './rednasa.png';
import apod from './apod2.png';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { detectDevice } from '../../utils.jsx';
import './Header.scss';

function Header(props) {
  const { visible, handleIconClick } = props



  return (
    <Container className="header-container">
      <Row>
        <Col
          xs={12}
          md={4}
          className={
            !visible ? 'app-logo-container' : 'app-logo-container blur'
          }
        >

        <Image

        src={nasaPic}
        alt="logo"
        className="app-logo"
        />
        </Col>

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