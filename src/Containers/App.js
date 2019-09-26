import React,{Component} from 'react';
import './../App.css';
import Menu from  "./../Components/Menu";


class App extends Component{
    constructor(props){
        super(props);
        this.state={
            menu:[]
        };
    }

    componentDidMount(){
        let menuItem = [{name:"dish one", price:10,describe:"this is worth it"}]
        this.setState({menu: menuItem});
    }

    render(){
        console.log(this.state.menu);
      return (
        <div className="App">
            <h1>test</h1>
            <Menu />
        </div>
      );
    }
}

export default App;
