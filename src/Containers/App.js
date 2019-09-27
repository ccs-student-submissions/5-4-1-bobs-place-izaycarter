import React,{Component} from 'react';
import './../App.css';
import Menu from  "../Components/Menu";
import Cart from "./../Components/Cart";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class App extends Component{
    constructor(props){
        super(props);
        this.state={
            menu:[],
            cart:[],
            subtotal:0
        };
        this.addToCart = this.addToCart.bind(this);
        this.removeFromCart = this.removeFromCart.bind(this);
    }

    componentDidMount(){
        let menu= [{name:"dish one", price:10,description:"this is worth it"},{name:"dish Two", price:7,description:"get what you pay for"},{name:"dish three", price:12 ,description:"well i ran out of ideas"}];
        this.setState({menu: menu});
    }

    addToCart(item){
        console.log(typeof(item.price));
        let items = [...this.state.cart];
        items.push(item);
        this.setState((prevState , props)=> ({
            cart: items, subtotal: prevState.subtotal + item.price
        }));
        console.log(items);
    }

    removeFromCart(item){
    let items = [...this.state.cart];
    let index = items.indexOf(item);
    items.splice(index, 1);
    this.setState((prevState, props) =>({cart: items , subtotal: prevState.subtotal - item.price}));
  }




    render() {
      return (
            <Container>
            <Row><h1>test</h1></Row>
            <Row>
            <Col md={7}>
                <Menu menu = {this.state.menu} addToCart={this.addToCart}/>
            </Col>
            <Col md={5}>
                <Cart cart = {this.state.cart} subtotal = {this.state.subtotal} removeFromCart = {this.removeFromCart}/>


            </Col>
            </Row>
            <link
              rel="stylesheet"
              href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
              integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
              crossOrigin="anonymous"
            />
            </Container>
      );
    }
}

export default App;
