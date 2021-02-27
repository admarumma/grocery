import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

export default class CartProduct extends Component {

    constructor(props) {
        super(props)
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
        const { image, name, price, id, qty } = this.props.product;
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
                                    <p>Кол-во : { qty }</p>
                                </div>
                                <div className="addCart">
                                    <Button variant="danger" onClick={() => this.props.delete(id)}>
                                         Удалить из <ShoppingBasketIcon/>
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
