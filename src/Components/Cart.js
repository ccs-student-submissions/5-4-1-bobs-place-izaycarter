import React, {Component} from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../Css/Cart.css"
    class Cart extends Component{
        constructor(props){
            super(props);
            this.state = {

            };
        }

        render(){
            let cart = this.props.cart.map((item, index) => (

                            <Row className="d-flex justify-content-between cart-items" key={index}>

                                    <span className="item-name">
                                        {item.name}
                                    </span>
                                    <span className="cart-price">
                                        ${item.price}
                                    </span>
                                <button className="cart-button" type="button" onClick={() => this.props.removeFromCart(item)}>Remove</button>
                            </Row>
                        ));
            return(
                <Col>
                    <Row className="cart-title  cart-font d-flex justify-content-center"><h2>Check-Out</h2></Row>
                    {cart}
                    <Row className="d-flex justify-content-center cart-font"><p>Your Total:</p>${this.props.subtotal}</Row>
                </Col>
            )
        }


    }




export default Cart;
