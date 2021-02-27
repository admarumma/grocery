import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

// Icons
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <Container>
                    <Row>
                        <Col>
                            <div className="logo">
                                <h3>My logo</h3>
                            </div>
                        </Col>
                        <Col>
                            <div className="cartBlock">
                                <Link to="/cart">
                                    <div className="cart">
                                        <div id="cartQty">{ this.props.cart }</div>
                                        <ShoppingBasketIcon/>
                                    </div>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
