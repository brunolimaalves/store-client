import ShowCase from '../showcase'
import CartSummary from '../cart/cartSummary'
import Details from '../cart/details'

import { Container, Row, Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';


const Layout = () => {

    return (
        <Container fluid>
            <Row>
                <Col style={{border:'1px solid red'}} md={10}>YourMall - =)</Col>
                <Col  style={{border:'1px solid blue'}} md={2}><CartSummary /></Col>
            </Row>
            <Row>
                <Col style={{border:'1px solid red'}} md={10}><ShowCase /></Col>
                <Col  style={{border:'1px solid blue'}} md={2}><Details /></Col>
            </Row>
        </Container>

    )

}

export default Layout;