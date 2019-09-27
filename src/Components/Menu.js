import React, {Component} from "react";
import "./../Css/Menu.css"
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

                            <ListGroup.Item key={index} className="border-0 pl-0">
                                <Col sm={12} className="item-name">
                                    {item.name}
                                </Col>
                                <Col sm={12} className="item-description">
                                    {item.description}
                                </Col>
                                <Col className="border-bottom d-flex justify-content-between align-items-end" sm={12} >
                                ${item.price}
                                <button type="button" onClick={() => this.props.addToCart(item)}>ADD TO CART</button>
                                </Col>

                            </ListGroup.Item>
                        </ListGroup>
            });
            return(
                <main>
                    <h2 className="d-flex justify-content-center">
                        Menu
                    </h2>
                    <ul className="menu-list pl-0">
                        {menuitem}
                    </ul>
                </main>
            );
        }
    }


export default Menu;
