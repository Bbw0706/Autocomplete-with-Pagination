import React, { Component } from 'react';
import {Row, Col} from "react-materialize"

import '../styles/App.css';

import Searchbar from "./child/Searchbar";
import List from "./child/List";

class App extends Component {
  constructor(){
    super();

    this.state= {
      data : [],
      currentPage : 1,
      itemperpage : 7
    }
  }

  componentDidMount(){
    
    for(var i = 0; i < 9; i++){
      fetch("https://swapi.co/api/people/?page=" + Number(i+1))
      .then(res => res.json())
      .then(data => {
        var updatedData = this.state.data.concat(data.results)
        this.setState({
          data : updatedData
        })
        
      })
    }
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event)
    });
  }

  render() {
    console.log(this.state.data)
    return (
      <div className="container">
        <p className="cyan-text flow-text">Some Autocomplete with Pagination</p>
        <p className="Create">
          Create by React JS, React-Materialize and Materialize-css
          <br/>
          &copy; Bee
        </p>
        <br/> <br/>
        <Row>
          <Col s={12} m={6}>
            <Searchbar data = {this.state.data} />
          </Col>
          <Col s={12}>
            <List data={this.state.data} currentpage={this.state.currentPage} itemperpage={this.state.itemperpage} Click = {this.handleClick.bind(this)}/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
