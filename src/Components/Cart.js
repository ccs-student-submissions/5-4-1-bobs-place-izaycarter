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

                            <Row className="d-flex justify-content-between" key={index}>

                                    <span className="item-name">
                                        {item.name}
                                    </span>
                                    <span className="cart-price">
                                        ${item.price}
                                    </span>
                                <button type="button" onClick={() => this.props.removeFromCart(item)}>Remove</button>
                            </Row>
                        ));
            return(
                <Col className="">
                    <Row className="cart-title d-flex justify-content-center"><h2>Check-Out CART</h2></Row>
                    {cart}
                    <Row className="d-flex justify-content-center"><p>Your Total:</p>${this.props.subtotal}</Row>

                </Col>
            )
        }


    }




export default Cart;
