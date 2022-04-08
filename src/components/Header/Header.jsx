import nasaPic from './rednasa.png';
import apod from './apod2.png';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { detectDevice } from '../../utils.jsx';
import './Header.scss';

function Header(props) {
  const { visible, handleIconClick } = props
  const userDevice = detectDevice()



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
        <Col
          xs={12}
          md={8}
          className={
            userDevice === 'tablet' || userDevice === 'desktop'
              ? 'tablet-or-up'
              : ''
          }
        >
        <Image

        src={apod}
        alt="logo2"
        className="app-logo2"
        />
        </Col>

      </Row>
    </Container>
  )
}

export default Header