import React, {Component} from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';


    class Menu extends Component {
        constructor(props){
            super(props);
            this.state={


            };
        }



        render(){
            let menuitem = this.props.menu.map((item, index) => {
                return <ListGroup>

                            <ListGroup.Item key={index}>
                                <Col sm={12} className="item-name">
                                    {item.name}
                                </Col>
                                <Col sm={12} className="item-description">
                                    {item.description}
                                </Col>
                                <Col sm={12}>
                                ${item.price}
                                <button type="button" onClick={() => this.props.addToCart(item)}>ADD TO CART</button>
                                </Col>

                            </ListGroup.Item>
                        </ListGroup>
            });
            return(
                <Col md={7}>
                    <h2>
                        plase work Menu
                    </h2>
                    <ul>
                        {menuitem}
                    </ul>
                </Col>
            );
        }
    }


export default Menu;
