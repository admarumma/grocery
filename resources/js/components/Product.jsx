import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

export default class Product extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             qty : 1
        }
        this.innerCont = this.innerCont.bind(this)
    }
    

    innerCont(qty){
        this.setState(
            {
                qty : qty
            }
        )
    }

    render() {
        const { image, name, price, id } = this.props.product;
        
        let qty = this.state.qty;
        return (
            <div className="product">
                <Container>
                    <Row>
                        <Col sm={3}>
                            <div className="productsImage">
                                <img src={image} alt=""/>
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className="productsName">
                                <p>{ name }</p>
                            </div>
                            <div className="price">
                                <p>{ price }</p>
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className="controlWrap">
                                <div className="control">
                                    <span className="cont" onClick={() => this.innerCont(qty - 1 == 0 ? 1 : qty - 1)}>
                                    <RemoveIcon/>
                                    </span>
                                    <span className="cont qty">{ qty }</span>
                                    <span className="cont" onClick={() => this.innerCont(qty + 1)}>
                                        <AddIcon/>
                                    </span>
                                </div>
                                <div className="addCart">
                                    <Button variant="primary" onClick={() => this.props.control(id, qty)}>
                                         Добавить в <ShoppingBasketIcon/>
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
