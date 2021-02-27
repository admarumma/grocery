import axios from 'axios';
import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Product from './Product.jsx';

class Main extends Component {
    render() {
        return (
            <div>
                <Container>
                    <div className="innerProducts">
                        <div className="productsBlock">
                            {
                                this.props.products.map((data) => {
                                    return <Product key={data.id} product={data} control={this.props.control} />;
                                })
                            }
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}

export default Main;