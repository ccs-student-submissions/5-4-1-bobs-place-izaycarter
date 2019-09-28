import React,{Component} from 'react';
import './../Css/App.css';
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
        let menu= [{name:"Napoleon", price:20,description:"House-aged 1855 Black Angus filet mignon grilled to perfection layered with the perfect crab cake, rice pilaf, sofrito collard greens and a caramelized onion béarnaise sauce. Highly recommended."},{name:"Barbie Basted Chicken Breast", price:10 ,description:"Roasted chicken breast smothered with a brown sugar & chili barbecue sauce, caramelized onions and finished with smoked bacon collard greens and rice pilaf."},{name:"Carpet Bagger", price:56 ,description:"House-aged 1855 Black Angus filet mignon grilled to perfection combined with hand breaded oysters fried golden, smoked bacon collard greens and garlic mashed potatoes. All finished with a spicy tarragon rémoulade."},{name:"Just too good to be named… ", price:25 , description:"The perfect layered combination of Chipotle blackened sashimi grade tuna, warm goat cheese, roasted tomato chowchow, Sofrito style collard greens, rice pilaf and finished with a balsamic glaze."},{name:"Pappardelle & Meatballs", price:29 , description:"Fresh pappardelle noodles, lamb meatballs, lamb ragout, rosemary infused mascarpone, lemon pin-nut gremolata"}];

        this.setState({menu: menu});
    }

    addToCart(item){
        console.log(typeof(item.price));
        let items = [...this.state.cart];
        items.push(item);
        this.setState((prevState ,props)=> ({
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
            <Container className="page-container">
            <Row className="mb-2"><h1>Zay's </h1></Row>
            <Row>
            <Col md={7} className="pl-0">
                <Menu menu = {this.state.menu} addToCart={this.addToCart}/>
            </Col>
            <Col md={5} className="d-flex justify-content-center">
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
