import React, {Component} from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

    class Cart extends Component{
        constructor(props){
            super(props);
            this.state = {

            };
        }

        render(){
            let cart = this.props.cart.map((item, index) => (

                            <Row key={index}>
                                <div className="item-name">
                                    {item.name}
                                </div>
                                {item.description},{item.price}
                                <button type="button" onClick={() => this.props.removeFromCart(item)}>Remove</button>
                            </Row>
                        ));
            return(
                <Col md={5}>
                    <Row className="cart-title">Check-Out CART</Row>
                    {cart}
                    <Row><p>Your Total:</p>${this.props.subtotal}</Row>

                </Col>
            )
        }


    }




export default Cart;
