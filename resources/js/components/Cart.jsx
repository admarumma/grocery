import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import CartProduct from './CartProducts.jsx';

export default class Cart extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            products : []
        }
        this.delete = this.delete.bind(this);
    }

    componentDidMount(){
        let products = this.props.products
            , inCartProducts = [];
        this.props.cart.forEach(inCart => {
            products.forEach(item => {
                if(inCart.id == item.id){
                    item.qty = inCart.qty;
                    inCartProducts.push(item);
                }
            })
        });

        this.setState(
            {
                products : inCartProducts
            }, () => {
                console.log(this.state);
            }
        )
    }

    delete(id){
        let products = this.state.products;
        for(let i = 0; i < products.length; i++){
            if(products[i].id == id){
                products.splice(i, 1);
                break;
            }
        }
        this.setState(
            {
                products : products
            }
        )
        this.props.delete(id);
    }

    render() {
        return (
            <div>
                <Container>
                    <div className="innerProducts">
                        <div className="productsBlock">
                            {
                                this.state.products.map(data => {
                                    return <CartProduct  key={data.id} product={data} delete={this.delete} />
                                })
                            }
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}
