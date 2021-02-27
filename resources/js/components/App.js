import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import Main from './Main.jsx';
import Cart from './Cart.jsx';
import Header from './Header.jsx';
import '../../css/app.scss'
import { bind } from 'lodash';

export default class App extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             cart : {
                 cartQty : 0,
                 cartItems : []
             },
             products : [
                {
                    id : 1,
                    image : "https://anor.tj/assets/images/thumbnails/1597663732gY0QvXeH.jpg",
                    price : 11.2,
                    name : "Шоколад «Бабаевский» темный с фунду..."
                },
                {
                   id : 2,
                   image : "https://anor.tj/assets/images/thumbnails/1603441878quChUSyb.jpg",
                   price : 250,
                   name : "Наушники PRODA PD-E400"
               },
               {
                   id : 3,
                   image : "https://anor.tj/assets/images/thumbnails/1604940125V5rruIz5.jpg",
                   price : 11.2,
                   name : "Москва - столица нашей Родины (Моя Россия) изд; 'Росмэн' 4901990000"
               },
               {
                   id : 4,
                   image : "https://anor.tj/assets/images/thumbnails/1604746415GkBTFvhY.jpg",
                   price : 11.2,
                   name : "Консилер для кожи вокруг глаз Maybelline New York Instant Anti-Age The Eraser 6.8 мл"
               }
            ]
        }
        this.control = this.control.bind(this)
        this.delete = this.delete.bind(this)
    }

    delete(id){
        let products = this.state.cart.cartItems;
        for(let i = 0; i < products.length; i++){
            if(products[i].id == id){
                products.splice(i, 1);
                break;
            }
        }
        this.setState(
            {
                cart : {
                    cartQty : this.state.cart.cartQty - 1,
                    cartItems : products
                }
            }
        )
    }
    
    control(id, qty){
        let added = false
        , products = this.state.cart.cartItems;

        products.map(el => {
            if(el.id == id){
                added = true;
                el.qty = qty;
            }
        });

        if(!added){
            products.push({
                id : id,
                qty : qty
            });
        }
        this.setState(
            {
                cart : {
                    cartQty : !added ? this.state.cart.cartQty + 1 : this.state.cart.cartQty, 
                    cartItems : products
                }
            }
        )
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header cart={this.state.cart.cartQty} />
                    <Route path="/" exact render={() => <Main cart={this.state.cart} control={this.control} products={this.state.products} />} />
                    <Route path="/cart" render={() => <Cart cart={this.state.cart.cartItems} delete={this.delete} products={this.state.products} />} />
                </BrowserRouter>
            </div>
        )
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
