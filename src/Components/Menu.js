import React, {Component} from "react";
import "./../Css/Menu.css"
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import {FaCartPlus} from "react-icons/fa"


    class Menu extends Component {
        constructor(props){
            super(props);
            this.state={


            };
        }



        render(){
            let entreeMenu = this.props.entreeMenu;
            let appetizerMenu = this.props.appetizerMenu;
            let dessertMenu = this.props.dessertMenu;

            let menuitem = this.props.menu.map((item, index) => {
                return <ListGroup key={index}>
                            <ListGroup.Item className="border-0 pl-0">
                                <Col sm={12} className="item-name">
                                    {item.name}
                                </Col>
                                <Col sm={12} className="item-description">
                                    {item.description}
                                </Col>
                                <Col className="border-bottom d-flex justify-content-between align-items-end" sm={12} >
                                ${item.price}
                                <button className="cart-button" type="button" onClick={() => this.props.addToCart(item)}><FaCartPlus /></button>
                                </Col>

                            </ListGroup.Item>
                        </ListGroup>
            });
            return(
                <main className="d-flex menu-wrapper">
                    <h2 className="title-menu d-flex justify-content-center">
                        {appetizerMenu ? "Appetizer Menu" : dessertMenu ? "Dessert Menu" : entreeMenu ? "Entree Menu": "Menu"}
                    </h2>
                    <ul className="menu-list pl-0">
                        {menuitem}
                    </ul>
                </main>
            );
        }
    }


export default Menu;
