import './App.css';
import {connect} from "react-redux";
import Header from "./components/Header";
import Nav from "./containers/Nav";
import Read from "./containers/Read";
import Control from "./containers/Control";
import Create from "./containers/Create";
import Update from "./containers/Update";
import { Component } from 'react';


class App extends Component {
  render() {
    var article = null;
    if(this.props.mode === "READ"){
      article = <Read></Read>;
    } else if(this.props.mode === "WELCOME"){
      article = <Read></Read>;
    } else if(this.props.mode === "CREATE"){
      article = <Create></Create>;
    } else if(this.props.mode === "UPDATE"){
      article = <Update></Update>;
    }

    return (
      <div className="App">
        <Header></Header>
        <Nav></Nav>
        <Control></Control>
        {article}
      </div>
    );
  }
  
}

export default connect(
  function(state){
    return {
      mode:state.mode
    }
  }
)(App);
